// GENERATED from public/front-desk/fd-31-loyalty-desk/index.html by scripts/convert_legacy.py.
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
    "href": "/front-desk/fd-31-loyalty-desk/fd-31-loyalty-desk.css",
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

export default function FrontDeskFd31LoyaltyDesk() {
  return (
    <ScreenShell title="Loyalty Desk" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FD-31" data-code="FD-31" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="guest-services" open={true}>
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
                  <Link className="nav__item is-active" data-nav="FD-31" aria-current="page" title="Loyalty Desk" to={"/front-desk/fd-31-loyalty-desk"}>
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
            <main className="app__content" id="main" data-code="FD-31" tabIndex="-1">
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
                        <span aria-current="page">{"Loyalty Desk"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Loyalty Desk"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FD-31"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hs12" type="search" name="q" placeholder="Member no., mobile or email – e.g. AVC-004211" aria-label="Find a member" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hs12" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="hf13" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hf13" aria-label="Show filters" />
                      <form className="hfilter" method="get" role="search" aria-label="Find a member">
                        <span className="hfilter__hic" title="Find a member">
                          <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#sliders" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Search by"}
                            </span>
                            <select className="hf-f__c" name="by">
                              <option>{"Member no."}</option>
                              <option>{"Mobile"}</option>
                              <option>{"Email"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#star" />
                              </svg>
                              {"Programme"}
                            </span>
                            <select className="hf-f__c" name="prog">
                              <option>{"Aviv Club"}</option>
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
                          <label className="hfilter__done" htmlFor="hf13">
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
                    <a className="btn" href="#FD-P52">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#user-plus" />
                      </svg>
                      {"Enrol a guest"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="stabs">
                <input type="radio" name="fd31" id="fd31-1" aria-label="Lookup and member card" defaultChecked={true} />
                <input type="radio" name="fd31" id="fd31-2" aria-label="Loyalty log" />
                <div className="stabs__list" role="tablist">
                  <label htmlFor="fd31-1">
                    {"Lookup and member card"}
                    <span className="stabs__n">{"22"}</span>
                  </label>
                  <label htmlFor="fd31-2">
                    {"Loyalty log"}
                    <span className="stabs__n">{"8"}</span>
                  </label>
                </div>
                <div className="stabs__panels">
                  <section className="stabs__panel" id="FD-31-1" data-code="FD-31-1" aria-label="Lookup and member card">
                    <div className="lm-listhead">
                      <h2 className="lm-listhead__t">{"In house or arriving today"}</h2>
                      <span className="lm-listhead__n">{"22 members"}</span>
                    </div>
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt dt__table dt--hug" data-code="FD-31-1-list" style={{"--srt-cols": "auto auto auto auto max-content"}} data-mc="">
                          <caption className="sr-only">{"Members in house or arriving today"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="stfd310" id="stfd310-0a" aria-label="Sort by Member · number, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="stfd310" id="stfd310-0d" aria-label="Sort by Member · number, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfd310-0a">{"Member · number"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfd310-0d" aria-hidden="true">{"Member · number"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="stfd310" id="stfd310-1a" aria-label="Sort by Tier, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="stfd310" id="stfd310-1d" aria-label="Sort by Tier, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfd310-1a">{"Tier"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfd310-1d" aria-hidden="true">{"Tier"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="stfd310" id="stfd310-2a" aria-label="Sort by Stay today, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="stfd310" id="stfd310-2d" aria-label="Sort by Stay today, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfd310-2a">{"Stay today"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfd310-2d" aria-hidden="true">{"Stay today"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a3" type="radio" name="stfd310" id="stfd310-3a" aria-label="Sort by Current stay, lowest or A first" />
                                <input className="srt-i srt-d3" type="radio" name="stfd310" id="stfd310-3d" aria-label="Sort by Current stay, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfd310-3a">{"Current stay"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfd310-3d" aria-hidden="true">{"Current stay"}</label>
                              </th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k0": "20", "--k1": "1", "--k2": "8", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10074">
                                  <strong>{"Mrs Shruti Shaan"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-106771"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Gold"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 108 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10074">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "11", "--k1": "2", "--k2": "9", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w2="" data-t="">
                                <a className="fd-link" href="#FK-10165">
                                  <strong>{"Mrs Isha Vihaan"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-114689"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Member"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 113 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10165">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "1", "--k1": "3", "--k2": "10", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10011">
                                  <strong>{"Mr Amit Bijoy"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-110841"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Platinum"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 116 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10011">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "2", "--k1": "1", "--k2": "11", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10108">
                                  <strong>{"Ms Anna Schneider"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-109398"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Gold"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 205 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10108">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "9", "--k1": "2", "--k2": "12", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10033">
                                  <strong>{"Ms Elsa Lindberg"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-108399"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Member"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 208 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10033">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "12", "--k1": "2", "--k2": "13", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w2="" data-t="">
                                <a className="fd-link" href="#FK-10170">
                                  <strong>{"Mr Marco Rossi"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-108695"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Member"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 211 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10170">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "5", "--k1": "2", "--k2": "14", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w2="" data-t="">
                                <a className="fd-link" href="#FK-10069">
                                  <strong>{"Mr Biju George"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-108214"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Member"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 301 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10069">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "6", "--k1": "4", "--k2": "15", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10031">
                                  <strong>{"Ms Charlotte Fraser"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-100555"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Silver"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 303 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10031">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "13", "--k1": "1", "--k2": "16", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10143">
                                  <strong>{"Mr Oliver Hughes"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-109731"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Gold"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 304 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10143">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "16", "--k1": "1", "--k2": "17", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10197">
                                  <strong>{"Mr Rahul Philip"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-110360"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Gold"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 401 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10197">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "4", "--k1": "3", "--k2": "18", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w2="" data-t="">
                                <a className="fd-link" href="#FK-10120">
                                  <strong>{"Ms Ayesha Sahil"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-102109"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-w2="" data-s="">
                                <span className="pill pill--occupied">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Platinum"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 407 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10120">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "21", "--k1": "2", "--k2": "19", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10172">
                                  <strong>{"Ms Shruti Siddharth"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-102886"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Member"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 415 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10172">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "10", "--k1": "4", "--k2": "20", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w2="" data-t="">
                                <a className="fd-link" href="#FK-10123">
                                  <strong>{"Mrs Isha Neil"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-113653"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Silver"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 416 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10123">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "7", "--k1": "2", "--k2": "21", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10027">
                                  <strong>{"Dr Claire Dubois"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-112876"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Member"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 504 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10027">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "18", "--k1": "1", "--k2": "22", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w2="" data-t="">
                                <a className="fd-link" href="#FK-10145">
                                  <strong>{"Ms Sheela Nathan"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-114134"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Gold"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Room 510 · in house"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10145">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "17", "--k1": "4", "--k2": "1", "--k3": "2"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w2="" data-t="">
                                <a className="fd-link" href="#FK-10006">
                                  <strong>{"Mr Ravi Kabir"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-110693"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Silver"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Arrives 09:15"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#alert" />
                                  </svg>
                                  {"Not attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10006">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "22", "--k1": "1", "--k2": "2", "--k3": "2"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10091">
                                  <strong>{"Mr Srinivas Manav"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-113283"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Gold"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Arrives 09:35"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#alert" />
                                  </svg>
                                  {"Not attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10091">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "3", "--k1": "2", "--k2": "3", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10013">
                                  <strong>{"Mrs Athira Nirav"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-108584"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Member"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Arrives 12:30"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10013">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "8", "--k1": "1", "--k2": "4", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10015">
                                  <strong>{"Mr Dileep Kurian"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-112469"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Gold"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Arrives 13:00"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10015">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "14", "--k1": "1", "--k2": "5", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w2="" data-t="">
                                <a className="fd-link" href="#FK-10034">
                                  <strong>{"Ms Pooja Neil"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-103663"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Gold"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Arrives 14:00"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10034">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "19", "--k1": "4", "--k2": "6", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10089">
                                  <strong>{"Dr Shruti Manav"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-113061"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--ooo">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Silver"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Arrives 15:30"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10089">{"Open card"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "15", "--k1": "1", "--k2": "7", "--k3": "1"}}>
                              <td className="dt__td nw" data-label="Member · number" data-w="" data-t="">
                                <a className="fd-link" href="#FK-10239">
                                  <strong>{"Mr Rahul George"}</strong>
                                </a>
                                <span className="fd-sub">{"AVC-107289"}</span>
                              </td>
                              <td className="dt__td nw" data-label="Tier" data-s="">
                                <span className="pill pill--vip">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#star" />
                                  </svg>
                                  {"Gold"}
                                </span>
                              </td>
                              <td className="dt__td" data-label="Stay today" data-w2="">{"Arrives 19:00"}</td>
                              <td className="dt__td nw" data-label="Current stay" data-w2="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Attached"}
                                </span>
                              </td>
                              <td className="dt__td nw" data-a="">
                                <a className="btn" href="#FK-10239">{"Open card"}</a>
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
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–10"}</b>
                              {" of 22"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"11–20"}</b>
                              {" of 22"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"21–22"}</b>
                              {" of 22"}
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
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–15"}</b>
                              {" of 22"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"16–22"}</b>
                              {" of 22"}
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
                          </span>
                          <span className="pg-next">
                            <label className="pg-arr" htmlFor="pg1r15p2" title="Next page">
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
                              {" of 22"}
                            </span>
                            <span>
                              {"Showing "}
                              <b>{"21–22"}</b>
                              {" of 22"}
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
                          <span className="pg-info">
                            <span>
                              {"Showing "}
                              <b>{"1–22"}</b>
                              {" of 22"}
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
                              <b>{"1–22"}</b>
                              {" of 22"}
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
                    <div className="variants">
                      <span className="va" id="FK-10074" />
                      <span className="va" id="FK-10165" />
                      <span className="va" id="FK-10011" />
                      <span className="va" id="FK-10108" />
                      <span className="va" id="FK-10033" />
                      <span className="va" id="FK-10170" />
                      <span className="va" id="FK-10069" />
                      <span className="va" id="FK-10031" />
                      <span className="va" id="FK-10143" />
                      <span className="va" id="FK-10197" />
                      <span className="va" id="FK-10120" />
                      <span className="va" id="FK-10172" />
                      <span className="va" id="FK-10123" />
                      <span className="va" id="FK-10027" />
                      <span className="va" id="FK-10145" />
                      <span className="va" id="FK-10006" />
                      <span className="va" id="FK-10091" />
                      <span className="va" id="FK-10013" />
                      <span className="va" id="FK-10015" />
                      <span className="va" id="FK-10034" />
                      <span className="va" id="FK-10089" />
                      <span className="va" id="FK-10239" />
                      <div className="variant v-FK-10074 is-default">
                        <section className="card " data-code="FD-31-card-FK-10074">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Mrs Shruti Shaan"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Gold"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-106771"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 9076092446 · shruti.shaan183@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 15:00, welcome drink, upgrade subject to availability, free Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10074" data-leads-to="RS-07">{"FK-10074"}</a>
                              {" · Room 108 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"2 stays · 4 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0183" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10074" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10165">
                        <section className="card " data-code="FD-31-card-FK-10165">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Mrs Isha Vihaan"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Member"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-114689"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 8024152338 · isha.vihaan397@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Welcome drink, Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10165" data-leads-to="RS-07">{"FK-10165"}</a>
                              {" · Room 113 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"1 stays · 4 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0397" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10165" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10011">
                        <section className="card " data-code="FD-31-card-FK-10011">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Mr Amit Bijoy"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--occupied">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Platinum"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-110841"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 8079085485 · amit.bijoy293@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 16:00, guaranteed upgrade to the next category when available, welcome drink, breakfast for two, Ayurveda welcome ritual"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10011" data-leads-to="RS-07">{"FK-10011"}</a>
                              {" · Room 116 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"4 stays · 13 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0293" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10011" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10108">
                        <section className="card " data-code="FD-31-card-FK-10108">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Ms Anna Schneider"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Gold"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-109398"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+49 779087659 · anna.schneider254@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 15:00, welcome drink, upgrade subject to availability, free Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10108" data-leads-to="RS-07">{"FK-10108"}</a>
                              {" · Room 205 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"9 stays · 27 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0254" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10108" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10033">
                        <section className="card " data-code="FD-31-card-FK-10033">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Ms Elsa Lindberg"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Member"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-108399"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+46 799808098 · elsa.lindberg227@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Welcome drink, Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10033" data-leads-to="RS-07">{"FK-10033"}</a>
                              {" · Room 208 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"2 stays · 9 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0227" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10033" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10170">
                        <section className="card " data-code="FD-31-card-FK-10170">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Mr Marco Rossi"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Member"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-108695"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+39 717183350 · marco.rossi235@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Welcome drink, Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10170" data-leads-to="RS-07">{"FK-10170"}</a>
                              {" · Room 211 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"1 stays · 5 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0235" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10170" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10069">
                        <section className="card " data-code="FD-31-card-FK-10069">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Mr Biju George"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Member"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-108214"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 9026672375 · biju.george222@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Welcome drink, Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10069" data-leads-to="RS-07">{"FK-10069"}</a>
                              {" · Room 301 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"1 stays · 2 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0222" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10069" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10031">
                        <section className="card " data-code="FD-31-card-FK-10031">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Ms Charlotte Fraser"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--ooo">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Silver"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-100555"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+44 791012497 · charlotte.fraser15@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 14:00 (subject to availability), welcome drink"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10031" data-leads-to="RS-07">{"FK-10031"}</a>
                              {" · Room 303 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"6 stays · 16 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0015" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10031" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10143">
                        <section className="card " data-code="FD-31-card-FK-10143">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Mr Oliver Hughes"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Gold"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-109731"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+44 704239286 · oliver.hughes263@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 15:00, welcome drink, upgrade subject to availability, free Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10143" data-leads-to="RS-07">{"FK-10143"}</a>
                              {" · Room 304 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"1 stays · 5 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0263" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10143" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10197">
                        <section className="card " data-code="FD-31-card-FK-10197">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Mr Rahul Philip"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Gold"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-110360"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 9030807261 · rahul.philip280@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 15:00, welcome drink, upgrade subject to availability, free Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10197" data-leads-to="RS-07">{"FK-10197"}</a>
                              {" · Room 401 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"2 stays · 4 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0280" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10197" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10120">
                        <section className="card " data-code="FD-31-card-FK-10120">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Ms Ayesha Sahil"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--occupied">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Platinum"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-102109"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 8088534394 · ayesha.sahil57@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 16:00, guaranteed upgrade to the next category when available, welcome drink, breakfast for two, Ayurveda welcome ritual"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10120" data-leads-to="RS-07">{"FK-10120"}</a>
                              {" · Room 407 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"2 stays · 9 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0057" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10120" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10172">
                        <section className="card " data-code="FD-31-card-FK-10172">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Ms Shruti Siddharth"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Member"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-102886"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 9074846416 · shruti.siddharth78@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Welcome drink, Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10172" data-leads-to="RS-07">{"FK-10172"}</a>
                              {" · Room 415 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"3 stays · 8 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0078" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10172" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10123">
                        <section className="card " data-code="FD-31-card-FK-10123">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Mrs Isha Neil"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--ooo">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Silver"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-113653"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 7078985939 · isha.neil369@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 14:00 (subject to availability), welcome drink"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10123" data-leads-to="RS-07">{"FK-10123"}</a>
                              {" · Room 416 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"2 stays · 5 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0369" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10123" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10027">
                        <section className="card " data-code="FD-31-card-FK-10027">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Dr Claire Dubois"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Member"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-112876"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+33 779619175 · claire.dubois348@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Welcome drink, Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10027" data-leads-to="RS-07">{"FK-10027"}</a>
                              {" · Room 504 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"1 stays · 9 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0348" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10027" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10145">
                        <section className="card " data-code="FD-31-card-FK-10145">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Ms Sheela Nathan"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Gold"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-114134"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 8016065073 · sheela.nathan382@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 15:00, welcome drink, upgrade subject to availability, free Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10145" data-leads-to="RS-07">{"FK-10145"}</a>
                              {" · Room 510 · in house · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"2 stays · 10 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0382" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <a className="btn" href="/front-desk/fd-07-in-house-guests/#FK-10145" data-leads-to="FD-07">
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#bed" />
                              </svg>
                              {"In-house guest"}
                            </a>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10006">
                        <section className="card " data-code="FD-31-card-FK-10006">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Mr Ravi Kabir"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--ooo">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Silver"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-110693"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 6087734078 · ravi.kabir289@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 14:00 (subject to availability), welcome drink"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10006" data-leads-to="RS-07">{"FK-10006"}</a>
                              {" · Arrives 09:15 · "}
                              <span className="pill pill--tentative">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#alert" />
                                </svg>
                                {"Not attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"0 stays · 0 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn btn--primary" href="#attached">{"Attach to stay"}</a>
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0289" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <Link className="btn" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#log-in" />
                              </svg>
                              {"Arrivals"}
                            </Link>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10091">
                        <section className="card " data-code="FD-31-card-FK-10091">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Mr Srinivas Manav"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Gold"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-113283"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 7088495156 · srinivas.manav359@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 15:00, welcome drink, upgrade subject to availability, free Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10091" data-leads-to="RS-07">{"FK-10091"}</a>
                              {" · Arrives 09:35 · "}
                              <span className="pill pill--tentative">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#alert" />
                                </svg>
                                {"Not attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"0 stays · 0 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn btn--primary" href="#attached">{"Attach to stay"}</a>
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0359" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <Link className="btn" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#log-in" />
                              </svg>
                              {"Arrivals"}
                            </Link>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10013">
                        <section className="card " data-code="FD-31-card-FK-10013">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Mrs Athira Nirav"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Member"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-108584"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 7033724972 · athira.nirav232@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Welcome drink, Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07">{"FK-10013"}</a>
                              {" · Arrives 12:30 · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"0 stays · 0 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0232" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <Link className="btn" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#log-in" />
                              </svg>
                              {"Arrivals"}
                            </Link>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10015">
                        <section className="card " data-code="FD-31-card-FK-10015">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Mr Dileep Kurian"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Gold"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-112469"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 8052147906 · dileep.kurian337@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 15:00, welcome drink, upgrade subject to availability, free Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07">{"FK-10015"}</a>
                              {" · Arrives 13:00 · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"0 stays · 0 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0337" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <Link className="btn" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#log-in" />
                              </svg>
                              {"Arrivals"}
                            </Link>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10034">
                        <section className="card " data-code="FD-31-card-FK-10034">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Ms Pooja Neil"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Gold"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-103663"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 9078326259 · pooja.neil99@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 15:00, welcome drink, upgrade subject to availability, free Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10034" data-leads-to="RS-07">{"FK-10034"}</a>
                              {" · Arrives 14:00 · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"1 stays · 2 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0099" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <Link className="btn" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#log-in" />
                              </svg>
                              {"Arrivals"}
                            </Link>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10089">
                        <section className="card " data-code="FD-31-card-FK-10089">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Dr Shruti Manav"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--ooo">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Silver"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-113061"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 7079600624 · shruti.manav353@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 14:00 (subject to availability), welcome drink"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07">{"FK-10089"}</a>
                              {" · Arrives 15:30 · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"0 stays · 0 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0353" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <Link className="btn" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#log-in" />
                              </svg>
                              {"Arrivals"}
                            </Link>
                          </div>
                        </section>
                      </div>
                      <div className="variant v-FK-10239">
                        <section className="card " data-code="FD-31-card-FK-10239">
                          <div className="fd-cardhead">
                            <h2 className="s-card-title">{"Member card"}</h2>
                          </div>
                          <dl className="s-kv">
                            <dt>{"Name"}</dt>
                            <dd>
                              <strong>{"Mr Rahul George"}</strong>
                            </dd>
                            <dt>{"Tier"}</dt>
                            <dd>
                              <span className="pill pill--vip">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#star" />
                                </svg>
                                {"Gold"}
                              </span>
                            </dd>
                            <dt>{"Member no."}</dt>
                            <dd>{"AVC-107289"}</dd>
                            <dt>{"Programme"}</dt>
                            <dd>{"Aviv Club"}</dd>
                            <dt>{"Contact"}</dt>
                            <dd>{"+91 6063768961 · rahul.george197@example.com"}</dd>
                            <dt>{"Benefits"}</dt>
                            <dd>{"Late check-out until 15:00, welcome drink, upgrade subject to availability, free Wi-Fi premium"}</dd>
                            <dt>{"Current stay"}</dt>
                            <dd>
                              <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10239" data-leads-to="RS-07">{"FK-10239"}</a>
                              {" · Arrives 19:00 · "}
                              <span className="pill pill--ready">
                                <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#check-circle" />
                                </svg>
                                {"Attached"}
                              </span>
                            </dd>
                            <dt>{"Stays · nights"}</dt>
                            <dd>{"1 stays · 2 nights"}</dd>
                          </dl>
                          <div className="fd-qa">
                            <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0197" data-leads-to="RS-18">
                              <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest profile"}
                            </a>
                            <Link className="btn" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>
                              <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#log-in" />
                              </svg>
                              {"Arrivals"}
                            </Link>
                          </div>
                        </section>
                      </div>
                    </div>
                  </section>
                  <section className="stabs__panel" id="FD-31-2" data-code="FD-31-2" aria-label="Loyalty log">
                    <div className="pgw">
                      <div className="s-scroll">
                        <table className="srt dt__table dt--hug" data-code="FD-31-2-list" style={{"--srt-cols": "auto auto auto auto auto auto"}} data-mc="">
                          <caption className="sr-only">{"Loyalty log"}</caption>
                          <thead>
                            <tr>
                              <th scope="col">
                                <input className="srt-i srt-a0" type="radio" name="stfd311" id="stfd311-0a" aria-label="Sort by When, lowest or A first" />
                                <input className="srt-i srt-d0" type="radio" name="stfd311" id="stfd311-0d" aria-label="Sort by When, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfd311-0a">{"When"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfd311-0d" aria-hidden="true">{"When"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a1" type="radio" name="stfd311" id="stfd311-1a" aria-label="Sort by Action, lowest or A first" />
                                <input className="srt-i srt-d1" type="radio" name="stfd311" id="stfd311-1d" aria-label="Sort by Action, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfd311-1a">{"Action"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfd311-1d" aria-hidden="true">{"Action"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a2" type="radio" name="stfd311" id="stfd311-2a" aria-label="Sort by Guest, lowest or A first" />
                                <input className="srt-i srt-d2" type="radio" name="stfd311" id="stfd311-2d" aria-label="Sort by Guest, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfd311-2a">{"Guest"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfd311-2d" aria-hidden="true">{"Guest"}</label>
                              </th>
                              <th scope="col">
                                <input className="srt-i srt-a3" type="radio" name="stfd311" id="stfd311-3a" aria-label="Sort by Tier, lowest or A first" />
                                <input className="srt-i srt-d3" type="radio" name="stfd311" id="stfd311-3d" aria-label="Sort by Tier, highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfd311-3a">{"Tier"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfd311-3d" aria-hidden="true">{"Tier"}</label>
                              </th>
                              <th scope="col">{"User"}</th>
                              <th scope="col">
                                <input className="srt-i srt-a5" type="radio" name="stfd311" id="stfd311-5a" aria-label="Sort by Sync (FD-X20), lowest or A first" />
                                <input className="srt-i srt-d5" type="radio" name="stfd311" id="stfd311-5d" aria-label="Sort by Sync (FD-X20), highest or Z first" />
                                <label className="srt-l srt-l--a" htmlFor="stfd311-5a">{"Sync (FD-X20)"}</label>
                                <label className="srt-l srt-l--d" htmlFor="stfd311-5d" aria-hidden="true">{"Sync (FD-X20)"}</label>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{"--k0": "6", "--k1": "4", "--k2": "4", "--k3": "1", "--k5": "2"}}>
                              <td className="dt__td nw" data-label="When" data-t="">{"09:42"}</td>
                              <td className="dt__td nw" data-label="Action">
                                <strong>{"Lookup"}</strong>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="">
                                {"Mr Rahul George"}
                                <span className="fd-sub">{"FK-10239"}</span>
                              </td>
                              <td className="dt__td" data-label="Tier">{"Gold"}</td>
                              <td className="dt__td nw" data-label="User" data-w2="">{"Sneha Joseph"}</td>
                              <td className="dt__td nw" data-label="Sync (FD-X20)" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Synced"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "5", "--k1": "1", "--k2": "8", "--k3": "1", "--k5": "2"}}>
                              <td className="dt__td nw" data-label="When" data-t="">{"09:30"}</td>
                              <td className="dt__td nw" data-label="Action" data-w2="">
                                <strong>{"Attached to stay"}</strong>
                              </td>
                              <td className="dt__td" data-label="Guest">
                                {"Mr Srinivas Manav"}
                                <span className="fd-sub">{"FK-10091"}</span>
                              </td>
                              <td className="dt__td" data-label="Tier">{"Gold"}</td>
                              <td className="dt__td nw" data-label="User" data-w2="">{"Sneha Joseph"}</td>
                              <td className="dt__td nw" data-label="Sync (FD-X20)" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Synced"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "4", "--k1": "2", "--k2": "5", "--k3": "1", "--k5": "2"}}>
                              <td className="dt__td nw" data-label="When" data-t="">{"09:12"}</td>
                              <td className="dt__td nw" data-label="Action" data-w2="">
                                <strong>{"Benefit applied"}</strong>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="">
                                {"Mr Rahul Philip"}
                                <span className="fd-sub">{"FK-10197"}</span>
                              </td>
                              <td className="dt__td" data-label="Tier">{"Gold"}</td>
                              <td className="dt__td nw" data-label="User" data-w2="">{"Sneha Joseph"}</td>
                              <td className="dt__td nw" data-label="Sync (FD-X20)" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Synced"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "3", "--k1": "3", "--k2": "7", "--k3": "2", "--k5": "1"}}>
                              <td className="dt__td nw" data-label="When" data-t="">{"08:40"}</td>
                              <td className="dt__td nw" data-label="Action" data-w2="">
                                <strong>{"Enrolled"}</strong>
                              </td>
                              <td className="dt__td" data-label="Guest">
                                {"Mrs Shruti Shaan"}
                                <span className="fd-sub">{"FK-10074"}</span>
                              </td>
                              <td className="dt__td" data-label="Tier">{"Member"}</td>
                              <td className="dt__td nw" data-label="User" data-w2="">{"Sneha Joseph"}</td>
                              <td className="dt__td nw" data-label="Sync (FD-X20)" data-w2="" data-s="">
                                <span className="pill pill--tentative">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#refresh" />
                                  </svg>
                                  {"Sync pending"}
                                </span>
                                <a className="btn" href="#retried">{"Retry"}</a>
                              </td>
                            </tr>
                            <tr style={{"--k0": "2", "--k1": "4", "--k2": "2", "--k3": "2", "--k5": "2"}}>
                              <td className="dt__td nw" data-label="When" data-t="">{"08:05"}</td>
                              <td className="dt__td nw" data-label="Action">
                                <strong>{"Lookup"}</strong>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="">
                                {"Mr Biju George"}
                                <span className="fd-sub">{"FK-10069"}</span>
                              </td>
                              <td className="dt__td" data-label="Tier">{"Member"}</td>
                              <td className="dt__td nw" data-label="User" data-w2="">{"Sneha Joseph"}</td>
                              <td className="dt__td nw" data-label="Sync (FD-X20)" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Synced"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "1", "--k1": "1", "--k2": "1", "--k3": "3", "--k5": "2"}}>
                              <td className="dt__td nw" data-label="When" data-t="">{"07:50"}</td>
                              <td className="dt__td nw" data-label="Action" data-w2="">
                                <strong>{"Attached to stay"}</strong>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="">
                                {"Ms Ayesha Sahil"}
                                <span className="fd-sub">{"FK-10120"}</span>
                              </td>
                              <td className="dt__td" data-label="Tier" data-w2="">{"Platinum"}</td>
                              <td className="dt__td nw" data-label="User" data-w2="">{"Sneha Joseph"}</td>
                              <td className="dt__td nw" data-label="Sync (FD-X20)" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Synced"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "8", "--k1": "3", "--k2": "6", "--k3": "1", "--k5": "2"}}>
                              <td className="dt__td nw" data-label="When" data-w2="" data-t="">{"yesterday 18:20"}</td>
                              <td className="dt__td nw" data-label="Action" data-w2="">
                                <strong>{"Enrolled"}</strong>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="">
                                {"Ms Sheela Nathan"}
                                <span className="fd-sub">{"FK-10145"}</span>
                              </td>
                              <td className="dt__td" data-label="Tier">{"Gold"}</td>
                              <td className="dt__td nw" data-label="User" data-w2="">{"Sneha Joseph"}</td>
                              <td className="dt__td nw" data-label="Sync (FD-X20)" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Synced"}
                                </span>
                              </td>
                            </tr>
                            <tr style={{"--k0": "7", "--k1": "5", "--k2": "3", "--k3": "2", "--k5": "2"}}>
                              <td className="dt__td nw" data-label="When" data-w2="" data-t="">{"yesterday 16:05"}</td>
                              <td className="dt__td nw" data-label="Action" data-w2="">
                                <strong>{"Tier upgraded"}</strong>
                              </td>
                              <td className="dt__td" data-label="Guest" data-w2="">
                                {"Mrs Isha Vihaan"}
                                <span className="fd-sub">{"FK-10165"}</span>
                              </td>
                              <td className="dt__td" data-label="Tier">{"Member"}</td>
                              <td className="dt__td nw" data-label="User" data-w2="">{"Sneha Joseph"}</td>
                              <td className="dt__td nw" data-label="Sync (FD-X20)" data-w2="" data-s="">
                                <span className="pill pill--ready">
                                  <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    <use href="/assets/icons/sprite.svg#check-circle" />
                                  </svg>
                                  {"Synced"}
                                </span>
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
                          <input className="pg-in" type="radio" name="pg2r10" id="pg2r10p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r10p1" aria-label="Page 1">{"1"}</label>
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
                          <input className="pg-in" type="radio" name="pg2r15" id="pg2r15p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r15p1" aria-label="Page 1">{"1"}</label>
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
                          <input className="pg-in" type="radio" name="pg2r20" id="pg2r20p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r20p1" aria-label="Page 1">{"1"}</label>
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
                          <input className="pg-in" type="radio" name="pg2r25" id="pg2r25p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r25p1" aria-label="Page 1">{"1"}</label>
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
                          <input className="pg-in" type="radio" name="pg2r30" id="pg2r30p1" defaultChecked={true} />
                          <label className="pg-n" htmlFor="pg2r30p1" aria-label="Page 1">{"1"}</label>
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
                    <p className="fd-muted">{"Every enrolment, attachment and lookup is logged. The loyalty interface is simulated; the real one is connected with the backend (FD-X20)."}</p>
                  </section>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P52" data-code="FD-P52" role="dialog" aria-modal="true" aria-labelledby="FD-P52-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-31-loyalty-desk/#enrolled" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P52-t">{"Loyalty enrolment"}</h2>
                      <p className="modal__desc">{"A member number is made and the profile is updated (FD-X20 – simulated). Tier benefits come from FDS-27a."}</p>
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
                        <label className="field__label" htmlFor="f14">
                          {"Guest "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f14" name="guest" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Mr Rohit Neil (FK-10082)">{"Mr Rohit Neil (FK-10082)"}</option>
                            <option value="Mr Shibu Krish (FK-10058)">{"Mr Shibu Krish (FK-10058)"}</option>
                            <option value="Ms Noura Al Saud (FK-10056)">{"Ms Noura Al Saud (FK-10056)"}</option>
                            <option value="Mrs Jyoti Jatin (FK-10002)">{"Mrs Jyoti Jatin (FK-10002)"}</option>
                            <option value="Mrs Priya Kabir (FK-10035)">{"Mrs Priya Kabir (FK-10035)"}</option>
                            <option value="Mrs Fatima Al Mansoori (FK-10050)">{"Mrs Fatima Al Mansoori (FK-10050)"}</option>
                            <option value="Ms Isha Dhruv (FK-10118)">{"Ms Isha Dhruv (FK-10118)"}</option>
                            <option value="Ms Kavita Siddharth (FK-10101)">{"Ms Kavita Siddharth (FK-10101)"}</option>
                            <option value="Dr Aswathy Vijay (FK-10084)">{"Dr Aswathy Vijay (FK-10084)"}</option>
                            <option value="Mr Amit Chirag (FK-10104)">{"Mr Amit Chirag (FK-10104)"}</option>
                            <option value="Mr Ethan Anderson (FK-10162)">{"Mr Ethan Anderson (FK-10162)"}</option>
                            <option value="Mr Omar Al Farsi (FK-10140)">{"Mr Omar Al Farsi (FK-10140)"}</option>
                            <option value="Mrs Swathi Sahil (FK-10216)">{"Mrs Swathi Sahil (FK-10216)"}</option>
                            <option value="Ms Lakshmi Mathew (FK-10022)">{"Ms Lakshmi Mathew (FK-10022)"}</option>
                            <option value="Mr Dileep Pranav (FK-10039)">{"Mr Dileep Pranav (FK-10039)"}</option>
                            <option value="Mr Lukas Keller (FK-10067)">{"Mr Lukas Keller (FK-10067)"}</option>
                            <option value="Mr Hans Mueller (FK-10096)">{"Mr Hans Mueller (FK-10096)"}</option>
                            <option value="Ms Noura Al Saud (FK-10121)">{"Ms Noura Al Saud (FK-10121)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Guests who are not members yet"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f15">
                          {"Programme "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f15" name="prog" required={true} defaultValue={"Aviv Club"}>
                            <option value="Aviv Club">{"Aviv Club"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-27"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f16">
                          {"Mobile "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f16" type="tel" name="mobile" required={true} defaultValue={"+91 98470 11234"} />
                        <span className="field__hint">{"From the guest profile"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f17">
                          {"Email "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f17" type="email" name="email" required={true} defaultValue={"guest@example.com"} />
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f18">
                          <input id="f18" type="checkbox" role="switch" name="consent" />
                          <span className="sw__track" />
                          {"Consent"}
                        </label>
                        <span className="field__hint">{"I agree that The Aviv Kochi may keep my stay history and preferences to give Aviv Club benefits, as per the privacy notice (DPDP Act, 2023)."}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f19">
                          <input id="f19" type="checkbox" role="switch" name="attach" defaultChecked={true} />
                          <span className="sw__track" />
                          {"Attach to the current stay"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Enrol"}</button>
                  </div>
                </form>
              </div>
              <div className="fd-toast" id="found" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Member found"}
                  <small>{"The member card is shown below."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="enrolled" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Enrolled"}
                  <small>{"Member number AVC-004920 was made; the profile is updated."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="attached" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Attached to the stay"}
                  <small>{"The tier and benefits are on the arrival and in-house lists."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="retried" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Sync retried"}
                  <small>{"The loyalty interface accepted the enrolment."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"FD-31"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Member lookup, enrolment, attach membership to stay, loyalty log"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    {"Sidebar, "}
                    <Link to={"/front-desk/fd-03-check-in"}>{"FD-03"}</Link>
                    {" step 1, "}
                    <Link to={"/front-desk/fd-07-in-house-guests"}>{"FD-07"}</Link>
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <a href="/front-desk/fd-31-loyalty-desk/#FD-P52">{"FD-P52"}</a>
                    {", "}
                    <Link to={"/reservation/rs-18-guest-profile"}>{"RS-18"}</Link>
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
