// GENERATED from public/reservation/rs-24-service-view/index.html by scripts/convert_legacy.py.
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
    "href": "/reservation/rs-24-service-view/rs-24-service-view.css",
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

export default function ReservationRs24ServiceView() {
  return (
    <ScreenShell title="Service View" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="RS-24" data-code="RS-24" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="RS-24" aria-current="page" title="Service View" to={"/reservation/rs-24-service-view"}>
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
            <main className="app__content" id="main" data-code="RS-24" tabIndex="-1">
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
                        <span aria-current="page">{"Service View"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Service View"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"RS-24"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <label className="hfilter__btn" htmlFor="rs24-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="rs24-f" aria-label="Show filters" />
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
                              {"From"}
                            </span>
                            <select className="hf-f__c" name="sv-from" defaultValue={"22"}>
                              <option value="22">{"Thu 22 Oct 2026 · 14 days"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#utensils" />
                              </svg>
                              {"Service"}
                            </span>
                            <select className="hf-f__c" name="sv-s" defaultValue={"all"}>
                              <option value="all">{"Breakfast, lunch and dinner"}</option>
                              <option value="b">{"Breakfast only"}</option>
                              <option value="l">{"Lunch only"}</option>
                              <option value="d">{"Dinner only"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#shield-check" />
                              </svg>
                              {"Status"}
                            </span>
                            <select className="hf-f__c" name="sv-g" defaultValue={"all"}>
                              <option value="all">{"All statuses"}</option>
                              <option value="i">{"In house"}</option>
                              <option value="c">{"Confirmed / guaranteed"}</option>
                              <option value="t">{"Tentative"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#map-pin" />
                              </svg>
                              {"Outlet"}
                            </span>
                            <select className="hf-f__c" name="sv-o" defaultValue={"all"}>
                              <option value="all">{"Travancore Restaurant"}</option>
                              <option value="sg">{"Seafood Grill (dinner, Oct–Mar)"}</option>
                              <option value="ird">{"In-room Dining"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                        </div>
                        <div className="hfilter__acts">
                          <label className="hfilter__clear" htmlFor="rs24-f" role="button">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#x" />
                            </svg>
                            <span>{"Close"}</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="page-header__actions">
                    <a className="btn ph-ic" href="#RS-24-report">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Service report"}
                    </a>
                    <Link className="btn" data-leads-to="RS-04" to={"/reservation/rs-04-availability-and-rate-search"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calendar-range" />
                      </svg>
                      {"Availability chart"}
                    </Link>
                  </div>
                </div>
              </header>
              <div className="svw">
                <input className="sv-in" type="radio" name="svr" id="svr-ab0" aria-label="All bookings – Breakfast on Thu 22 Oct" defaultChecked={true} />
                <input className="sv-in" type="radio" name="svr" id="svr-ab1" aria-label="All bookings – Breakfast on Fri 23 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ab2" aria-label="All bookings – Breakfast on Sat 24 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ab3" aria-label="All bookings – Breakfast on Sun 25 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ab4" aria-label="All bookings – Breakfast on Mon 26 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ab5" aria-label="All bookings – Breakfast on Tue 27 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ab6" aria-label="All bookings – Breakfast on Wed 28 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ab7" aria-label="All bookings – Breakfast on Thu 29 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ab8" aria-label="All bookings – Breakfast on Fri 30 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ab9" aria-label="All bookings – Breakfast on Sat 31 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ab10" aria-label="All bookings – Breakfast on Sun 1 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-ab11" aria-label="All bookings – Breakfast on Mon 2 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-ab12" aria-label="All bookings – Breakfast on Tue 3 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-ab13" aria-label="All bookings – Breakfast on Wed 4 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-al0" aria-label="All bookings – Lunch on Thu 22 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-al1" aria-label="All bookings – Lunch on Fri 23 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-al2" aria-label="All bookings – Lunch on Sat 24 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-al3" aria-label="All bookings – Lunch on Sun 25 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-al4" aria-label="All bookings – Lunch on Mon 26 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-al5" aria-label="All bookings – Lunch on Tue 27 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-al6" aria-label="All bookings – Lunch on Wed 28 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-al7" aria-label="All bookings – Lunch on Thu 29 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-al8" aria-label="All bookings – Lunch on Fri 30 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-al9" aria-label="All bookings – Lunch on Sat 31 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-al10" aria-label="All bookings – Lunch on Sun 1 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-al11" aria-label="All bookings – Lunch on Mon 2 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-al12" aria-label="All bookings – Lunch on Tue 3 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-al13" aria-label="All bookings – Lunch on Wed 4 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad0" aria-label="All bookings – Dinner on Thu 22 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad1" aria-label="All bookings – Dinner on Fri 23 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad2" aria-label="All bookings – Dinner on Sat 24 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad3" aria-label="All bookings – Dinner on Sun 25 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad4" aria-label="All bookings – Dinner on Mon 26 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad5" aria-label="All bookings – Dinner on Tue 27 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad6" aria-label="All bookings – Dinner on Wed 28 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad7" aria-label="All bookings – Dinner on Thu 29 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad8" aria-label="All bookings – Dinner on Fri 30 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad9" aria-label="All bookings – Dinner on Sat 31 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad10" aria-label="All bookings – Dinner on Sun 1 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad11" aria-label="All bookings – Dinner on Mon 2 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad12" aria-label="All bookings – Dinner on Tue 3 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-ad13" aria-label="All bookings – Dinner on Wed 4 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib0" aria-label="In house – Breakfast on Thu 22 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib1" aria-label="In house – Breakfast on Fri 23 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib2" aria-label="In house – Breakfast on Sat 24 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib3" aria-label="In house – Breakfast on Sun 25 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib4" aria-label="In house – Breakfast on Mon 26 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib5" aria-label="In house – Breakfast on Tue 27 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib6" aria-label="In house – Breakfast on Wed 28 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib7" aria-label="In house – Breakfast on Thu 29 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib8" aria-label="In house – Breakfast on Fri 30 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib9" aria-label="In house – Breakfast on Sat 31 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib10" aria-label="In house – Breakfast on Sun 1 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib11" aria-label="In house – Breakfast on Mon 2 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib12" aria-label="In house – Breakfast on Tue 3 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-ib13" aria-label="In house – Breakfast on Wed 4 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-il0" aria-label="In house – Lunch on Thu 22 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-il1" aria-label="In house – Lunch on Fri 23 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-il2" aria-label="In house – Lunch on Sat 24 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-il3" aria-label="In house – Lunch on Sun 25 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-il4" aria-label="In house – Lunch on Mon 26 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-il5" aria-label="In house – Lunch on Tue 27 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-il6" aria-label="In house – Lunch on Wed 28 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-il7" aria-label="In house – Lunch on Thu 29 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-il8" aria-label="In house – Lunch on Fri 30 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-il9" aria-label="In house – Lunch on Sat 31 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-il10" aria-label="In house – Lunch on Sun 1 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-il11" aria-label="In house – Lunch on Mon 2 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-il12" aria-label="In house – Lunch on Tue 3 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-il13" aria-label="In house – Lunch on Wed 4 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-id0" aria-label="In house – Dinner on Thu 22 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-id1" aria-label="In house – Dinner on Fri 23 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-id2" aria-label="In house – Dinner on Sat 24 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-id3" aria-label="In house – Dinner on Sun 25 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-id4" aria-label="In house – Dinner on Mon 26 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-id5" aria-label="In house – Dinner on Tue 27 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-id6" aria-label="In house – Dinner on Wed 28 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-id7" aria-label="In house – Dinner on Thu 29 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-id8" aria-label="In house – Dinner on Fri 30 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-id9" aria-label="In house – Dinner on Sat 31 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-id10" aria-label="In house – Dinner on Sun 1 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-id11" aria-label="In house – Dinner on Mon 2 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-id12" aria-label="In house – Dinner on Tue 3 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-id13" aria-label="In house – Dinner on Wed 4 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb0" aria-label="Confirmed / guaranteed – Breakfast on Thu 22 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb1" aria-label="Confirmed / guaranteed – Breakfast on Fri 23 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb2" aria-label="Confirmed / guaranteed – Breakfast on Sat 24 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb3" aria-label="Confirmed / guaranteed – Breakfast on Sun 25 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb4" aria-label="Confirmed / guaranteed – Breakfast on Mon 26 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb5" aria-label="Confirmed / guaranteed – Breakfast on Tue 27 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb6" aria-label="Confirmed / guaranteed – Breakfast on Wed 28 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb7" aria-label="Confirmed / guaranteed – Breakfast on Thu 29 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb8" aria-label="Confirmed / guaranteed – Breakfast on Fri 30 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb9" aria-label="Confirmed / guaranteed – Breakfast on Sat 31 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb10" aria-label="Confirmed / guaranteed – Breakfast on Sun 1 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb11" aria-label="Confirmed / guaranteed – Breakfast on Mon 2 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb12" aria-label="Confirmed / guaranteed – Breakfast on Tue 3 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-cb13" aria-label="Confirmed / guaranteed – Breakfast on Wed 4 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl0" aria-label="Confirmed / guaranteed – Lunch on Thu 22 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl1" aria-label="Confirmed / guaranteed – Lunch on Fri 23 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl2" aria-label="Confirmed / guaranteed – Lunch on Sat 24 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl3" aria-label="Confirmed / guaranteed – Lunch on Sun 25 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl4" aria-label="Confirmed / guaranteed – Lunch on Mon 26 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl5" aria-label="Confirmed / guaranteed – Lunch on Tue 27 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl6" aria-label="Confirmed / guaranteed – Lunch on Wed 28 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl7" aria-label="Confirmed / guaranteed – Lunch on Thu 29 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl8" aria-label="Confirmed / guaranteed – Lunch on Fri 30 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl9" aria-label="Confirmed / guaranteed – Lunch on Sat 31 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl10" aria-label="Confirmed / guaranteed – Lunch on Sun 1 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl11" aria-label="Confirmed / guaranteed – Lunch on Mon 2 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl12" aria-label="Confirmed / guaranteed – Lunch on Tue 3 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-cl13" aria-label="Confirmed / guaranteed – Lunch on Wed 4 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd0" aria-label="Confirmed / guaranteed – Dinner on Thu 22 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd1" aria-label="Confirmed / guaranteed – Dinner on Fri 23 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd2" aria-label="Confirmed / guaranteed – Dinner on Sat 24 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd3" aria-label="Confirmed / guaranteed – Dinner on Sun 25 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd4" aria-label="Confirmed / guaranteed – Dinner on Mon 26 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd5" aria-label="Confirmed / guaranteed – Dinner on Tue 27 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd6" aria-label="Confirmed / guaranteed – Dinner on Wed 28 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd7" aria-label="Confirmed / guaranteed – Dinner on Thu 29 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd8" aria-label="Confirmed / guaranteed – Dinner on Fri 30 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd9" aria-label="Confirmed / guaranteed – Dinner on Sat 31 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd10" aria-label="Confirmed / guaranteed – Dinner on Sun 1 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd11" aria-label="Confirmed / guaranteed – Dinner on Mon 2 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd12" aria-label="Confirmed / guaranteed – Dinner on Tue 3 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-cd13" aria-label="Confirmed / guaranteed – Dinner on Wed 4 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb0" aria-label="Tentative – Breakfast on Thu 22 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb1" aria-label="Tentative – Breakfast on Fri 23 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb2" aria-label="Tentative – Breakfast on Sat 24 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb3" aria-label="Tentative – Breakfast on Sun 25 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb4" aria-label="Tentative – Breakfast on Mon 26 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb5" aria-label="Tentative – Breakfast on Tue 27 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb6" aria-label="Tentative – Breakfast on Wed 28 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb7" aria-label="Tentative – Breakfast on Thu 29 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb8" aria-label="Tentative – Breakfast on Fri 30 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb9" aria-label="Tentative – Breakfast on Sat 31 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb10" aria-label="Tentative – Breakfast on Sun 1 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb11" aria-label="Tentative – Breakfast on Mon 2 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb12" aria-label="Tentative – Breakfast on Tue 3 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-tb13" aria-label="Tentative – Breakfast on Wed 4 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl0" aria-label="Tentative – Lunch on Thu 22 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl1" aria-label="Tentative – Lunch on Fri 23 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl2" aria-label="Tentative – Lunch on Sat 24 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl3" aria-label="Tentative – Lunch on Sun 25 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl4" aria-label="Tentative – Lunch on Mon 26 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl5" aria-label="Tentative – Lunch on Tue 27 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl6" aria-label="Tentative – Lunch on Wed 28 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl7" aria-label="Tentative – Lunch on Thu 29 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl8" aria-label="Tentative – Lunch on Fri 30 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl9" aria-label="Tentative – Lunch on Sat 31 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl10" aria-label="Tentative – Lunch on Sun 1 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl11" aria-label="Tentative – Lunch on Mon 2 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl12" aria-label="Tentative – Lunch on Tue 3 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-tl13" aria-label="Tentative – Lunch on Wed 4 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-td0" aria-label="Tentative – Dinner on Thu 22 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-td1" aria-label="Tentative – Dinner on Fri 23 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-td2" aria-label="Tentative – Dinner on Sat 24 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-td3" aria-label="Tentative – Dinner on Sun 25 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-td4" aria-label="Tentative – Dinner on Mon 26 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-td5" aria-label="Tentative – Dinner on Tue 27 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-td6" aria-label="Tentative – Dinner on Wed 28 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-td7" aria-label="Tentative – Dinner on Thu 29 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-td8" aria-label="Tentative – Dinner on Fri 30 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-td9" aria-label="Tentative – Dinner on Sat 31 Oct" />
                <input className="sv-in" type="radio" name="svr" id="svr-td10" aria-label="Tentative – Dinner on Sun 1 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-td11" aria-label="Tentative – Dinner on Mon 2 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-td12" aria-label="Tentative – Dinner on Tue 3 Nov" />
                <input className="sv-in" type="radio" name="svr" id="svr-td13" aria-label="Tentative – Dinner on Wed 4 Nov" />
                <section className="sv-hero" aria-label="Today at a glance">
                  <div className="sv-hero__t">
                    <p className="sv-hero__k">{"Meals booked with the room · today"}</p>
                    <h2>{"Thu 22 Oct 2026"}</h2>
                    <p className="sv-hero__s">{"Counted from each booking's meal plan (CP, MAP, AP) and the meal add-ons booked with it."}</p>
                  </div>
                  <div className="sv-hero__n">
                    <div>
                      <span>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast"}
                      </span>
                      <b>{"83"}</b>
                    </div>
                    <div>
                      <span>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch"}
                      </span>
                      <b>{"2"}</b>
                    </div>
                    <div>
                      <span>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner"}
                      </span>
                      <b>{"7"}</b>
                    </div>
                  </div>
                </section>
                <div className="sv-grid-card">
                  <div className="sv-scroll">
                    <table className="sv-t" data-nosort="" data-mc="">
                      <caption className="sr-only">{"Covers per service and day – click a number to list the bookings"}</caption>
                      <thead>
                        <tr>
                          <th scope="col" className="sv-corner">{"Service"}</th>
                          <th scope="col" className="is-today">
                            <span>{"Thu"}</span>
                            <b>{"22"}</b>
                            <span>{"Oct"}</span>
                          </th>
                          <th scope="col" className=" is-we">
                            <span>{"Fri"}</span>
                            <b>{"23"}</b>
                            <span>{"Oct"}</span>
                          </th>
                          <th scope="col" className=" is-we">
                            <span>{"Sat"}</span>
                            <b>{"24"}</b>
                            <span>{"Oct"}</span>
                          </th>
                          <th scope="col" className="">
                            <span>{"Sun"}</span>
                            <b>{"25"}</b>
                            <span>{"Oct"}</span>
                          </th>
                          <th scope="col" className="">
                            <span>{"Mon"}</span>
                            <b>{"26"}</b>
                            <span>{"Oct"}</span>
                          </th>
                          <th scope="col" className="">
                            <span>{"Tue"}</span>
                            <b>{"27"}</b>
                            <span>{"Oct"}</span>
                          </th>
                          <th scope="col" className="">
                            <span>{"Wed"}</span>
                            <b>{"28"}</b>
                            <span>{"Oct"}</span>
                          </th>
                          <th scope="col" className="">
                            <span>{"Thu"}</span>
                            <b>{"29"}</b>
                            <span>{"Oct"}</span>
                          </th>
                          <th scope="col" className=" is-we">
                            <span>{"Fri"}</span>
                            <b>{"30"}</b>
                            <span>{"Oct"}</span>
                          </th>
                          <th scope="col" className=" is-we">
                            <span>{"Sat"}</span>
                            <b>{"31"}</b>
                            <span>{"Oct"}</span>
                          </th>
                          <th scope="col" className="">
                            <span>{"Sun"}</span>
                            <b>{"1"}</b>
                            <span>{"Nov"}</span>
                          </th>
                          <th scope="col" className="">
                            <span>{"Mon"}</span>
                            <b>{"2"}</b>
                            <span>{"Nov"}</span>
                          </th>
                          <th scope="col" className="">
                            <span>{"Tue"}</span>
                            <b>{"3"}</b>
                            <span>{"Nov"}</span>
                          </th>
                          <th scope="col" className="">
                            <span>{"Wed"}</span>
                            <b>{"4"}</b>
                            <span>{"Nov"}</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="sv-g sv-g--a">
                          <th scope="rowgroup" colSpan="15">
                            <span>
                              {"All bookings "}
                              <b>{"56 bookings"}</b>
                            </span>
                          </th>
                        </tr>
                        <tr className="sv-r sv-r--b sv-in-a">
                          <th scope="row" data-label="Service" data-w2="" data-t="">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#sunrise" />
                            </svg>
                            {"Breakfast"}
                          </th>
                          <td className="sv-now" data-label="Thu 22 Oct" data-w2="">
                            <label htmlFor="svr-ab0" title="Breakfast Thu 22 Oct: 77 included, 6 extra">{"83"}</label>
                          </td>
                          <td className="is-we" data-label="Fri 23 Oct" data-w2="">
                            <label htmlFor="svr-ab1" title="Breakfast Fri 23 Oct: 110 included">{"110"}</label>
                          </td>
                          <td className="is-we" data-label="Sat 24 Oct" data-w2="">
                            <label htmlFor="svr-ab2" title="Breakfast Sat 24 Oct: 81 included">{"81"}</label>
                          </td>
                          <td data-label="Sun 25 Oct" data-w2="">
                            <label htmlFor="svr-ab3" title="Breakfast Sun 25 Oct: 62 included">{"62"}</label>
                          </td>
                          <td data-label="Mon 26 Oct" data-w2="">
                            <label htmlFor="svr-ab4" title="Breakfast Mon 26 Oct: 25 included">{"25"}</label>
                          </td>
                          <td data-label="Tue 27 Oct" data-w2="">
                            <label htmlFor="svr-ab5" title="Breakfast Tue 27 Oct: 10 included">{"10"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ab6" title="Breakfast Wed 28 Oct: 0 included">{"–"}</label>
                          </td>
                          <td data-label="Thu 29 Oct" data-w2="" data-m="">
                            <label htmlFor="svr-ab7" title="Breakfast Thu 29 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-we" data-label="Fri 30 Oct" data-w2="" data-m="">
                            <label htmlFor="svr-ab8" title="Breakfast Fri 30 Oct: 3 included">{"3"}</label>
                          </td>
                          <td className="is-we" data-label="Sat 31 Oct" data-w2="" data-m="">
                            <label htmlFor="svr-ab9" title="Breakfast Sat 31 Oct: 7 included">{"7"}</label>
                          </td>
                          <td data-label="Sun 1 Nov" data-w2="" data-m="">
                            <label htmlFor="svr-ab10" title="Breakfast Sun 1 Nov: 7 included">{"7"}</label>
                          </td>
                          <td data-label="Mon 2 Nov" data-w2="" data-m="">
                            <label htmlFor="svr-ab11" title="Breakfast Mon 2 Nov: 7 included">{"7"}</label>
                          </td>
                          <td data-label="Tue 3 Nov" data-w2="" data-m="">
                            <label htmlFor="svr-ab12" title="Breakfast Tue 3 Nov: 7 included">{"7"}</label>
                          </td>
                          <td data-label="Wed 4 Nov" data-w2="" data-m="">
                            <label htmlFor="svr-ab13" title="Breakfast Wed 4 Nov: 7 included">{"7"}</label>
                          </td>
                        </tr>
                        <tr className="sv-r sv-r--l sv-in-a">
                          <th scope="row" data-label="Service" data-w2="" data-t="">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#utensils" />
                            </svg>
                            {"Lunch"}
                          </th>
                          <td className="sv-now" data-label="Thu 22 Oct" data-w2="">
                            <label htmlFor="svr-al0" title="Lunch Thu 22 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-we" data-label="Fri 23 Oct" data-w2="">
                            <label htmlFor="svr-al1" title="Lunch Fri 23 Oct: 4 included">{"4"}</label>
                          </td>
                          <td className="is-we" data-label="Sat 24 Oct" data-w2="">
                            <label htmlFor="svr-al2" title="Lunch Sat 24 Oct: 2 included">{"2"}</label>
                          </td>
                          <td data-label="Sun 25 Oct" data-w2="">
                            <label htmlFor="svr-al3" title="Lunch Sun 25 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-al4" title="Lunch Mon 26 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-al5" title="Lunch Tue 27 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-al6" title="Lunch Wed 28 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-al7" title="Lunch Thu 29 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-al8" title="Lunch Fri 30 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-al9" title="Lunch Sat 31 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-al10" title="Lunch Sun 1 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-al11" title="Lunch Mon 2 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-al12" title="Lunch Tue 3 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-al13" title="Lunch Wed 4 Nov: 0 included">{"–"}</label>
                          </td>
                        </tr>
                        <tr className="sv-r sv-r--d sv-in-a">
                          <th scope="row" data-label="Service" data-w2="" data-t="">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#utensils" />
                            </svg>
                            {"Dinner"}
                          </th>
                          <td className="sv-now" data-label="Thu 22 Oct" data-w2="">
                            <label htmlFor="svr-ad0" title="Dinner Thu 22 Oct: 7 included">{"7"}</label>
                          </td>
                          <td className="is-we" data-label="Fri 23 Oct" data-w2="">
                            <label htmlFor="svr-ad1" title="Dinner Fri 23 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-we" data-label="Sat 24 Oct" data-w2="">
                            <label htmlFor="svr-ad2" title="Dinner Sat 24 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ad3" title="Dinner Sun 25 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ad4" title="Dinner Mon 26 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ad5" title="Dinner Tue 27 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ad6" title="Dinner Wed 28 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ad7" title="Dinner Thu 29 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-ad8" title="Dinner Fri 30 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-ad9" title="Dinner Sat 31 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ad10" title="Dinner Sun 1 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ad11" title="Dinner Mon 2 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ad12" title="Dinner Tue 3 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ad13" title="Dinner Wed 4 Nov: 0 included">{"–"}</label>
                          </td>
                        </tr>
                        <tr className="sv-g sv-g--i">
                          <th scope="rowgroup" colSpan="15">
                            <span>
                              {"In house "}
                              <b>{"31 bookings"}</b>
                            </span>
                          </th>
                        </tr>
                        <tr className="sv-r sv-r--b sv-in-i">
                          <th scope="row" data-label="Service" data-w2="" data-t="">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#sunrise" />
                            </svg>
                            {"Breakfast"}
                          </th>
                          <td className="sv-now" data-label="Thu 22 Oct" data-w2="">
                            <label htmlFor="svr-ib0" title="Breakfast Thu 22 Oct: 77 included">{"77"}</label>
                          </td>
                          <td className="is-we" data-label="Fri 23 Oct" data-w2="">
                            <label htmlFor="svr-ib1" title="Breakfast Fri 23 Oct: 71 included">{"71"}</label>
                          </td>
                          <td className="is-we" data-label="Sat 24 Oct" data-w2="">
                            <label htmlFor="svr-ib2" title="Breakfast Sat 24 Oct: 53 included">{"53"}</label>
                          </td>
                          <td data-label="Sun 25 Oct" data-w2="">
                            <label htmlFor="svr-ib3" title="Breakfast Sun 25 Oct: 40 included">{"40"}</label>
                          </td>
                          <td data-label="Mon 26 Oct" data-w2="">
                            <label htmlFor="svr-ib4" title="Breakfast Mon 26 Oct: 11 included">{"11"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ib5" title="Breakfast Tue 27 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ib6" title="Breakfast Wed 28 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ib7" title="Breakfast Thu 29 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-ib8" title="Breakfast Fri 30 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-ib9" title="Breakfast Sat 31 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ib10" title="Breakfast Sun 1 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ib11" title="Breakfast Mon 2 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ib12" title="Breakfast Tue 3 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-ib13" title="Breakfast Wed 4 Nov: 0 included">{"–"}</label>
                          </td>
                        </tr>
                        <tr className="sv-r sv-r--l sv-in-i">
                          <th scope="row" data-label="Service" data-w2="" data-t="">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#utensils" />
                            </svg>
                            {"Lunch"}
                          </th>
                          <td className="sv-now" data-label="Thu 22 Oct" data-w2="">
                            <label htmlFor="svr-il0" title="Lunch Thu 22 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-we" data-label="Fri 23 Oct" data-w2="">
                            <label htmlFor="svr-il1" title="Lunch Fri 23 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-il2" title="Lunch Sat 24 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-il3" title="Lunch Sun 25 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-il4" title="Lunch Mon 26 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-il5" title="Lunch Tue 27 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-il6" title="Lunch Wed 28 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-il7" title="Lunch Thu 29 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-il8" title="Lunch Fri 30 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-il9" title="Lunch Sat 31 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-il10" title="Lunch Sun 1 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-il11" title="Lunch Mon 2 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-il12" title="Lunch Tue 3 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-il13" title="Lunch Wed 4 Nov: 0 included">{"–"}</label>
                          </td>
                        </tr>
                        <tr className="sv-r sv-r--d sv-in-i">
                          <th scope="row" data-label="Service" data-w2="" data-t="">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#utensils" />
                            </svg>
                            {"Dinner"}
                          </th>
                          <td className="sv-now" data-label="Thu 22 Oct" data-w2="">
                            <label htmlFor="svr-id0" title="Dinner Thu 22 Oct: 5 included">{"5"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-id1" title="Dinner Fri 23 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-id2" title="Dinner Sat 24 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-id3" title="Dinner Sun 25 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-id4" title="Dinner Mon 26 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-id5" title="Dinner Tue 27 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-id6" title="Dinner Wed 28 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-id7" title="Dinner Thu 29 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-id8" title="Dinner Fri 30 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-id9" title="Dinner Sat 31 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-id10" title="Dinner Sun 1 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-id11" title="Dinner Mon 2 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-id12" title="Dinner Tue 3 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-id13" title="Dinner Wed 4 Nov: 0 included">{"–"}</label>
                          </td>
                        </tr>
                        <tr className="sv-g sv-g--c">
                          <th scope="rowgroup" colSpan="15">
                            <span>
                              {"Confirmed / guaranteed "}
                              <b>{"21 bookings"}</b>
                            </span>
                          </th>
                        </tr>
                        <tr className="sv-r sv-r--b sv-in-c">
                          <th scope="row" data-label="Service" data-w2="" data-t="">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#sunrise" />
                            </svg>
                            {"Breakfast"}
                          </th>
                          <td className="sv-now is-zero" data-e="">
                            <label htmlFor="svr-cb0" title="Breakfast Thu 22 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we" data-label="Fri 23 Oct" data-w2="">
                            <label htmlFor="svr-cb1" title="Breakfast Fri 23 Oct: 33 included">{"33"}</label>
                          </td>
                          <td className="is-we" data-label="Sat 24 Oct" data-w2="">
                            <label htmlFor="svr-cb2" title="Breakfast Sat 24 Oct: 22 included">{"22"}</label>
                          </td>
                          <td data-label="Sun 25 Oct" data-w2="">
                            <label htmlFor="svr-cb3" title="Breakfast Sun 25 Oct: 16 included">{"16"}</label>
                          </td>
                          <td data-label="Mon 26 Oct" data-w2="">
                            <label htmlFor="svr-cb4" title="Breakfast Mon 26 Oct: 12 included">{"12"}</label>
                          </td>
                          <td data-label="Tue 27 Oct" data-w2="">
                            <label htmlFor="svr-cb5" title="Breakfast Tue 27 Oct: 10 included">{"10"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cb6" title="Breakfast Wed 28 Oct: 0 included">{"–"}</label>
                          </td>
                          <td data-label="Thu 29 Oct" data-w2="" data-m="">
                            <label htmlFor="svr-cb7" title="Breakfast Thu 29 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-we" data-label="Fri 30 Oct" data-w2="" data-m="">
                            <label htmlFor="svr-cb8" title="Breakfast Fri 30 Oct: 3 included">{"3"}</label>
                          </td>
                          <td className="is-we" data-label="Sat 31 Oct" data-w2="" data-m="">
                            <label htmlFor="svr-cb9" title="Breakfast Sat 31 Oct: 7 included">{"7"}</label>
                          </td>
                          <td data-label="Sun 1 Nov" data-w2="" data-m="">
                            <label htmlFor="svr-cb10" title="Breakfast Sun 1 Nov: 7 included">{"7"}</label>
                          </td>
                          <td data-label="Mon 2 Nov" data-w2="" data-m="">
                            <label htmlFor="svr-cb11" title="Breakfast Mon 2 Nov: 7 included">{"7"}</label>
                          </td>
                          <td data-label="Tue 3 Nov" data-w2="" data-m="">
                            <label htmlFor="svr-cb12" title="Breakfast Tue 3 Nov: 7 included">{"7"}</label>
                          </td>
                          <td data-label="Wed 4 Nov" data-w2="" data-m="">
                            <label htmlFor="svr-cb13" title="Breakfast Wed 4 Nov: 7 included">{"7"}</label>
                          </td>
                        </tr>
                        <tr className="sv-r sv-r--l sv-in-c">
                          <th scope="row" data-label="Service" data-w2="" data-t="">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#utensils" />
                            </svg>
                            {"Lunch"}
                          </th>
                          <td className="sv-now is-zero" data-e="">
                            <label htmlFor="svr-cl0" title="Lunch Thu 22 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-cl1" title="Lunch Fri 23 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-cl2" title="Lunch Sat 24 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cl3" title="Lunch Sun 25 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cl4" title="Lunch Mon 26 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cl5" title="Lunch Tue 27 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cl6" title="Lunch Wed 28 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cl7" title="Lunch Thu 29 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-cl8" title="Lunch Fri 30 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-cl9" title="Lunch Sat 31 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cl10" title="Lunch Sun 1 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cl11" title="Lunch Mon 2 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cl12" title="Lunch Tue 3 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cl13" title="Lunch Wed 4 Nov: 0 included">{"–"}</label>
                          </td>
                        </tr>
                        <tr className="sv-r sv-r--d sv-in-c">
                          <th scope="row" data-label="Service" data-w2="" data-t="">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#utensils" />
                            </svg>
                            {"Dinner"}
                          </th>
                          <td className="sv-now is-zero" data-e="">
                            <label htmlFor="svr-cd0" title="Dinner Thu 22 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-cd1" title="Dinner Fri 23 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-cd2" title="Dinner Sat 24 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cd3" title="Dinner Sun 25 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cd4" title="Dinner Mon 26 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cd5" title="Dinner Tue 27 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cd6" title="Dinner Wed 28 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cd7" title="Dinner Thu 29 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-cd8" title="Dinner Fri 30 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-cd9" title="Dinner Sat 31 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cd10" title="Dinner Sun 1 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cd11" title="Dinner Mon 2 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cd12" title="Dinner Tue 3 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-cd13" title="Dinner Wed 4 Nov: 0 included">{"–"}</label>
                          </td>
                        </tr>
                        <tr className="sv-g sv-g--t">
                          <th scope="rowgroup" colSpan="15">
                            <span>
                              {"Tentative "}
                              <b>{"4 bookings"}</b>
                            </span>
                          </th>
                        </tr>
                        <tr className="sv-r sv-r--b sv-in-t">
                          <th scope="row" data-label="Service" data-w2="" data-t="">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#sunrise" />
                            </svg>
                            {"Breakfast"}
                          </th>
                          <td className="sv-now" data-label="Thu 22 Oct" data-w2="">
                            <label htmlFor="svr-tb0" title="Breakfast Thu 22 Oct: 0 included, 6 extra">{"6"}</label>
                          </td>
                          <td className="is-we" data-label="Fri 23 Oct" data-w2="">
                            <label htmlFor="svr-tb1" title="Breakfast Fri 23 Oct: 6 included">{"6"}</label>
                          </td>
                          <td className="is-we" data-label="Sat 24 Oct" data-w2="">
                            <label htmlFor="svr-tb2" title="Breakfast Sat 24 Oct: 6 included">{"6"}</label>
                          </td>
                          <td data-label="Sun 25 Oct" data-w2="">
                            <label htmlFor="svr-tb3" title="Breakfast Sun 25 Oct: 6 included">{"6"}</label>
                          </td>
                          <td data-label="Mon 26 Oct" data-w2="">
                            <label htmlFor="svr-tb4" title="Breakfast Mon 26 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tb5" title="Breakfast Tue 27 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tb6" title="Breakfast Wed 28 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tb7" title="Breakfast Thu 29 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-tb8" title="Breakfast Fri 30 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-tb9" title="Breakfast Sat 31 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tb10" title="Breakfast Sun 1 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tb11" title="Breakfast Mon 2 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tb12" title="Breakfast Tue 3 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tb13" title="Breakfast Wed 4 Nov: 0 included">{"–"}</label>
                          </td>
                        </tr>
                        <tr className="sv-r sv-r--l sv-in-t">
                          <th scope="row" data-label="Service" data-w2="" data-t="">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#utensils" />
                            </svg>
                            {"Lunch"}
                          </th>
                          <td className="sv-now is-zero" data-e="">
                            <label htmlFor="svr-tl0" title="Lunch Thu 22 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we" data-label="Fri 23 Oct" data-w2="">
                            <label htmlFor="svr-tl1" title="Lunch Fri 23 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-we" data-label="Sat 24 Oct" data-w2="">
                            <label htmlFor="svr-tl2" title="Lunch Sat 24 Oct: 2 included">{"2"}</label>
                          </td>
                          <td data-label="Sun 25 Oct" data-w2="">
                            <label htmlFor="svr-tl3" title="Lunch Sun 25 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tl4" title="Lunch Mon 26 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tl5" title="Lunch Tue 27 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tl6" title="Lunch Wed 28 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tl7" title="Lunch Thu 29 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-tl8" title="Lunch Fri 30 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-tl9" title="Lunch Sat 31 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tl10" title="Lunch Sun 1 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tl11" title="Lunch Mon 2 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tl12" title="Lunch Tue 3 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-tl13" title="Lunch Wed 4 Nov: 0 included">{"–"}</label>
                          </td>
                        </tr>
                        <tr className="sv-r sv-r--d sv-in-t">
                          <th scope="row" data-label="Service" data-w2="" data-t="">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#utensils" />
                            </svg>
                            {"Dinner"}
                          </th>
                          <td className="sv-now" data-label="Thu 22 Oct" data-w2="">
                            <label htmlFor="svr-td0" title="Dinner Thu 22 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-we" data-label="Fri 23 Oct" data-w2="">
                            <label htmlFor="svr-td1" title="Dinner Fri 23 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-we" data-label="Sat 24 Oct" data-w2="">
                            <label htmlFor="svr-td2" title="Dinner Sat 24 Oct: 2 included">{"2"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-td3" title="Dinner Sun 25 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-td4" title="Dinner Mon 26 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-td5" title="Dinner Tue 27 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-td6" title="Dinner Wed 28 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-td7" title="Dinner Thu 29 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-td8" title="Dinner Fri 30 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-we is-zero" data-e="">
                            <label htmlFor="svr-td9" title="Dinner Sat 31 Oct: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-td10" title="Dinner Sun 1 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-td11" title="Dinner Mon 2 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-td12" title="Dinner Tue 3 Nov: 0 included">{"–"}</label>
                          </td>
                          <td className="is-zero" data-e="">
                            <label htmlFor="svr-td13" title="Dinner Wed 4 Nov: 0 included">{"–"}</label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="sv-hint">
                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    {"Click a number to list the bookings behind it. Breakfast is counted each morning after a night, lunch (AP) each day after the arrival day, dinner (MAP / AP) each night of the stay."}
                  </p>
                </div>
                <section className="card" data-flow="rs24-addons" style={{"marginTop": "16px"}}>
                  <h2 className="s-card-title">{"Add-ons and packages booked with rooms"}</h2>
                  <p className="field__hint">{"From Add-ons & Packages (RSS-17). Package inclusions such as the daily Ayurveda therapy of PKG-AYUR appear here too."}</p>
                  <div className="s-scroll">
                    <table className="dt__table dt--hug" data-nosort="" data-mc="">
                      <caption className="sr-only">{"Add-ons booked"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{"Add-on"}</th>
                          <th scope="col">{"Department"}</th>
                          <th scope="col">{"Outlet"}</th>
                          <th scope="col">{"Charged"}</th>
                          <th scope="col">{"Posts to the bill"}</th>
                          <th scope="col">{"Book ahead"}</th>
                          <th scope="col">{"Maximum per day"}</th>
                          <th scope="col" className="dt__th--right">{"Booked today"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="dt__td" data-label="Add-on" data-w2="" data-t="">{"Extra bed"}</td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Housekeeping"}</td>
                          <td className="dt__td" data-label="Outlet" data-w2="">{"–"}</td>
                          <td className="dt__td" data-label="Charged" data-w2="">{"per night"}</td>
                          <td className="dt__td" data-label="Posts to the bill" data-w2="">{"Daily"}</td>
                          <td className="dt__td" data-label="Book ahead" data-w2="">{"–"}</td>
                          <td className="dt__td" data-label="Maximum per day" data-w2="">{"–"}</td>
                          <td className="dt__td dt__td--right num" data-label="Booked today" data-w2="">{"3"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Add-on" data-w2="" data-t="">{"Breakfast"}</td>
                          <td className="dt__td" data-label="Department" data-w2="">{"F&B"}</td>
                          <td className="dt__td" data-label="Outlet" data-w2="">{"Travancore Restaurant"}</td>
                          <td className="dt__td" data-label="Charged" data-w2="">{"per person per night"}</td>
                          <td className="dt__td" data-label="Posts to the bill" data-w2="">{"Daily"}</td>
                          <td className="dt__td" data-label="Book ahead" data-w2="">{"–"}</td>
                          <td className="dt__td" data-label="Maximum per day" data-w2="">{"–"}</td>
                          <td className="dt__td dt__td--right num" data-label="Booked today" data-w2="">{"83"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Add-on" data-w2="" data-t="">{"Airport transfer (one way)"}</td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Transport"}</td>
                          <td className="dt__td" data-label="Outlet" data-w2="">{"–"}</td>
                          <td className="dt__td" data-label="Charged" data-w2="">{"per item"}</td>
                          <td className="dt__td" data-label="Posts to the bill" data-w2="">{"On the date"}</td>
                          <td className="dt__td" data-label="Book ahead" data-w2="">{"6 hours"}</td>
                          <td className="dt__td" data-label="Maximum per day" data-w2="">{"8"}</td>
                          <td className="dt__td dt__td--right num" data-label="Booked today" data-w2="">{"4"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Add-on" data-w2="" data-t="">{"Gala dinner"}</td>
                          <td className="dt__td" data-label="Department" data-w2="">{"F&B"}</td>
                          <td className="dt__td" data-label="Outlet" data-w2="">{"Periyar Hall"}</td>
                          <td className="dt__td" data-label="Charged" data-w2="">{"per person"}</td>
                          <td className="dt__td" data-label="Posts to the bill" data-w2="">{"On the date"}</td>
                          <td className="dt__td" data-label="Book ahead" data-w2="">{"48 hours"}</td>
                          <td className="dt__td" data-label="Maximum per day" data-w2="">{"120"}</td>
                          <td className="dt__td dt__td--right num" data-label="Booked today" data-w2="">{"0"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Add-on" data-w2="" data-t="">{"Ayurveda therapy session"}</td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Spa"}</td>
                          <td className="dt__td" data-label="Outlet" data-w2="">{"Ayurvedic Centre"}</td>
                          <td className="dt__td" data-label="Charged" data-w2="">{"per person"}</td>
                          <td className="dt__td" data-label="Posts to the bill" data-w2="">{"On the date"}</td>
                          <td className="dt__td" data-label="Book ahead" data-w2="">{"12 hours"}</td>
                          <td className="dt__td" data-label="Maximum per day" data-w2="">{"12"}</td>
                          <td className="dt__td dt__td--right num" data-label="Booked today" data-w2="">{"2"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Add-on" data-w2="" data-t="">{"Seafood Grill dinner"}</td>
                          <td className="dt__td" data-label="Department" data-w2="">{"F&B"}</td>
                          <td className="dt__td" data-label="Outlet" data-w2="">{"Seafood Grill"}</td>
                          <td className="dt__td" data-label="Charged" data-w2="">{"per person"}</td>
                          <td className="dt__td" data-label="Posts to the bill" data-w2="">{"On the date"}</td>
                          <td className="dt__td" data-label="Book ahead" data-w2="">{"4 hours"}</td>
                          <td className="dt__td" data-label="Maximum per day" data-w2="">{"40"}</td>
                          <td className="dt__td dt__td--right num" data-label="Booked today" data-w2="">{"5"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Add-on" data-w2="" data-t="">{"Early check-in"}</td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Front office"}</td>
                          <td className="dt__td" data-label="Outlet" data-w2="">{"–"}</td>
                          <td className="dt__td" data-label="Charged" data-w2="">{"per stay"}</td>
                          <td className="dt__td" data-label="Posts to the bill" data-w2="">{"At check-in"}</td>
                          <td className="dt__td" data-label="Book ahead" data-w2="">{"–"}</td>
                          <td className="dt__td" data-label="Maximum per day" data-w2="">{"–"}</td>
                          <td className="dt__td dt__td--right num" data-label="Booked today" data-w2="">{"2"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Add-on" data-w2="" data-t="">{"Late check-out (until 18:00)"}</td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Front office"}</td>
                          <td className="dt__td" data-label="Outlet" data-w2="">{"–"}</td>
                          <td className="dt__td" data-label="Charged" data-w2="">{"per stay"}</td>
                          <td className="dt__td" data-label="Posts to the bill" data-w2="">{"At check-out"}</td>
                          <td className="dt__td" data-label="Book ahead" data-w2="">{"–"}</td>
                          <td className="dt__td" data-label="Maximum per day" data-w2="">{"–"}</td>
                          <td className="dt__td dt__td--right num" data-label="Booked today" data-w2="">{"3"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Add-on" data-w2="" data-t="">{"Celebration cake"}</td>
                          <td className="dt__td" data-label="Department" data-w2="">{"F&B"}</td>
                          <td className="dt__td" data-label="Outlet" data-w2="">{"Travancore Restaurant"}</td>
                          <td className="dt__td" data-label="Charged" data-w2="">{"per item"}</td>
                          <td className="dt__td" data-label="Posts to the bill" data-w2="">{"On the date"}</td>
                          <td className="dt__td" data-label="Book ahead" data-w2="">{"24 hours"}</td>
                          <td className="dt__td" data-label="Maximum per day" data-w2="">{"10"}</td>
                          <td className="dt__td dt__td--right num" data-label="Booked today" data-w2="">{"1"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                <section className="card" data-flow="rs24-addons" style={{"marginTop": "16px"}}>
                  <h2 className="s-card-title">{"Special requests by department"}</h2>
                  <p className="field__hint">{"From Special Request Codes (RSS-19); each request notifies its department."}</p>
                  <div className="s-scroll">
                    <table className="dt__table dt--hug" data-nosort="" data-mc="">
                      <caption className="sr-only">{"Special requests"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">{"Special request"}</th>
                          <th scope="col">{"Department notified"}</th>
                          <th scope="col" className="dt__th--right">{"Open today"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="dt__td" data-label="Special request" data-w2="" data-t="">{"Flowers in room"}</td>
                          <td className="dt__td" data-label="Department notified" data-w2="">{"Housekeeping"}</td>
                          <td className="dt__td dt__td--right num" data-label="Open today" data-w2="">{"2"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Special request" data-w2="" data-t="">{"Birthday / anniversary cake"}</td>
                          <td className="dt__td" data-label="Department notified" data-w2="">{"F&B"}</td>
                          <td className="dt__td dt__td--right num" data-label="Open today" data-w2="">{"1"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Special request" data-w2="" data-t="">{"Baby cot"}</td>
                          <td className="dt__td" data-label="Department notified" data-w2="">{"Housekeeping"}</td>
                          <td className="dt__td dt__td--right num" data-label="Open today" data-w2="">{"1"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Special request" data-w2="" data-t="">{"Airport pickup"}</td>
                          <td className="dt__td" data-label="Department notified" data-w2="">{"Transport"}</td>
                          <td className="dt__td dt__td--right num" data-label="Open today" data-w2="">{"4"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Special request" data-w2="" data-t="">{"Early check-in"}</td>
                          <td className="dt__td" data-label="Department notified" data-w2="">{"Front office"}</td>
                          <td className="dt__td dt__td--right num" data-label="Open today" data-w2="">{"2"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Special request" data-w2="" data-t="">{"Late check-out"}</td>
                          <td className="dt__td" data-label="Department notified" data-w2="">{"Front office"}</td>
                          <td className="dt__td dt__td--right num" data-label="Open today" data-w2="">{"3"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Special request" data-w2="" data-t="">{"High floor"}</td>
                          <td className="dt__td" data-label="Department notified" data-w2="">{"Front office"}</td>
                          <td className="dt__td dt__td--right num" data-label="Open today" data-w2="">{"5"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Special request" data-w2="" data-t="">{"Quiet room"}</td>
                          <td className="dt__td" data-label="Department notified" data-w2="">{"Front office"}</td>
                          <td className="dt__td dt__td--right num" data-label="Open today" data-w2="">{"3"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Special request" data-w2="" data-t="">{"Special diet"}</td>
                          <td className="dt__td" data-label="Department notified" data-w2="">{"F&B"}</td>
                          <td className="dt__td dt__td--right num" data-label="Open today" data-w2="">{"2"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Special request" data-w2="" data-t="">{"Honeymoon set-up"}</td>
                          <td className="dt__td" data-label="Department notified" data-w2="">{"Housekeeping"}</td>
                          <td className="dt__td dt__td--right num" data-label="Open today" data-w2="">{"1"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Special request" data-w2="" data-t="">{"Book Ayurveda session"}</td>
                          <td className="dt__td" data-label="Department notified" data-w2="">{"Spa"}</td>
                          <td className="dt__td dt__td--right num" data-label="Open today" data-w2="">{"2"}</td>
                        </tr>
                        <tr>
                          <td className="dt__td" data-label="Special request" data-w2="" data-t="">{"Adjoining rooms"}</td>
                          <td className="dt__td" data-label="Department notified" data-w2="">{"Front office"}</td>
                          <td className="dt__td dt__td--right num" data-label="Open today" data-w2="">{"1"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>
                <div className="sv-low">
                  <section className="sv-list" aria-label="Bookings for the chosen service and day">
                    <div className="arl-wrap">
                      <div className="s-scroll s-scroll--tall arl" data-code="RS-24-list">
                        <table className="srt dt__table arl-t sv-lt" style={{"--srt-cols": "auto auto auto auto auto auto auto auto auto auto auto"}} data-mc="">
                          <caption className="sr-only">{"Bookings with the chosen service"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="strs240" id="strs240-0a" aria-label="Sort by Reservation / folio, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="strs240" id="strs240-0d" aria-label="Sort by Reservation / folio, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs240-0a">{"Reservation / folio"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs240-0d" aria-hidden="true">{"Reservation / folio"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="strs240" id="strs240-1a" aria-label="Sort by Room no., lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="strs240" id="strs240-1d" aria-label="Sort by Room no., highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs240-1a">{"Room no."}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs240-1d" aria-hidden="true">{"Room no."}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="strs240" id="strs240-2a" aria-label="Sort by Primary guest, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="strs240" id="strs240-2d" aria-label="Sort by Primary guest, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs240-2a">{"Primary guest"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs240-2d" aria-hidden="true">{"Primary guest"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a3" type="radio" name="strs240" id="strs240-3a" aria-label="Sort by Agent / corporate, lowest or A first" />
                                <input className="srt-i srt-d3" type="radio" name="strs240" id="strs240-3d" aria-label="Sort by Agent / corporate, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs240-3a">{"Agent / corporate"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs240-3d" aria-hidden="true">{"Agent / corporate"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a4" type="radio" name="strs240" id="strs240-4a" aria-label="Sort by Rate plan, lowest or A first" />
                                <input className="srt-i srt-d4" type="radio" name="strs240" id="strs240-4d" aria-label="Sort by Rate plan, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs240-4a">{"Rate plan"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs240-4d" aria-hidden="true">{"Rate plan"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a5" type="radio" name="strs240" id="strs240-5a" aria-label="Sort by Status, lowest or A first" />
                                <input className="srt-i srt-d5" type="radio" name="strs240" id="strs240-5d" aria-label="Sort by Status, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs240-5a">{"Status"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs240-5d" aria-hidden="true">{"Status"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a6" type="radio" name="strs240" id="strs240-6a" aria-label="Sort by Incl. adults, lowest or A first" />
                                <input className="srt-i srt-d6" type="radio" name="strs240" id="strs240-6d" aria-label="Sort by Incl. adults, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs240-6a">{"Incl. adults"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs240-6d" aria-hidden="true">{"Incl. adults"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a7" type="radio" name="strs240" id="strs240-7a" aria-label="Sort by Incl. child, lowest or A first" />
                                <input className="srt-i srt-d7" type="radio" name="strs240" id="strs240-7d" aria-label="Sort by Incl. child, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs240-7a">{"Incl. child"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs240-7d" aria-hidden="true">{"Incl. child"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a8" type="radio" name="strs240" id="strs240-8a" aria-label="Sort by Incl. qty, lowest or A first" />
                                <input className="srt-i srt-d8" type="radio" name="strs240" id="strs240-8d" aria-label="Sort by Incl. qty, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs240-8a">{"Incl. qty"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs240-8d" aria-hidden="true">{"Incl. qty"}</label>
                              </th>
                              <th scope="col" className="dt__th--right">
                                <input className="srt-i srt-a9" type="radio" name="strs240" id="strs240-9a" aria-label="Sort by Extra qty, lowest or A first" />
                                <input className="srt-i srt-d9" type="radio" name="strs240" id="strs240-9d" aria-label="Sort by Extra qty, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs240-9a">{"Extra qty"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs240-9d" aria-hidden="true">{"Extra qty"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a10" type="radio" name="strs240" id="strs240-10a" aria-label="Sort by Stay, lowest or A first" />
                                <input className="srt-i srt-d10" type="radio" name="strs240" id="strs240-10d" aria-label="Sort by Stay, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="strs240-10a">{"Stay"}</label>
                                <label className="srt-l srt-l--d" htmlFor="strs240-10d" aria-hidden="true">{"Stay"}</label>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ab4 s-ib0 s-ib1 s-ib2 s-ib3 s-ib4" style={{"--k0": "7", "--k1": "32", "--k2": "10", "--k3": "15", "--k4": "4", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "1"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10027" data-leads-to="RS-07">{"FK-10027"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"504"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Dr Claire Dubois"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Trip.com"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"17 Oct – 26 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ib0 s-ib1" style={{"--k0": "10", "--k1": "17", "--k2": "9", "--k3": "11", "--k4": "1", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "1"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10031" data-leads-to="RS-07">{"FK-10031"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"303"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Charlotte Fraser"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"ADV15 "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"17 Oct – 23 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ib0 s-ib1 s-ib2 s-ib3" style={{"--k0": "15", "--k1": "26", "--k2": "25", "--k3": "2", "--k4": "4", "--k5": "3", "--k6": "3", "--k7": "2", "--k8": "5", "--k9": "1", "--k10": "1"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10048" data-leads-to="RS-07">{"FK-10048"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"402"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mrs Kavita Siddharth"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Booking.com"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"4"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"17 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ib0 s-ib1 s-ib2 s-ib3" style={{"--k0": "25", "--k1": "22", "--k2": "38", "--k3": "11", "--k4": "4", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "1"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10103" data-leads-to="RS-07">{"FK-10103"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"310"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Prasad Pavan"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"17 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ib0 s-ib1" style={{"--k0": "27", "--k1": "20", "--k2": "23", "--k3": "8", "--k4": "4", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "1"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10105" data-leads-to="RS-07">{"FK-10105"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"306"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Jyoti Kabir"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"MakeMyTrip / Goibibo"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"17 Oct – 23 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ad0 s-ib0 s-ib1 s-id0" style={{"--k0": "29", "--k1": "8", "--k2": "18", "--k3": "11", "--k4": "6", "--k5": "3", "--k6": "4", "--k7": "1", "--k8": "4", "--k9": "1", "--k10": "1"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10118" data-leads-to="RS-07">{"FK-10118"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"115"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Isha Dhruv"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-MAP "}
                                <span className="arl-mute">{"· MAP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"3"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"3"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"17 Oct – 23 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ib0 s-ib1 s-ib2" style={{"--k0": "37", "--k1": "34", "--k2": "5", "--k3": "11", "--k4": "4", "--k5": "3", "--k6": "6", "--k7": "1", "--k8": "6", "--k9": "1", "--k10": "1"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10159" data-leads-to="RS-07">{"FK-10159"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"506, 318"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Dr Ayesha Chirag"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"5"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"5"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"17 Oct – 24 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ib0 s-ib1 s-ib2 s-ib3" style={{"--k0": "38", "--k1": "28", "--k2": "26", "--k3": "3", "--k4": "8", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "1"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10161" data-leads-to="RS-07">{"FK-10161"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"408"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Lakshmi Mathew"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Coir Craft Industries"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"CORP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"17 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ib0 s-ib1 s-ib2 s-ib3" style={{"--k0": "9", "--k1": "39", "--k2": "43", "--k3": "16", "--k4": "8", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "2"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10029" data-leads-to="RS-07">{"FK-10029"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"515"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mrs Rekha Krish"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Willingdon Logistics LLP"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"CORP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"18 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ib0 s-ib1" style={{"--k0": "18", "--k1": "21", "--k2": "32", "--k3": "11", "--k4": "1", "--k5": "3", "--k6": "2", "--k7": "1", "--k8": "2", "--k9": "1", "--k10": "2"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10061" data-leads-to="RS-07">{"FK-10061"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"309"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Nandini Rishi"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"ADV15 "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"1"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"1"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"18 Oct – 23 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ib0 s-ib1 s-ib2" style={{"--k0": "24", "--k1": "35", "--k2": "48", "--k3": "11", "--k4": "4", "--k5": "3", "--k6": "5", "--k7": "1", "--k8": "5", "--k9": "1", "--k10": "2"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10097" data-leads-to="RS-07">{"FK-10097"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"508, 217"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Sindhu Rahman"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"4"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"4"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"18 Oct – 24 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ib0 s-ib1" style={{"--k0": "40", "--k1": "13", "--k2": "29", "--k3": "11", "--k4": "4", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "2"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10170" data-leads-to="RS-07">{"FK-10170"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"211"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Marco Rossi"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"18 Oct – 23 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ab4 s-ib0 s-ib1 s-ib2 s-ib3 s-ib4" style={{"--k0": "3", "--k1": "9", "--k2": "1", "--k3": "8", "--k4": "4", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "3"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10011" data-leads-to="RS-07">{"FK-10011"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"116"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Amit Bijoy"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"MakeMyTrip / Goibibo"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"19 Oct – 26 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ib0 s-ib1 s-ib2 s-ib3" style={{"--k0": "12", "--k1": "5", "--k2": "39", "--k3": "4", "--k4": "4", "--k5": "3", "--k6": "7", "--k7": "2", "--k8": "7", "--k9": "1", "--k10": "3"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10035" data-leads-to="RS-07">{"FK-10035"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"110, 119, 109"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mrs Priya Kabir"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"EaseMyTrip"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"7"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"9"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"19 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ib0 s-ib1 s-ib2" style={{"--k0": "17", "--k1": "1", "--k2": "34", "--k3": "6", "--k4": "2", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "3"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10056" data-leads-to="RS-07">{"FK-10056"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"105"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Noura Al Saud"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Heritage Routes Travel"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"AGENT "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"19 Oct – 24 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ib0" style={{"--k0": "26", "--k1": "12", "--k2": "2", "--k3": "7", "--k4": "2", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "3"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10104" data-leads-to="RS-07">{"FK-10104"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"207"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Amit Chirag"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Kerala Trails Travel Co"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"AGENT "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"19 Oct – 22 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ab4 s-ib0 s-ib1 s-ib2 s-ib3 s-ib4" style={{"--k0": "30", "--k1": "27", "--k2": "6", "--k3": "11", "--k4": "7", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "3"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10120" data-leads-to="RS-07">{"FK-10120"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"407"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Ayesha Sahil"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"CLUB "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"19 Oct – 26 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ib0" style={{"--k0": "33", "--k1": "41", "--k2": "30", "--k3": "15", "--k4": "4", "--k5": "3", "--k6": "2", "--k7": "1", "--k8": "2", "--k9": "1", "--k10": "3"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10142" data-leads-to="RS-07">{"FK-10142"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"517"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mrs Maya Mohan"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Trip.com"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"1"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"1"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"19 Oct – 22 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ab4 s-ib0 s-ib1 s-ib2 s-ib3 s-ib4" style={{"--k0": "35", "--k1": "36", "--k2": "45", "--k3": "2", "--k4": "4", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "3"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10145" data-leads-to="RS-07">{"FK-10145"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"510"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Sheela Nathan"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Booking.com"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"19 Oct – 26 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ab4 s-ib0 s-ib1 s-ib2 s-ib3 s-ib4" style={{"--k0": "42", "--k1": "31", "--k2": "37", "--k3": "15", "--k4": "4", "--k5": "3", "--k6": "4", "--k7": "1", "--k8": "4", "--k9": "1", "--k10": "3"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10178" data-leads-to="RS-07">{"FK-10178"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"501"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Prasad Manav"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Trip.com"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"3"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"3"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"19 Oct – 26 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ad0 s-al0 s-al1 s-ib0 s-ib1 s-id0 s-il0 s-il1" style={{"--k0": "1", "--k1": "3", "--k2": "22", "--k3": "11", "--k4": "3", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "4"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10002" data-leads-to="RS-07">{"FK-10002"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"107"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mrs Jyoti Jatin"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-AP "}
                                <span className="arl-mute">{"· AP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"20 Oct – 23 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ib0 s-ib1 s-ib2 s-ib3" style={{"--k0": "14", "--k1": "40", "--k2": "31", "--k3": "14", "--k4": "8", "--k5": "3", "--k6": "2", "--k7": "1", "--k8": "2", "--k9": "1", "--k10": "4"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10042" data-leads-to="RS-07">{"FK-10042"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"516"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Nandini Jatin"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"TechPark Kochi Systems"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"CORP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"1"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"1"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"20 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ib0 s-ib1 s-ib2 s-ib3" style={{"--k0": "16", "--k1": "7", "--k2": "13", "--k3": "11", "--k4": "4", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "4"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10050" data-leads-to="RS-07">{"FK-10050"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"114"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mrs Fatima Al Mansoori"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"20 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ib0" style={{"--k0": "32", "--k1": "30", "--k2": "19", "--k3": "11", "--k4": "7", "--k5": "3", "--k6": "4", "--k7": "1", "--k8": "4", "--k9": "1", "--k10": "4"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10123" data-leads-to="RS-07">{"FK-10123"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"416, 505"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mrs Isha Neil"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"CLUB "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"3"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"3"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"20 Oct – 22 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ib0 s-ib1 s-ib2 s-ib3" style={{"--k0": "34", "--k1": "18", "--k2": "35", "--k3": "8", "--k4": "4", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "4"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10143" data-leads-to="RS-07">{"FK-10143"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"304"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Oliver Hughes"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"MakeMyTrip / Goibibo"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"20 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ib0 s-ib1 s-ib2" style={{"--k0": "39", "--k1": "6", "--k2": "20", "--k3": "3", "--k4": "8", "--k5": "3", "--k6": "2", "--k7": "1", "--k8": "2", "--k9": "1", "--k10": "4"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10165" data-leads-to="RS-07">{"FK-10165"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"113"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mrs Isha Vihaan"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Coir Craft Industries"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"CORP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"1"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"1"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"20 Oct – 24 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ib0 s-ib1 s-ib2" style={{"--k0": "45", "--k1": "29", "--k2": "35", "--k3": "1", "--k4": "4", "--k5": "3", "--k6": "2", "--k7": "1", "--k8": "2", "--k9": "1", "--k10": "4"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10200" data-leads-to="RS-07">{"FK-10200"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"409"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Oliver Hughes"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Agoda"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"1"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"1"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"20 Oct – 24 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ib0 s-ib1 s-ib2 s-ib3" style={{"--k0": "47", "--k1": "14", "--k2": "3", "--k3": "15", "--k4": "4", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "4"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10205" data-leads-to="RS-07">{"FK-10205"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"218"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Dr Anjali Rahman"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Trip.com"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"20 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ib0 s-ib1" style={{"--k0": "20", "--k1": "15", "--k2": "8", "--k3": "10", "--k4": "2", "--k5": "3", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "5"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10069" data-leads-to="RS-07">{"FK-10069"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"301"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Biju George"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Periyar Tours & Travels"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"AGENT "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"21 Oct – 23 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ab2 s-ab3 s-ib0 s-ib1 s-ib2 s-ib3" style={{"--k0": "28", "--k1": "23", "--k2": "31", "--k3": "11", "--k4": "4", "--k5": "3", "--k6": "4", "--k7": "1", "--k8": "4", "--k9": "1", "--k10": "5"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10106" data-leads-to="RS-07">{"FK-10106"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"313"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Nandini Jatin"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"3"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"3"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"21 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-ab1 s-ib0 s-ib1" style={{"--k0": "53", "--k1": "38", "--k2": "21", "--k3": "2", "--k4": "4", "--k5": "3", "--k6": "3", "--k7": "2", "--k8": "5", "--k9": "1", "--k10": "5"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10232" data-leads-to="RS-07">{"FK-10232"}</a>
                                <span className="arl-mute">{" / F1"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"514"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Jithin Mathew"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Booking.com"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#key" />
                                  </svg>
                                  {"In house"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"4"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"21 Oct – 23 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-ab3 s-ab4 s-cb1 s-cb2 s-cb3 s-cb4" style={{"--k0": "2", "--k1": "33", "--k2": "42", "--k3": "2", "--k4": "4", "--k5": "2", "--k6": "2", "--k7": "1", "--k8": "2", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10006" data-leads-to="RS-07">{"FK-10006"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"505"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Ravi Kabir"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Booking.com"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"1"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"1"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 26 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-ab3 s-ab4 s-tb1 s-tb2 s-tb3 s-tb4" style={{"--k0": "4", "--k1": "41", "--k2": "4", "--k3": "11", "--k4": "4", "--k5": "4", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07">{"FK-10013"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"517"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mrs Athira Nirav"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 26 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-cb1 s-cb2" style={{"--k0": "5", "--k1": "42", "--k2": "11", "--k3": "2", "--k4": "4", "--k5": "1", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07">{"FK-10015"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Dileep Kurian"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Booking.com"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 24 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-ab3 s-ab4 s-ab5 s-cb1 s-cb2 s-cb3 s-cb4 s-cb5" style={{"--k0": "6", "--k1": "42", "--k2": "26", "--k3": "11", "--k4": "1", "--k5": "2", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07">{"FK-10022"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Lakshmi Mathew"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"ADV15 "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 27 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-ab3 s-ab4 s-ab5 s-cb1 s-cb2 s-cb3 s-cb4 s-cb5" style={{"--k0": "11", "--k1": "2", "--k2": "36", "--k3": "7", "--k4": "2", "--k5": "2", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10034" data-leads-to="RS-07">{"FK-10034"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"106"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Pooja Neil"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Kerala Trails Travel Co"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"AGENT "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 27 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-cb1" style={{"--k0": "13", "--k1": "42", "--k2": "12", "--k3": "5", "--k4": "4", "--k5": "2", "--k6": "7", "--k7": "2", "--k8": "7", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07">{"FK-10039"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Dileep Pranav"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Expedia"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"7"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"9"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 23 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-ab3 s-ab4 s-ab5 s-cb1 s-cb2 s-cb3 s-cb4 s-cb5" style={{"--k0": "19", "--k1": "24", "--k2": "28", "--k3": "11", "--k4": "4", "--k5": "1", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10067" data-leads-to="RS-07">{"FK-10067"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"314"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Lukas Keller"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 27 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-ab3 s-tb1 s-tb2 s-tb3" style={{"--k0": "21", "--k1": "4", "--k2": "47", "--k3": "11", "--k4": "7", "--k5": "4", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10074" data-leads-to="RS-07">{"FK-10074"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"108"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mrs Shruti Shaan"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"CLUB "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-ab3 s-ab4 s-ab5 s-cb1 s-cb2 s-cb3 s-cb4 s-cb5" style={{"--k0": "22", "--k1": "19", "--k2": "49", "--k3": "11", "--k4": "7", "--k5": "1", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10091" data-leads-to="RS-07">{"FK-10091"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"305"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Srinivas Manav"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"CLUB "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 27 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-cb1 s-cb2" style={{"--k0": "23", "--k1": "16", "--k2": "15", "--k3": "11", "--k4": "4", "--k5": "1", "--k6": "5", "--k7": "1", "--k8": "5", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10096" data-leads-to="RS-07">{"FK-10096"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"302, 111"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Hans Mueller"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"4"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"4"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 24 Oct"}</td>
                            </tr>
                            <tr className="s-ab0 s-tb0" style={{"--k0": "31", "--k1": "42", "--k2": "34", "--k3": "11", "--k4": "5", "--k5": "4", "--k6": "1", "--k7": "1", "--k8": "1", "--k9": "2", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07">{"FK-10121"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Noura Al Saud"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-EP "}
                                <span className="arl-mute">{"· EP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"0"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="xd xd-b0">{"6"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 27 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-ab3 s-ad0 s-ad1 s-ad2 s-al1 s-al2 s-al3 s-tb1 s-tb2 s-tb3 s-td0 s-td1 s-td2 s-tl1 s-tl2 s-tl3" style={{"--k0": "36", "--k1": "42", "--k2": "14", "--k3": "11", "--k4": "3", "--k5": "4", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07">{"FK-10146"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Ganesh Mihir"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-AP "}
                                <span className="arl-mute">{"· AP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#clock" />
                                  </svg>
                                  {"Tentative"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-ab3 s-ab4 s-cb1 s-cb2 s-cb3 s-cb4" style={{"--k0": "44", "--k1": "25", "--k2": "41", "--k3": "11", "--k4": "4", "--k5": "1", "--k6": "2", "--k7": "1", "--k8": "2", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10197" data-leads-to="RS-07">{"FK-10197"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"401"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Rahul Philip"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"1"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"1"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 26 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-cb1 s-cb2" style={{"--k0": "46", "--k1": "37", "--k2": "24", "--k3": "11", "--k4": "4", "--k5": "2", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10201" data-leads-to="RS-07">{"FK-10201"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"512"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Karthik Jatin"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 24 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-cb1" style={{"--k0": "49", "--k1": "42", "--k2": "50", "--k3": "2", "--k4": "4", "--k5": "2", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07">{"FK-10216"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mrs Swathi Sahil"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Booking.com"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 23 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-ab3 s-ab4 s-ab5 s-cb1 s-cb2 s-cb3 s-cb4 s-cb5" style={{"--k0": "54", "--k1": "42", "--k2": "16", "--k3": "8", "--k4": "4", "--k5": "2", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07">{"FK-10233"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Imran Dhruv"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"MakeMyTrip / Goibibo"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 27 Oct"}</td>
                            </tr>
                            <tr className="s-ab1 s-ab2 s-ab3 s-cb1 s-cb2 s-cb3" style={{"--k0": "55", "--k1": "11", "--k2": "40", "--k3": "12", "--k4": "2", "--k5": "2", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "6"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10239" data-leads-to="RS-07">{"FK-10239"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"205"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Rahul George"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Southern Skies Travel"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"AGENT "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"22 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab3 s-cb3" style={{"--k0": "43", "--k1": "10", "--k2": "44", "--k3": "11", "--k4": "4", "--k5": "1", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "7"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10194" data-leads-to="RS-07">{"FK-10194"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-label="Room no." data-w2="">{"117"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Sandeep Shaan"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"24 Oct – 25 Oct"}</td>
                            </tr>
                            <tr className="s-ab7 s-ab8 s-ab9 s-cb7 s-cb8 s-cb9" style={{"--k0": "52", "--k1": "42", "--k2": "7", "--k3": "11", "--k4": "4", "--k5": "1", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "8"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                {"FK-10231"}
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Ayesha Shaan"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"28 Oct – 31 Oct"}</td>
                            </tr>
                            <tr className="s-ab10 s-ab11 s-ab12 s-ab8 s-ab9 s-cb10 s-cb11 s-cb12 s-cb8 s-cb9" style={{"--k0": "8", "--k1": "42", "--k2": "51", "--k3": "11", "--k4": "4", "--k5": "1", "--k6": "2", "--k7": "1", "--k8": "2", "--k9": "1", "--k10": "9"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                {"FK-10028"}
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Vishnu Uday"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Confirmed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"1"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"1"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"29 Oct – 3 Nov"}</td>
                            </tr>
                            <tr className="s-ab10 s-ab11 s-ab12 s-ab9 s-cb10 s-cb11 s-cb12 s-cb9" style={{"--k0": "48", "--k1": "42", "--k2": "33", "--k3": "13", "--k4": "2", "--k5": "2", "--k6": "3", "--k7": "2", "--k8": "5", "--k9": "1", "--k10": "10"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                {"FK-10215"}
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Nimisha Prem"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Sunrise Tours India"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"AGENT "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"4"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"30 Oct – 3 Nov"}</td>
                            </tr>
                            <tr className="s-ab10 s-ab11 s-ab12 s-cb10 s-cb11 s-cb12" style={{"--k0": "50", "--k1": "42", "--k2": "34", "--k3": "11", "--k4": "4", "--k5": "2", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "11"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                {"FK-10217"}
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Noura Al Saud"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"31 Oct – 3 Nov"}</td>
                            </tr>
                            <tr className="s-ab13 s-cb13" style={{"--k0": "41", "--k1": "42", "--k2": "46", "--k3": "9", "--k4": "8", "--k5": "2", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "12"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                {"FK-10171"}
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Shibu Vijay"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate">{"Periyar Infotech Solutions"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"CORP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"3 Nov – 6 Nov"}</td>
                            </tr>
                            <tr className="s-ab13 s-cb13" style={{"--k0": "51", "--k1": "42", "--k2": "17", "--k3": "5", "--k4": "4", "--k5": "2", "--k6": "3", "--k7": "1", "--k8": "3", "--k9": "1", "--k10": "12"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10228" data-leads-to="RS-07">{"FK-10228"}</a>
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Ms Irina Petrova"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Expedia"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"0"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"2"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"3 Nov – 6 Nov"}</td>
                            </tr>
                            <tr className="s-ab13 s-cb13" style={{"--k0": "56", "--k1": "42", "--k2": "27", "--k3": "11", "--k4": "4", "--k5": "2", "--k6": "2", "--k7": "2", "--k8": "4", "--k9": "1", "--k10": "12"}}>
                              <td className="dt__td" data-label="Reservation / folio" data-w2="" data-t="">
                                <input className="mc-more" type="checkbox" aria-label="Show all details" />
                                {"FK-10247"}
                                <span className="arl-mute">{" / –"}</span>
                              </td>
                              <td className="dt__td" data-e="">{"–"}</td>
                              <td className="dt__td" data-label="Primary guest" data-w2="">
                                <b>{"Mr Liam Walker"}</b>
                              </td>
                              <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="">{"Self booking"}</td>
                              <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">
                                {"BAR-CP "}
                                <span className="arl-mute">{"· CP"}</span>
                              </td>
                              <td className="dt__td" data-label="Status" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#shield-check" />
                                  </svg>
                                  {"Guaranteed"}
                                </span>
                              </td>
                              <td className="dt__td dt__td--right" data-label="Incl. adults" data-w2="" data-m="">{"1"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. child" data-w2="" data-m="">{"2"}</td>
                              <td className="dt__td dt__td--right" data-label="Incl. qty" data-w2="">
                                <b>{"3"}</b>
                              </td>
                              <td className="dt__td dt__td--right sv-x" data-label="Extra qty" data-w2="">
                                <span className="arl-mute">{"0"}</span>
                              </td>
                              <td className="dt__td" data-label="Stay" data-w2="" data-m="">{"3 Nov – 6 Nov"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="arl-foot">
                        <span className="arl-count">{"bookings for this service"}</span>
                        <span className="arl-hint">
                          <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#info" />
                          </svg>
                          {"Extra = meals booked as add-ons on that day (EP guests' breakfast, Seafood Grill dinner, gala dinner)."}
                        </span>
                      </p>
                    </div>
                  </section>
                  <aside className="sv-sum" aria-label="Total service for the chosen day">
                    <div className="sv-sum__b sv-sum--ab0">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Thu 22 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"77"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"6"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"83"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"77"}</b>
                        {" · booked extra "}
                        <b>{"6"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ab1">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Fri 23 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"102"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"8"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"110"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"110"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ab2">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Sat 24 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"77"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"4"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"81"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"81"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ab3">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Sun 25 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"58"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"4"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"62"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"62"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ab4">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Mon 26 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"25"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"25"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"25"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ab5">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Tue 27 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"10"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"10"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"10"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ab6">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Wed 28 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ab7">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Thu 29 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ab8">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Fri 30 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"3"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"3"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"3"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ab9">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Sat 31 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"5"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"7"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"7"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ab10">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Sun 1 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"5"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"7"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"7"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ab11">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Mon 2 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"5"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"7"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"7"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ab12">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Tue 3 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"5"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"7"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"7"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ab13">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Wed 4 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"5"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"7"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"7"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al0">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Thu 22 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al1">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Fri 23 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"4"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"4"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"4"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al2">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Sat 24 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al3">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Sun 25 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al4">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Mon 26 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al5">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Tue 27 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al6">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Wed 28 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al7">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Thu 29 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al8">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Fri 30 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al9">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Sat 31 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al10">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Sun 1 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al11">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Mon 2 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al12">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Tue 3 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--al13">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Wed 4 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad0">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Thu 22 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"7"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"7"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"7"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad1">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Fri 23 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad2">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Sat 24 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad3">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Sun 25 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad4">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Mon 26 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad5">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Tue 27 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad6">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Wed 28 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad7">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Thu 29 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad8">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Fri 30 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad9">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Sat 31 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad10">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Sun 1 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad11">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Mon 2 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad12">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Tue 3 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ad13">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · All bookings"}
                      </p>
                      <p className="sv-sum__d">{"Wed 4 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib0">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Thu 22 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"71"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"6"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"77"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"77"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib1">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Fri 23 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"65"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"6"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"71"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"71"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib2">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Sat 24 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"49"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"4"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"53"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"53"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib3">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Sun 25 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"36"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"4"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"40"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"40"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib4">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Mon 26 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"11"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"11"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"11"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib5">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Tue 27 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib6">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Wed 28 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib7">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Thu 29 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib8">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Fri 30 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib9">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Sat 31 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib10">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Sun 1 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib11">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Mon 2 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib12">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Tue 3 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--ib13">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · In house"}
                      </p>
                      <p className="sv-sum__d">{"Wed 4 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il0">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Thu 22 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il1">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Fri 23 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il2">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Sat 24 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il3">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Sun 25 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il4">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Mon 26 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il5">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Tue 27 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il6">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Wed 28 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il7">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Thu 29 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il8">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Fri 30 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il9">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Sat 31 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il10">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Sun 1 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il11">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Mon 2 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il12">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Tue 3 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--il13">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · In house"}
                      </p>
                      <p className="sv-sum__d">{"Wed 4 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id0">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Thu 22 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"5"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"5"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"5"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id1">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Fri 23 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id2">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Sat 24 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id3">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Sun 25 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id4">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Mon 26 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id5">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Tue 27 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id6">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Wed 28 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id7">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Thu 29 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id8">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Fri 30 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id9">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Sat 31 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id10">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Sun 1 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id11">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Mon 2 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id12">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Tue 3 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--id13">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · In house"}
                      </p>
                      <p className="sv-sum__d">{"Wed 4 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb0">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Thu 22 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb1">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Fri 23 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"31"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"33"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"33"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb2">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Sat 24 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"22"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"22"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"22"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb3">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Sun 25 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"16"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"16"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"16"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb4">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Mon 26 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"12"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"12"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"12"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb5">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Tue 27 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"10"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"10"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"10"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb6">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Wed 28 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb7">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Thu 29 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb8">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Fri 30 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"3"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"3"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"3"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb9">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Sat 31 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"5"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"7"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"7"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb10">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Sun 1 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"5"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"7"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"7"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb11">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Mon 2 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"5"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"7"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"7"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb12">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Tue 3 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"5"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"7"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"7"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cb13">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Wed 4 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"5"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"7"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"7"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl0">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Thu 22 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl1">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Fri 23 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl2">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Sat 24 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl3">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Sun 25 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl4">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Mon 26 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl5">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Tue 27 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl6">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Wed 28 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl7">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Thu 29 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl8">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Fri 30 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl9">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Sat 31 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl10">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Sun 1 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl11">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Mon 2 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl12">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Tue 3 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cl13">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Wed 4 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd0">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Thu 22 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd1">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Fri 23 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd2">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Sat 24 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd3">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Sun 25 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd4">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Mon 26 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd5">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Tue 27 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd6">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Wed 28 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd7">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Thu 29 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd8">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Fri 30 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd9">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Sat 31 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd10">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Sun 1 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd11">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Mon 2 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd12">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Tue 3 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--cd13">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Confirmed / guaranteed"}
                      </p>
                      <p className="sv-sum__d">{"Wed 4 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb0">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Thu 22 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"6"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"6"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"6"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb1">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Fri 23 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"6"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"6"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"6"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb2">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Sat 24 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"6"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"6"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"6"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb3">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Sun 25 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"6"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"6"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"6"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb4">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Mon 26 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb5">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Tue 27 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb6">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Wed 28 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb7">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Thu 29 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb8">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Fri 30 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb9">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Sat 31 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb10">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Sun 1 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb11">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Mon 2 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb12">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Tue 3 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tb13">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#sunrise" />
                        </svg>
                        {"Breakfast · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Wed 4 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 06:30–10:30"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl0">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Thu 22 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl1">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Fri 23 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl2">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Sat 24 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl3">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Sun 25 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl4">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Mon 26 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl5">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Tue 27 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl6">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Wed 28 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl7">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Thu 29 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl8">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Fri 30 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl9">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Sat 31 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl10">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Sun 1 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl11">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Mon 2 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl12">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Tue 3 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--tl13">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Lunch · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Wed 4 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 12:30–15:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td0">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Thu 22 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td1">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Fri 23 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td2">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Sat 24 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"2"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"2"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td3">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Sun 25 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td4">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Mon 26 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td5">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Tue 27 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td6">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Wed 28 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td7">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Thu 29 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td8">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Fri 30 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td9">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Sat 31 Oct 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td10">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Sun 1 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td11">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Mon 2 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td12">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Tue 3 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-sum__b sv-sum--td13">
                      <p className="sv-sum__k">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#utensils" />
                        </svg>
                        {"Dinner · Tentative"}
                      </p>
                      <p className="sv-sum__d">{"Wed 4 Nov 2026"}</p>
                      <p className="sv-sum__w">{"Travancore Restaurant · 19:00–23:00"}</p>
                      <dl className="sv-sum__n">
                        <div>
                          <dt>{"Adults"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div>
                          <dt>{"Children"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                        <div className="is-tot">
                          <dt>{"Covers"}</dt>
                          <dd>{"0"}</dd>
                        </div>
                      </dl>
                      <p className="sv-sum__s">
                        {"Included in the plan "}
                        <b>{"0"}</b>
                        {" · booked extra "}
                        <b>{"0"}</b>
                      </p>
                    </div>
                    <div className="sv-acts">
                      <Link className="btn btn--primary" data-leads-to="RS-08" to={"/reservation/rs-08-modify-reservation"}>
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#pencil" />
                        </svg>
                        {"Edit service"}
                      </Link>
                      <a className="btn" href="#RS-24-cancel">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#x-circle" />
                        </svg>
                        {"Cancel service"}
                      </a>
                      <Link className="btn" data-leads-to="FD-08" to={"/front-desk/fd-08-guest-folio"}>
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#receipt" />
                        </svg>
                        {"Service billing"}
                      </Link>
                      <a className="btn" href="#RS-24-report">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#printer" />
                        </svg>
                        {"Service report"}
                      </a>
                      <Link className="btn" data-leads-to="RS-08" to={"/reservation/rs-08-modify-reservation"}>
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#plus" />
                        </svg>
                        {"Add a service to a booking"}
                      </Link>
                    </div>
                  </aside>
                </div>
              </div>
              <div className="modal modal--sm" id="RS-24-cancel" role="dialog" aria-modal="true" aria-labelledby="RS-24-cancel-t">
                <a className="modal__backdrop" href="#" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-24-cancel-t">{"Cancel a booked service?"}</h2>
                      <p className="modal__desc">{"Tick the bookings in the list first. The meal is taken off those bookings for the chosen day."}</p>
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
                        <option>{"Guest will eat out"}</option>
                        <option>{"Early departure"}</option>
                        <option>{"Booked by mistake"}</option>
                        <option>{"Other"}</option>
                      </select>
                    </label>
                    <p className="field__hint">{"An included meal is not refunded unless the rate plan allows it; a booked extra is reversed on the folio."}</p>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Keep the service"}</a>
                    <a className="btn btn--danger" href="#flow-done">{"Cancel service"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="RS-24-report" role="dialog" aria-modal="true" aria-labelledby="RS-24-report-t">
                <a className="modal__backdrop" href="#" aria-label="Close" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RS-24-report-t">{"Service report – covers booked with the room"}</h2>
                      <p className="modal__desc">{"Thu 22 Oct – Wed 4 Nov 2026 · for the kitchen and the restaurant"}</p>
                    </div>
                    <a className="modal__close" href="#" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="sv-scroll">
                      <table className="sv-t sv-t--rep" data-nosort="" data-mc="">
                        <thead>
                          <tr>
                            <th scope="col" className="sv-corner">{"Service"}</th>
                            <th scope="col" className="is-today">
                              <span>{"Thu"}</span>
                              <b>{"22"}</b>
                              <span>{"Oct"}</span>
                            </th>
                            <th scope="col" className=" is-we">
                              <span>{"Fri"}</span>
                              <b>{"23"}</b>
                              <span>{"Oct"}</span>
                            </th>
                            <th scope="col" className=" is-we">
                              <span>{"Sat"}</span>
                              <b>{"24"}</b>
                              <span>{"Oct"}</span>
                            </th>
                            <th scope="col" className="">
                              <span>{"Sun"}</span>
                              <b>{"25"}</b>
                              <span>{"Oct"}</span>
                            </th>
                            <th scope="col" className="">
                              <span>{"Mon"}</span>
                              <b>{"26"}</b>
                              <span>{"Oct"}</span>
                            </th>
                            <th scope="col" className="">
                              <span>{"Tue"}</span>
                              <b>{"27"}</b>
                              <span>{"Oct"}</span>
                            </th>
                            <th scope="col" className="">
                              <span>{"Wed"}</span>
                              <b>{"28"}</b>
                              <span>{"Oct"}</span>
                            </th>
                            <th scope="col" className="">
                              <span>{"Thu"}</span>
                              <b>{"29"}</b>
                              <span>{"Oct"}</span>
                            </th>
                            <th scope="col" className=" is-we">
                              <span>{"Fri"}</span>
                              <b>{"30"}</b>
                              <span>{"Oct"}</span>
                            </th>
                            <th scope="col" className=" is-we">
                              <span>{"Sat"}</span>
                              <b>{"31"}</b>
                              <span>{"Oct"}</span>
                            </th>
                            <th scope="col" className="">
                              <span>{"Sun"}</span>
                              <b>{"1"}</b>
                              <span>{"Nov"}</span>
                            </th>
                            <th scope="col" className="">
                              <span>{"Mon"}</span>
                              <b>{"2"}</b>
                              <span>{"Nov"}</span>
                            </th>
                            <th scope="col" className="">
                              <span>{"Tue"}</span>
                              <b>{"3"}</b>
                              <span>{"Nov"}</span>
                            </th>
                            <th scope="col" className="">
                              <span>{"Wed"}</span>
                              <b>{"4"}</b>
                              <span>{"Nov"}</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row" data-label="Service" data-w2="" data-t="">{"Breakfast"}</th>
                            <td data-label="Thu 22 Oct" data-w2="">{"83"}</td>
                            <td data-label="Fri 23 Oct" data-w2="">{"110"}</td>
                            <td data-label="Sat 24 Oct" data-w2="">{"81"}</td>
                            <td data-label="Sun 25 Oct" data-w2="">{"62"}</td>
                            <td data-label="Mon 26 Oct" data-w2="">{"25"}</td>
                            <td data-label="Tue 27 Oct" data-w2="">{"10"}</td>
                            <td data-label="Wed 28 Oct" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Thu 29 Oct" data-w2="" data-m="">{"2"}</td>
                            <td data-label="Fri 30 Oct" data-w2="" data-m="">{"3"}</td>
                            <td data-label="Sat 31 Oct" data-w2="" data-m="">{"7"}</td>
                            <td data-label="Sun 1 Nov" data-w2="" data-m="">{"7"}</td>
                            <td data-label="Mon 2 Nov" data-w2="" data-m="">{"7"}</td>
                            <td data-label="Tue 3 Nov" data-w2="" data-m="">{"7"}</td>
                            <td data-label="Wed 4 Nov" data-w2="" data-m="">{"7"}</td>
                          </tr>
                          <tr>
                            <th scope="row" data-label="Service" data-w2="" data-t="">{"Lunch"}</th>
                            <td data-label="Thu 22 Oct" data-w2="">{"2"}</td>
                            <td data-label="Fri 23 Oct" data-w2="">{"4"}</td>
                            <td data-label="Sat 24 Oct" data-w2="">{"2"}</td>
                            <td data-label="Sun 25 Oct" data-w2="">{"2"}</td>
                            <td data-label="Mon 26 Oct" data-w2="">{"0"}</td>
                            <td data-label="Tue 27 Oct" data-w2="">{"0"}</td>
                            <td data-label="Wed 28 Oct" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Thu 29 Oct" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Fri 30 Oct" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Sat 31 Oct" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Sun 1 Nov" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Mon 2 Nov" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Tue 3 Nov" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Wed 4 Nov" data-w2="" data-m="">{"0"}</td>
                          </tr>
                          <tr>
                            <th scope="row" data-label="Service" data-w2="" data-t="">{"Dinner"}</th>
                            <td data-label="Thu 22 Oct" data-w2="">{"7"}</td>
                            <td data-label="Fri 23 Oct" data-w2="">{"2"}</td>
                            <td data-label="Sat 24 Oct" data-w2="">{"2"}</td>
                            <td data-label="Sun 25 Oct" data-w2="">{"0"}</td>
                            <td data-label="Mon 26 Oct" data-w2="">{"0"}</td>
                            <td data-label="Tue 27 Oct" data-w2="">{"0"}</td>
                            <td data-label="Wed 28 Oct" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Thu 29 Oct" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Fri 30 Oct" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Sat 31 Oct" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Sun 1 Nov" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Mon 2 Nov" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Tue 3 Nov" data-w2="" data-m="">{"0"}</td>
                            <td data-label="Wed 4 Nov" data-w2="" data-m="">{"0"}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#">{"Close"}</a>
                    <a className="btn btn--primary" href="#flow-file">
                      <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print"}
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
                  <span className="code-chip">{"RS-24"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"How many people will have breakfast, lunch and dinner on each day, from the meal plan booked with the room (CP, MAP, AP) and meal add-ons. It does not forecast outside guests of the outlets."}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    {"Reservations menu, "}
                    <Link to={"/reservation/rs-01-reservation-dashboard"}>{"RS-01"}</Link>
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <Link to={"/reservation/rs-07-reservation-details"}>{"RS-07"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-08-modify-reservation"}>{"RS-08"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-08-guest-folio"}>{"FD-08"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-04-availability-and-rate-search"}>{"RS-04"}</Link>
                  </dd>
                  <dt>{"Note"}</dt>
                  <dd>{"Static screen (HTML and CSS only). Moving a booking's meal by drag and drop comes when the backend is connected; today use Edit service."}</dd>
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
