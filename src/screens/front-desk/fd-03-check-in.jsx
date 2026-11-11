// GENERATED from public/front-desk/fd-03-check-in/index.html by scripts/convert_legacy.py.
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
    "href": "/css/aviv/choices.css",
    "media": null
  },
  {
    "href": "/front-desk/fd-03-check-in/fd-03-check-in.css",
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

export default function FrontDeskFd03CheckIn() {
  return (
    <ScreenShell title="Check-in" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FD-03" data-code="FD-03" data-static="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="FD-03" tabIndex="-1">
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
                        <span aria-current="page">{"Check-in"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Check-in"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FD-03"}</span>
                  <div className="page-header__actions" />
                </div>
              </header>
              <div className="variants">
                <span className="va" id="FK-10216" />
                <span className="va" id="FK-10006" />
                <span className="va" id="FK-10091" />
                <span className="va" id="FK-10013" />
                <span className="va" id="FK-10015" />
                <span className="va" id="FK-10022" />
                <span className="va" id="FK-10034" />
                <span className="va" id="FK-10039" />
                <span className="va" id="FK-10067" />
                <span className="va" id="FK-10089" />
                <span className="va" id="FK-10096" />
                <span className="va" id="FK-10121" />
                <span className="va" id="FK-10146" />
                <span className="va" id="FK-10201" />
                <span className="va" id="FK-10233" />
                <span className="va" id="FK-10239" />
                <div className="variant v-FK-10216 is-default">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10216" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo" title="Only for foreign nationals and OCI cardholders">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III · skipped"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10216" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f1">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f1" name="title" required={true} defaultValue={"Mrs"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f2">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f2" type="text" name="first" required={true} defaultValue={"Swathi"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f3">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f3" type="text" name="last" required={true} defaultValue={"Sahil"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f4">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f4" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+91 9095851502"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f5">{"Email"}</label>
                              <input className="field__input" id="f5" type="email" name="email" defaultValue={"swathi.sahil17@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f6">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f6" name="nat" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f7">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f7" name="gender" defaultValue={"Female"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f8">{"Date of birth"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f8" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__1-month" aria-label="Month" defaultValue={"09"}>
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
                                    <select className="dpk-y" name="dob__1-year" aria-label="Year" defaultValue={"1974"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__1" value="01" />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="27" defaultChecked={true} />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__1" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f9">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f9" type="text" name="a1" required={true} defaultValue={"98, Lake View Road"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f10">{"Address line 2"}</label>
                              <input className="field__input" id="f10" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f11">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f11" type="text" name="city" required={true} defaultValue={"Hyderabad"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f12">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f12" type="text" name="state" required={true} defaultValue={"Telangana"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f13">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f13" name="country" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f14">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f14" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"500001"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f15">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f15" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f16">{"GSTIN"}</label>
                              <input className="field__input" id="f16" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f17">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f17" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f18">{"Arriving from"}</label>
                              <input className="field__input" id="f18" type="text" name="from" defaultValue={"Hyderabad"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f19">{"Next destination"}</label>
                              <input className="field__input" id="f19" type="text" name="next" defaultValue={""} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f20">{"Vehicle number"}</label>
                              <input className="field__input" id="f20" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f21">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f21" name="loyalty" defaultValue={""}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f22">{"Loyalty no."}</label>
                              <input className="field__input" id="f22" type="text" name="loyalty_no" defaultValue={""} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f23">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f23" type="number" name="adults" required={true} min="1" max="6" defaultValue={"2"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f24">{"Children"}</label>
                              <input className="field__input num" id="f24" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f25">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f25" name="special" defaultValue={"Anniversary – flowers and a welcome cake in the room"} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Mr Sahil "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10216">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">
                            {"SS"}
                            <span className="ci-av__star" title="VIP guest">
                              <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#star" />
                              </svg>
                            </span>
                          </span>
                          <div className="ci-who__t">
                            <strong>{"Mrs Swathi Sahil"}</strong>
                            <span className="ci-who__s is-vip">{"VIP guest"}</span>
                          </div>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07">{"FK-10216"}</a>
                            {" · Booking.com"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × PDLX · "}
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"311"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"1 night · departs Fri 23 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹8,499.00 + GST ₹1,529.82"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"BAR-CP · CP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹10,028.82"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹0"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li className="">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#star" />
                            </svg>
                            <span>{"VIP guest – welcome cake and flowers in the room"}</span>
                          </li>
                          <li className="">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#message-square" />
                            </svg>
                            <span>{"Anniversary – flowers and a welcome cake in the room"}</span>
                          </li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10216" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f51">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f51" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f52">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f52" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f54">{"Age"}</label>
                            <input className="field__input num" id="f54" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f55">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f55" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f56">{"ID number"}</label>
                            <input className="field__input" id="f56" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10006">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10006" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo" title="Only for foreign nationals and OCI cardholders">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III · skipped"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10006" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f58">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f58" name="title" required={true} defaultValue={"Mr"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f59">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f59" type="text" name="first" required={true} defaultValue={"Ravi"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f60">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f60" type="text" name="last" required={true} defaultValue={"Kabir"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f61">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f61" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+91 6087734078"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f62">{"Email"}</label>
                              <input className="field__input" id="f62" type="email" name="email" defaultValue={"ravi.kabir289@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f63">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f63" name="nat" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f64">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f64" name="gender" defaultValue={"Male"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f65">{"Date of birth"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f65" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__2-month" aria-label="Month" defaultValue={"11"}>
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
                                    <select className="dpk-y" name="dob__2-year" aria-label="Year" defaultValue={"1992"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__2" value="01" />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="27" defaultChecked={true} />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__2" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f66">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f66" type="text" name="a1" required={true} defaultValue={"38, Park Avenue"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f67">{"Address line 2"}</label>
                              <input className="field__input" id="f67" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f68">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f68" type="text" name="city" required={true} defaultValue={"Kochi"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f69">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f69" type="text" name="state" required={true} defaultValue={"Kerala"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f70">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f70" name="country" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f71">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f71" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"682001"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f72">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f72" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f73">{"GSTIN"}</label>
                              <input className="field__input" id="f73" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f74">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f74" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f75">{"Arriving from"}</label>
                              <input className="field__input" id="f75" type="text" name="from" defaultValue={"Kochi"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f76">{"Next destination"}</label>
                              <input className="field__input" id="f76" type="text" name="next" defaultValue={""} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f77">{"Vehicle number"}</label>
                              <input className="field__input" id="f77" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f78">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f78" name="loyalty" defaultValue={"Aviv Club"}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f79">{"Loyalty no."}</label>
                              <input className="field__input" id="f79" type="text" name="loyalty_no" defaultValue={"AC170794976"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f80">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f80" type="number" name="adults" required={true} min="1" max="6" defaultValue={"1"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f81">{"Children"}</label>
                              <input className="field__input num" id="f81" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f82">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f82" name="special" defaultValue={"Non-smoking; High floor"} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li className="fd-muted">{"No accompanying guests"}</li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10006">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10006">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">
                            {"RK"}
                            <span className="ci-av__star" title="Aviv Club Silver">
                              <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#star" />
                              </svg>
                            </span>
                          </span>
                          <div className="ci-who__t">
                            <strong>{"Mr Ravi Kabir"}</strong>
                            <span className="ci-who__s is-vip">{"Aviv Club Silver"}</span>
                          </div>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10006" data-leads-to="RS-07">{"FK-10006"}</a>
                            {" · Booking.com"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × PDLX · "}
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"505"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"4 nights · departs Mon 26 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹7,799.00 + GST ₹1,403.82"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"BAR-CP · CP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹9,202.82"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹0"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li className="is-warn">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            <span>{"Local ID guest – address in Kochi / Ernakulam (hotel policy: warn)"}</span>
                          </li>
                          <li className="is-bad">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#broom" />
                            </svg>
                            <span>{"Room 505 is not ready – override with approval or add to queue"}</span>
                          </li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10006" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10006-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10006" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10006-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f113">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f113" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f114">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f114" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f116">{"Age"}</label>
                            <input className="field__input num" id="f116" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f117">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f117" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f118">{"ID number"}</label>
                            <input className="field__input" id="f118" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10091">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10091" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo" title="Only for foreign nationals and OCI cardholders">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III · skipped"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10091" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f120">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f120" name="title" required={true} defaultValue={"Mr"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f121">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f121" type="text" name="first" required={true} defaultValue={"Srinivas"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f122">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f122" type="text" name="last" required={true} defaultValue={"Manav"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f123">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f123" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+91 7088495156"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f124">{"Email"}</label>
                              <input className="field__input" id="f124" type="email" name="email" defaultValue={"srinivas.manav359@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f125">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f125" name="nat" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f126">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f126" name="gender" defaultValue={"Male"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f127">{"Date of birth"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f127" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__3-month" aria-label="Month" defaultValue={"11"}>
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
                                    <select className="dpk-y" name="dob__3-year" aria-label="Year" defaultValue={"1978"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__3" value="01" />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="05" defaultChecked={true} />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__3" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f128">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f128" type="text" name="a1" required={true} defaultValue={"62, Park Avenue"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f129">{"Address line 2"}</label>
                              <input className="field__input" id="f129" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f130">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f130" type="text" name="city" required={true} defaultValue={"Kozhikode"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f131">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f131" type="text" name="state" required={true} defaultValue={"Kerala"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f132">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f132" name="country" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f133">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f133" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"673001"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f134">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f134" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f135">{"GSTIN"}</label>
                              <input className="field__input" id="f135" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f136">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f136" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f137">{"Arriving from"}</label>
                              <input className="field__input" id="f137" type="text" name="from" defaultValue={"Kozhikode"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f138">{"Next destination"}</label>
                              <input className="field__input" id="f138" type="text" name="next" defaultValue={""} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f139">{"Vehicle number"}</label>
                              <input className="field__input" id="f139" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f140">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f140" name="loyalty" defaultValue={"Aviv Club"}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f141">{"Loyalty no."}</label>
                              <input className="field__input" id="f141" type="text" name="loyalty_no" defaultValue={"AC173581676"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f142">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f142" type="number" name="adults" required={true} min="1" max="6" defaultValue={"2"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f143">{"Children"}</label>
                              <input className="field__input num" id="f143" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f144">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f144" name="special" defaultValue={"Non-smoking; Extra pillows"} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Mr Manav "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10091">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10091">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">
                            {"SM"}
                            <span className="ci-av__star" title="Aviv Club Gold">
                              <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#star" />
                              </svg>
                            </span>
                          </span>
                          <div className="ci-who__t">
                            <strong>{"Mr Srinivas Manav"}</strong>
                            <span className="ci-who__s is-vip">{"Aviv Club Gold"}</span>
                          </div>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10091" data-leads-to="RS-07">{"FK-10091"}</a>
                            {" · Email"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × GDLX · "}
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"305"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"5 nights · departs Tue 27 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹7,199.00 + GST ₹359.95"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"CLUB · CP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹7,558.95"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹7,558.95"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li className="is-bad">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#broom" />
                            </svg>
                            <span>{"Room 305 is not ready – override with approval or add to queue"}</span>
                          </li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10091" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10091-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10091" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10091-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f175">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f175" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f176">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f176" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f178">{"Age"}</label>
                            <input className="field__input num" id="f178" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f179">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f179" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f180">{"ID number"}</label>
                            <input className="field__input" id="f180" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10013">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10013" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo" title="Only for foreign nationals and OCI cardholders">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III · skipped"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10013" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f182">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f182" name="title" required={true} defaultValue={"Mrs"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f183">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f183" type="text" name="first" required={true} defaultValue={"Athira"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f184">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f184" type="text" name="last" required={true} defaultValue={"Nirav"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f185">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f185" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+91 7033724972"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f186">{"Email"}</label>
                              <input className="field__input" id="f186" type="email" name="email" defaultValue={"athira.nirav232@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f187">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f187" name="nat" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f188">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f188" name="gender" defaultValue={"Female"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f189">{"Date of birth"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f189" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__4-month" aria-label="Month" defaultValue={"08"}>
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
                                    <select className="dpk-y" name="dob__4-year" aria-label="Year" defaultValue={"1992"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__4" value="01" />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__4" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f190">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f190" type="text" name="a1" required={true} defaultValue={"105, Beach Road"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f191">{"Address line 2"}</label>
                              <input className="field__input" id="f191" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f192">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f192" type="text" name="city" required={true} defaultValue={"Ahmedabad"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f193">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f193" type="text" name="state" required={true} defaultValue={"Gujarat"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f194">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f194" name="country" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f195">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f195" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"380001"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f196">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f196" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f197">{"GSTIN"}</label>
                              <input className="field__input" id="f197" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f198">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f198" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f199">{"Arriving from"}</label>
                              <input className="field__input" id="f199" type="text" name="from" defaultValue={"Ahmedabad"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f200">{"Next destination"}</label>
                              <input className="field__input" id="f200" type="text" name="next" defaultValue={""} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f201">{"Vehicle number"}</label>
                              <input className="field__input" id="f201" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f202">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f202" name="loyalty" defaultValue={"Aviv Club"}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f203">{"Loyalty no."}</label>
                              <input className="field__input" id="f203" type="text" name="loyalty_no" defaultValue={"AC132037050"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f204">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f204" type="number" name="adults" required={true} min="1" max="6" defaultValue={"2"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f205">{"Children"}</label>
                              <input className="field__input num" id="f205" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f206">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f206" name="special" defaultValue={""} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Mr Nirav "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10013">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10013">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">
                            {"AN"}
                            <span className="ci-av__star" title="Aviv Club Member">
                              <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#star" />
                              </svg>
                            </span>
                          </span>
                          <div className="ci-who__t">
                            <strong>{"Mrs Athira Nirav"}</strong>
                            <span className="ci-who__s is-vip">{"Aviv Club Member"}</span>
                          </div>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07">{"FK-10013"}</a>
                            {" · Walk-in"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × PRMS · "}
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"517"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"4 nights · departs Mon 26 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹24,000.00 + GST ₹4,320.00"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"BAR-CP · CP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹28,320"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹28,320"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li className="is-bad">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#broom" />
                            </svg>
                            <span>{"Room 517 is not ready – override with approval or add to queue"}</span>
                          </li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10013" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10013-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10013" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10013-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f237">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f237" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f238">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f238" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f240">{"Age"}</label>
                            <input className="field__input num" id="f240" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f241">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f241" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f242">{"ID number"}</label>
                            <input className="field__input" id="f242" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10015">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10015" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo" title="Only for foreign nationals and OCI cardholders">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III · skipped"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10015" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f244">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f244" name="title" required={true} defaultValue={"Mr"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f245">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f245" type="text" name="first" required={true} defaultValue={"Dileep"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f246">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f246" type="text" name="last" required={true} defaultValue={"Kurian"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f247">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f247" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+91 8052147906"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f248">{"Email"}</label>
                              <input className="field__input" id="f248" type="email" name="email" defaultValue={"dileep.kurian337@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f249">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f249" name="nat" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f250">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f250" name="gender" defaultValue={"Male"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f251">{"Date of birth"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f251" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__5-month" aria-label="Month" defaultValue={"02"}>
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
                                    <select className="dpk-y" name="dob__5-year" aria-label="Year" defaultValue={"1999"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__5" value="01" />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="08" defaultChecked={true} />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__5" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f252">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f252" type="text" name="a1" required={true} defaultValue={"82, Temple Road"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f253">{"Address line 2"}</label>
                              <input className="field__input" id="f253" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f254">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f254" type="text" name="city" required={true} defaultValue={"Kochi"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f255">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f255" type="text" name="state" required={true} defaultValue={"Kerala"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f256">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f256" name="country" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f257">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f257" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"682001"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f258">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f258" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f259">{"GSTIN"}</label>
                              <input className="field__input" id="f259" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f260">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f260" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f261">{"Arriving from"}</label>
                              <input className="field__input" id="f261" type="text" name="from" defaultValue={"Kochi"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f262">{"Next destination"}</label>
                              <input className="field__input" id="f262" type="text" name="next" defaultValue={""} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f263">{"Vehicle number"}</label>
                              <input className="field__input" id="f263" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f264">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f264" name="loyalty" defaultValue={"Aviv Club"}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f265">{"Loyalty no."}</label>
                              <input className="field__input" id="f265" type="text" name="loyalty_no" defaultValue={"AC987564947"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f266">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f266" type="number" name="adults" required={true} min="1" max="6" defaultValue={"2"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f267">{"Children"}</label>
                              <input className="field__input num" id="f267" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f268">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f268" name="special" defaultValue={"Adjoining rooms with the surveyors' party"} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Sajan Kurian "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10015">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10015">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">
                            {"DK"}
                            <span className="ci-av__star" title="Aviv Club Gold">
                              <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#star" />
                              </svg>
                            </span>
                          </span>
                          <div className="ci-who__t">
                            <strong>{"Mr Dileep Kurian"}</strong>
                            <span className="ci-who__s is-vip">{"Aviv Club Gold"}</span>
                          </div>
                        </div>
                        <div className="fd-flags ci-flags">
                          <span className="fd-flag fd-flag--group" title="Group GRP-0003">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#users" />
                            </svg>
                            {"GRP-0003"}
                          </span>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07">{"FK-10015"}</a>
                            {" · Booking.com"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × GDLX · "}
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"102"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"2 nights · departs Sat 24 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹7,999.00 + GST ₹1,439.82"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"BAR-CP · CP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹9,438.82"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹9,438.82"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li className="is-warn">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            <span>{"Local ID guest – address in Kochi / Ernakulam (hotel policy: warn)"}</span>
                          </li>
                          <li className="">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#users" />
                            </svg>
                            <span>{"Group GRP-0003 – rooms and extras are billed to the group master"}</span>
                          </li>
                          <li className="">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#message-square" />
                            </svg>
                            <span>{"Adjoining rooms with the surveyors' party"}</span>
                          </li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10015" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10015-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10015" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10015-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f294">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f294" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f295">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f295" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f297">{"Age"}</label>
                            <input className="field__input num" id="f297" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f298">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f298" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f299">{"ID number"}</label>
                            <input className="field__input" id="f299" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10022">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10022" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo" title="Only for foreign nationals and OCI cardholders">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III · skipped"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10022" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f301">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f301" name="title" required={true} defaultValue={"Ms"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f302">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f302" type="text" name="first" required={true} defaultValue={"Lakshmi"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f303">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f303" type="text" name="last" required={true} defaultValue={"Mathew"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f304">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f304" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+91 7075512688"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f305">{"Email"}</label>
                              <input className="field__input" id="f305" type="email" name="email" defaultValue={"lakshmi.mathew52@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f306">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f306" name="nat" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f307">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f307" name="gender" defaultValue={"Female"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f308">{"Date of birth"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f308" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__6-month" aria-label="Month" defaultValue={"08"}>
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
                                    <select className="dpk-y" name="dob__6-year" aria-label="Year" defaultValue={"1957"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__6" value="01" />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="28" defaultChecked={true} />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__6" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f309">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f309" type="text" name="a1" required={true} defaultValue={"55, MG Road"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f310">{"Address line 2"}</label>
                              <input className="field__input" id="f310" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f311">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f311" type="text" name="city" required={true} defaultValue={"Kozhikode"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f312">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f312" type="text" name="state" required={true} defaultValue={"Kerala"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f313">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f313" name="country" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f314">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f314" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"673001"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f315">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f315" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f316">{"GSTIN"}</label>
                              <input className="field__input" id="f316" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f317">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f317" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f318">{"Arriving from"}</label>
                              <input className="field__input" id="f318" type="text" name="from" defaultValue={"Kozhikode"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f319">{"Next destination"}</label>
                              <input className="field__input" id="f319" type="text" name="next" defaultValue={""} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f320">{"Vehicle number"}</label>
                              <input className="field__input" id="f320" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f321">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f321" name="loyalty" defaultValue={""}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f322">{"Loyalty no."}</label>
                              <input className="field__input" id="f322" type="text" name="loyalty_no" defaultValue={""} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f323">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f323" type="number" name="adults" required={true} min="1" max="6" defaultValue={"2"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f324">{"Children"}</label>
                              <input className="field__input num" id="f324" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f325">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f325" name="special" defaultValue={""} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Joby Mathew "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10022">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10022">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">{"LM"}</span>
                          <div className="ci-who__t">
                            <strong>{"Ms Lakshmi Mathew"}</strong>
                            <span className="ci-who__s">{"Guest"}</span>
                          </div>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07">{"FK-10022"}</a>
                            {" · Email"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × PDLX · "}
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"312"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"5 nights · departs Tue 27 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹7,224.00 + GST ₹361.20"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"ADV15 · CP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹7,585.20"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹0"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li>{"No alerts"}</li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10022" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10022-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10022" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10022-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f351">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f351" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f352">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f352" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f354">{"Age"}</label>
                            <input className="field__input num" id="f354" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f355">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f355" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f356">{"ID number"}</label>
                            <input className="field__input" id="f356" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10034">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10034" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo" title="Only for foreign nationals and OCI cardholders">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III · skipped"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10034" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f358">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f358" name="title" required={true} defaultValue={"Ms"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f359">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f359" type="text" name="first" required={true} defaultValue={"Pooja"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f360">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f360" type="text" name="last" required={true} defaultValue={"Neil"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f361">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f361" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+91 9078326259"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f362">{"Email"}</label>
                              <input className="field__input" id="f362" type="email" name="email" defaultValue={"pooja.neil99@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f363">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f363" name="nat" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f364">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f364" name="gender" defaultValue={"Female"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f365">{"Date of birth"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f365" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__7-month" aria-label="Month" defaultValue={"11"}>
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
                                    <select className="dpk-y" name="dob__7-year" aria-label="Year" defaultValue={"1991"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__7" value="01" />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="02" defaultChecked={true} />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__7" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f366">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f366" type="text" name="a1" required={true} defaultValue={"95, Park Avenue"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f367">{"Address line 2"}</label>
                              <input className="field__input" id="f367" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f368">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f368" type="text" name="city" required={true} defaultValue={"Kozhikode"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f369">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f369" type="text" name="state" required={true} defaultValue={"Kerala"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f370">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f370" name="country" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f371">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f371" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"673001"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f372">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f372" type="text" name="company" defaultValue={"Kerala Trails Travel Co"} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f373">{"GSTIN"}</label>
                              <input className="field__input" id="f373" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={"32BJTCK7024M1ZJ"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f374">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f374" name="purpose" defaultValue={"Business"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f375">{"Arriving from"}</label>
                              <input className="field__input" id="f375" type="text" name="from" defaultValue={"Kozhikode"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f376">{"Next destination"}</label>
                              <input className="field__input" id="f376" type="text" name="next" defaultValue={""} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f377">{"Vehicle number"}</label>
                              <input className="field__input" id="f377" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f378">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f378" name="loyalty" defaultValue={"Aviv Club"}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f379">{"Loyalty no."}</label>
                              <input className="field__input" id="f379" type="text" name="loyalty_no" defaultValue={"AC666452044"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f380">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f380" type="number" name="adults" required={true} min="1" max="6" defaultValue={"2"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f381">{"Children"}</label>
                              <input className="field__input num" id="f381" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f382">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f382" name="special" defaultValue={"Non-smoking; High floor"} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Mr Neil "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10034">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10034">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">
                            {"PN"}
                            <span className="ci-av__star" title="Aviv Club Gold">
                              <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#star" />
                              </svg>
                            </span>
                          </span>
                          <div className="ci-who__t">
                            <strong>{"Ms Pooja Neil"}</strong>
                            <span className="ci-who__s is-vip">{"Aviv Club Gold"}</span>
                          </div>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10034" data-leads-to="RS-07">{"FK-10034"}</a>
                            {" · Travel agent"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × GDLX · "}
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"106"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"5 nights · departs Tue 27 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹6,559.00 + GST ₹327.95"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"AGENT · CP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"None (billed)"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹0"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li>{"No alerts"}</li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10034" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10034-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10034" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10034-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f408">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f408" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f409">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f409" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f411">{"Age"}</label>
                            <input className="field__input num" id="f411" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f412">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f412" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f413">{"ID number"}</label>
                            <input className="field__input" id="f413" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10039">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10039" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo" title="Only for foreign nationals and OCI cardholders">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III · skipped"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10039" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f415">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f415" name="title" required={true} defaultValue={"Mr"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f416">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f416" type="text" name="first" required={true} defaultValue={"Dileep"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f417">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f417" type="text" name="last" required={true} defaultValue={"Pranav"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f418">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f418" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+91 9086966722"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f419">{"Email"}</label>
                              <input className="field__input" id="f419" type="email" name="email" defaultValue={"dileep.pranav347@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f420">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f420" name="nat" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f421">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f421" name="gender" defaultValue={"Male"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f422">{"Date of birth"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f422" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__8-month" aria-label="Month" defaultValue={"06"}>
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
                                    <select className="dpk-y" name="dob__8-year" aria-label="Year" defaultValue={"1986"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__8" value="01" />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="15" defaultChecked={true} />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__8" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f423">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f423" type="text" name="a1" required={true} defaultValue={"118, Station Road"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f424">{"Address line 2"}</label>
                              <input className="field__input" id="f424" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f425">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f425" type="text" name="city" required={true} defaultValue={"Coimbatore"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f426">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f426" type="text" name="state" required={true} defaultValue={"Tamil Nadu"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f427">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f427" name="country" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f428">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f428" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"641001"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f429">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f429" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f430">{"GSTIN"}</label>
                              <input className="field__input" id="f430" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f431">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f431" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f432">{"Arriving from"}</label>
                              <input className="field__input" id="f432" type="text" name="from" defaultValue={"Coimbatore"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f433">{"Next destination"}</label>
                              <input className="field__input" id="f433" type="text" name="next" defaultValue={""} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f434">{"Vehicle number"}</label>
                              <input className="field__input" id="f434" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f435">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f435" name="loyalty" defaultValue={""}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f436">{"Loyalty no."}</label>
                              <input className="field__input" id="f436" type="text" name="loyalty_no" defaultValue={""} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f437">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f437" type="number" name="adults" required={true} min="1" max="6" defaultValue={"7"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f438">{"Children"}</label>
                              <input className="field__input num" id="f438" type="number" name="children" min="0" max="4" defaultValue={"2"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f439">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f439" name="special" defaultValue={""} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Sajan Pranav "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                            <li>
                              {"Alex Pranav "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                            <li>
                              {"Reshma Pranav "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                            <li>
                              {"Ms Pranav "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                            <li>
                              {"Mr Pranav "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                            <li>
                              {"Ms Pranav "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                            <li>
                              {"Child 1 Pranav "}
                              <span className="fd-muted">{"· Child"}</span>
                            </li>
                            <li>
                              {"Child 2 Pranav "}
                              <span className="fd-muted">{"· Child"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10039">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10039">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">{"DP"}</span>
                          <div className="ci-who__t">
                            <strong>{"Mr Dileep Pranav"}</strong>
                            <span className="ci-who__s">{"Guest"}</span>
                          </div>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07">{"FK-10039"}</a>
                            {" · Expedia"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"3 × PDLX · "}
                            <span className="fd-rms" title="Rooms 317, 411, 412">
                              <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"317"}</span>
                              <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"411"}</span>
                              <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"412"}</span>
                            </span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"1 night · departs Fri 23 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹28,797.00 + GST ₹5,183.46"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"BAR-CP · CP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹33,980.46"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹33,980.46"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li>{"No alerts"}</li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10039" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10039-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10039" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10039-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f465">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f465" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f466">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f466" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f468">{"Age"}</label>
                            <input className="field__input num" id="f468" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f469">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f469" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f470">{"ID number"}</label>
                            <input className="field__input" id="f470" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10067">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10067" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10067" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f472">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f472" name="title" required={true} defaultValue={"Mr"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f473">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f473" type="text" name="first" required={true} defaultValue={"Lukas"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f474">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f474" type="text" name="last" required={true} defaultValue={"Keller"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f475">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f475" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+41 720811894"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f476">{"Email"}</label>
                              <input className="field__input" id="f476" type="email" name="email" defaultValue={"lukas.keller210@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f477">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f477" name="nat" required={true} defaultValue={"Switzerland"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f478">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f478" name="gender" defaultValue={"Male"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f479">
                                {"Date of birth "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f479" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__9-month" aria-label="Month" defaultValue={"02"}>
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
                                    <select className="dpk-y" name="dob__9-year" aria-label="Year" defaultValue={"1993"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__9" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="23" defaultChecked={true} />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__9" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f480">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f480" type="text" name="a1" required={true} defaultValue={"Bahnhofstrasse 21"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f481">{"Address line 2"}</label>
                              <input className="field__input" id="f481" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f482">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f482" type="text" name="city" required={true} defaultValue={"Zurich"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f483">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f483" type="text" name="state" required={true} defaultValue={"ZH"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f484">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f484" name="country" required={true} defaultValue={"Switzerland"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f485">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f485" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"8001"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f486">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f486" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f487">{"GSTIN"}</label>
                              <input className="field__input" id="f487" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f488">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f488" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f489">{"Arriving from"}</label>
                              <input className="field__input" id="f489" type="text" name="from" defaultValue={"Zurich"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f490">
                                {"Next destination "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f490" type="text" name="next" required={true} defaultValue={"Munnar"} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f491">{"Vehicle number"}</label>
                              <input className="field__input" id="f491" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f492">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f492" name="loyalty" defaultValue={""}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f493">{"Loyalty no."}</label>
                              <input className="field__input" id="f493" type="text" name="loyalty_no" defaultValue={""} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f494">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f494" type="number" name="adults" required={true} min="1" max="6" defaultValue={"2"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f495">{"Children"}</label>
                              <input className="field__input num" id="f495" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f496">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f496" name="special" defaultValue={"Honeymoon – quiet room, flowers"} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Anu Keller "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10067">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10067">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">{"LK"}</span>
                          <div className="ci-who__t">
                            <strong>{"Mr Lukas Keller"}</strong>
                            <span className="ci-who__s">{"Guest"}</span>
                          </div>
                        </div>
                        <div className="fd-flags ci-flags">
                          <span className="fd-flag" title="Foreign national – Form III required">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"Swiss"}
                          </span>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10067" data-leads-to="RS-07">{"FK-10067"}</a>
                            {" · Phone"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × PDLX · "}
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"314"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"5 nights · departs Tue 27 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹8,499.00 + GST ₹1,529.82"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"BAR-CP · CP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹10,028.82"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹10,028.82"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li className="is-warn">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            <span>{"Foreign national – Form III arrival report due within 24 hours after check-in"}</span>
                          </li>
                          <li className="">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#message-square" />
                            </svg>
                            <span>{"Honeymoon – quiet room, flowers"}</span>
                          </li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10067" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10067-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10067" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10067-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f522">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f522" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f523">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f523" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f525">{"Age"}</label>
                            <input className="field__input num" id="f525" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f526">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f526" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f527">{"ID number"}</label>
                            <input className="field__input" id="f527" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10089">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10089" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo" title="Only for foreign nationals and OCI cardholders">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III · skipped"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10089" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f529">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f529" name="title" required={true} defaultValue={"Dr"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f530">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f530" type="text" name="first" required={true} defaultValue={"Shruti"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f531">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f531" type="text" name="last" required={true} defaultValue={"Manav"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f532">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f532" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+91 7079600624"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f533">{"Email"}</label>
                              <input className="field__input" id="f533" type="email" name="email" defaultValue={"shruti.manav353@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f534">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f534" name="nat" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f535">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f535" name="gender" defaultValue={"Female"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f536">{"Date of birth"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f536" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__10-month" aria-label="Month" defaultValue={"02"}>
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
                                    <select className="dpk-y" name="dob__10-year" aria-label="Year" defaultValue={"1958"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__10" value="01" />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="02" defaultChecked={true} />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__10" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f537">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f537" type="text" name="a1" required={true} defaultValue={"59, Station Road"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f538">{"Address line 2"}</label>
                              <input className="field__input" id="f538" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f539">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f539" type="text" name="city" required={true} defaultValue={"Kozhikode"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f540">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f540" type="text" name="state" required={true} defaultValue={"Kerala"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f541">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f541" name="country" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f542">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f542" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"673001"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f543">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f543" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f544">{"GSTIN"}</label>
                              <input className="field__input" id="f544" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f545">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f545" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f546">{"Arriving from"}</label>
                              <input className="field__input" id="f546" type="text" name="from" defaultValue={"Kozhikode"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f547">{"Next destination"}</label>
                              <input className="field__input" id="f547" type="text" name="next" defaultValue={""} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f548">{"Vehicle number"}</label>
                              <input className="field__input" id="f548" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f549">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f549" name="loyalty" defaultValue={"Aviv Club"}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f550">{"Loyalty no."}</label>
                              <input className="field__input" id="f550" type="text" name="loyalty_no" defaultValue={"AC577668745"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f551">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f551" type="number" name="adults" required={true} min="1" max="6" defaultValue={"2"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f552">{"Children"}</label>
                              <input className="field__input num" id="f552" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f553">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f553" name="special" defaultValue={""} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Mr Manav "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10089">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10089">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">
                            {"SM"}
                            <span className="ci-av__star" title="Aviv Club Silver">
                              <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#star" />
                              </svg>
                            </span>
                          </span>
                          <div className="ci-who__t">
                            <strong>{"Dr Shruti Manav"}</strong>
                            <span className="ci-who__s is-vip">{"Aviv Club Silver"}</span>
                          </div>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07">{"FK-10089"}</a>
                            {" · MakeMyTrip / Goibibo"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × PDLX · "}
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"413"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"4 nights · departs Mon 26 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹6,901.00 + GST ₹345.05"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"BAR-EP · EP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹7,246.05"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹7,246.05"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li>{"No alerts"}</li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10089" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10089-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10089" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10089-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f579">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f579" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f580">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f580" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f582">{"Age"}</label>
                            <input className="field__input num" id="f582" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f583">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f583" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f584">{"ID number"}</label>
                            <input className="field__input" id="f584" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10096">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10096" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10096" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f586">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f586" name="title" required={true} defaultValue={"Mr"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f587">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f587" type="text" name="first" required={true} defaultValue={"Hans"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f588">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f588" type="text" name="last" required={true} defaultValue={"Mueller"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f589">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f589" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+49 782572599"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f590">{"Email"}</label>
                              <input className="field__input" id="f590" type="email" name="email" defaultValue={"hans.mueller108@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f591">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f591" name="nat" required={true} defaultValue={"Germany"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f592">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f592" name="gender" defaultValue={"Male"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f593">
                                {"Date of birth "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f593" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__11-month" aria-label="Month" defaultValue={"11"}>
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
                                    <select className="dpk-y" name="dob__11-year" aria-label="Year" defaultValue={"1970"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__11" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="03" defaultChecked={true} />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__11" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f594">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f594" type="text" name="a1" required={true} defaultValue={"Friedrichstrasse 100"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f595">{"Address line 2"}</label>
                              <input className="field__input" id="f595" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f596">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f596" type="text" name="city" required={true} defaultValue={"Berlin"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f597">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f597" type="text" name="state" required={true} defaultValue={"Berlin"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f598">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f598" name="country" required={true} defaultValue={"Germany"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f599">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f599" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"10117"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f600">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f600" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f601">{"GSTIN"}</label>
                              <input className="field__input" id="f601" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f602">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f602" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f603">{"Arriving from"}</label>
                              <input className="field__input" id="f603" type="text" name="from" defaultValue={"Berlin"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f604">
                                {"Next destination "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f604" type="text" name="next" required={true} defaultValue={"Munnar"} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f605">{"Vehicle number"}</label>
                              <input className="field__input" id="f605" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f606">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f606" name="loyalty" defaultValue={""}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f607">{"Loyalty no."}</label>
                              <input className="field__input" id="f607" type="text" name="loyalty_no" defaultValue={""} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f608">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f608" type="number" name="adults" required={true} min="1" max="6" defaultValue={"4"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f609">{"Children"}</label>
                              <input className="field__input num" id="f609" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f610">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f610" name="special" defaultValue={"Extra pillows; Late check-out"} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Mr Mueller "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                            <li>
                              {"Ms Mueller "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                            <li>
                              {"Mr Mueller "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10096">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10096">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">{"HM"}</span>
                          <div className="ci-who__t">
                            <strong>{"Mr Hans Mueller"}</strong>
                            <span className="ci-who__s">{"Guest"}</span>
                          </div>
                        </div>
                        <div className="fd-flags ci-flags">
                          <span className="fd-flag" title="Foreign national – Form III required">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"German · OCI"}
                          </span>
                          <span className="fd-flag fd-flag--group" title="Group GRP-0003">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#users" />
                            </svg>
                            {"GRP-0003"}
                          </span>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10096" data-leads-to="RS-07">{"FK-10096"}</a>
                            {" · Phone"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"2 × GDLX · "}
                            <span className="fd-rms" title="Rooms 302, 111">
                              <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"302"}</span>
                              <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"111"}</span>
                            </span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"2 nights · departs Sat 24 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹15,998.00 + GST ₹2,879.64"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"BAR-CP · CP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹18,877.64"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹18,877.64"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li className="is-warn">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            <span>{"OCI cardholder – Form III arrival report due within 24 hours after check-in"}</span>
                          </li>
                          <li className="is-bad">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#broom" />
                            </svg>
                            <span>{"Room 111 is not ready – override with approval or add to queue"}</span>
                          </li>
                          <li className="">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#users" />
                            </svg>
                            <span>{"Group GRP-0003 – rooms and extras are billed to the group master"}</span>
                          </li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10096" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10096-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10096" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10096-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f641">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f641" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f642">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f642" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f644">{"Age"}</label>
                            <input className="field__input num" id="f644" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f645">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f645" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f646">{"ID number"}</label>
                            <input className="field__input" id="f646" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10121">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10121" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III details"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10121" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f648">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f648" name="title" required={true} defaultValue={"Ms"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f649">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f649" type="text" name="first" required={true} defaultValue={"Noura"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f650">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f650" type="text" name="last" required={true} defaultValue={"Al Saud"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f651">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f651" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+966 729059763"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f652">{"Email"}</label>
                              <input className="field__input" id="f652" type="email" name="email" defaultValue={"noura.alsaud268@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f653">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f653" name="nat" required={true} defaultValue={"Saudi Arabia"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f654">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f654" name="gender" defaultValue={"Female"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f655">
                                {"Date of birth "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f655" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__12-month" aria-label="Month" defaultValue={"01"}>
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
                                    <select className="dpk-y" name="dob__12-year" aria-label="Year" defaultValue={"1991"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__12" value="01" required={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="20" defaultChecked={true} />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__12" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f656">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f656" type="text" name="a1" required={true} defaultValue={"King Fahd Road 450"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f657">{"Address line 2"}</label>
                              <input className="field__input" id="f657" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f658">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f658" type="text" name="city" required={true} defaultValue={"Riyadh"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f659">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f659" type="text" name="state" required={true} defaultValue={"Riyadh"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f660">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f660" name="country" required={true} defaultValue={"Saudi Arabia"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f661">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f661" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"11564"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f662">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f662" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f663">{"GSTIN"}</label>
                              <input className="field__input" id="f663" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f664">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f664" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f665">{"Arriving from"}</label>
                              <input className="field__input" id="f665" type="text" name="from" defaultValue={"Riyadh"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f666">
                                {"Next destination "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f666" type="text" name="next" required={true} defaultValue={"Munnar"} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f667">{"Vehicle number"}</label>
                              <input className="field__input" id="f667" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f668">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f668" name="loyalty" defaultValue={""}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f669">{"Loyalty no."}</label>
                              <input className="field__input" id="f669" type="text" name="loyalty_no" defaultValue={""} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f670">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f670" type="number" name="adults" required={true} min="1" max="6" defaultValue={"2"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f671">{"Children"}</label>
                              <input className="field__input num" id="f671" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f672">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f672" name="special" defaultValue={""} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Alex Al Saud "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10121">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10121">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">{"NA"}</span>
                          <div className="ci-who__t">
                            <strong>{"Ms Noura Al Saud"}</strong>
                            <span className="ci-who__s">{"Guest"}</span>
                          </div>
                        </div>
                        <div className="fd-flags ci-flags">
                          <span className="fd-flag" title="Foreign national – Form III required">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"Saudi"}
                          </span>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07">{"FK-10121"}</a>
                            {" · Phone"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × GDLX · "}
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"117"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"5 nights · departs Tue 27 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹6,401.00 + GST ₹320.05"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"BAR-EP · EP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹6,721.05"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹6,721.05"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li className="is-warn">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            <span>{"Foreign national – Form III arrival report due within 24 hours after check-in"}</span>
                          </li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10121" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10121-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10121" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10121-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f698">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f698" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f699">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f699" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f701">{"Age"}</label>
                            <input className="field__input num" id="f701" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f702">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f702" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f703">{"ID number"}</label>
                            <input className="field__input" id="f703" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10146">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10146" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo" title="Only for foreign nationals and OCI cardholders">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III · skipped"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10146" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f705">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f705" name="title" required={true} defaultValue={"Mr"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f706">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f706" type="text" name="first" required={true} defaultValue={"Ganesh"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f707">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f707" type="text" name="last" required={true} defaultValue={"Mihir"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f708">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f708" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+91 6046881212"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f709">{"Email"}</label>
                              <input className="field__input" id="f709" type="email" name="email" defaultValue={"ganesh.mihir299@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f710">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f710" name="nat" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f711">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f711" name="gender" defaultValue={"Male"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f712">{"Date of birth"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f712" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__13-month" aria-label="Month" defaultValue={"07"}>
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
                                    <select className="dpk-y" name="dob__13-year" aria-label="Year" defaultValue={"1994"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__13" value="01" />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="07" defaultChecked={true} />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__13" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f713">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f713" type="text" name="a1" required={true} defaultValue={"17, Beach Road"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f714">{"Address line 2"}</label>
                              <input className="field__input" id="f714" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f715">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f715" type="text" name="city" required={true} defaultValue={"Kottayam"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f716">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f716" type="text" name="state" required={true} defaultValue={"Kerala"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f717">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f717" name="country" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f718">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f718" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"686001"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f719">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f719" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f720">{"GSTIN"}</label>
                              <input className="field__input" id="f720" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f721">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f721" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f722">{"Arriving from"}</label>
                              <input className="field__input" id="f722" type="text" name="from" defaultValue={"Kottayam"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f723">{"Next destination"}</label>
                              <input className="field__input" id="f723" type="text" name="next" defaultValue={""} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f724">{"Vehicle number"}</label>
                              <input className="field__input" id="f724" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f725">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f725" name="loyalty" defaultValue={""}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f726">{"Loyalty no."}</label>
                              <input className="field__input" id="f726" type="text" name="loyalty_no" defaultValue={""} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f727">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f727" type="number" name="adults" required={true} min="1" max="6" defaultValue={"2"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f728">{"Children"}</label>
                              <input className="field__input num" id="f728" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f729">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f729" name="special" defaultValue={""} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Mr Mihir "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10146">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10146">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">{"GM"}</span>
                          <div className="ci-who__t">
                            <strong>{"Mr Ganesh Mihir"}</strong>
                            <span className="ci-who__s">{"Guest"}</span>
                          </div>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07">{"FK-10146"}</a>
                            {" · Phone"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × PDLX · "}
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"414"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"3 nights · departs Sun 25 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹13,695.00 + GST ₹2,465.10"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"BAR-AP · AP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹16,160.10"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹16,160.10"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li>{"No alerts"}</li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10146" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10146-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10146" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10146-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f755">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f755" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f756">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f756" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f758">{"Age"}</label>
                            <input className="field__input num" id="f758" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f759">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f759" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f760">{"ID number"}</label>
                            <input className="field__input" id="f760" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10201">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10201" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo" title="Only for foreign nationals and OCI cardholders">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III · skipped"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10201" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f762">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f762" name="title" required={true} defaultValue={"Mr"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f763">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f763" type="text" name="first" required={true} defaultValue={"Karthik"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f764">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f764" type="text" name="last" required={true} defaultValue={"Jatin"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f765">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f765" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+91 8017357828"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f766">{"Email"}</label>
                              <input className="field__input" id="f766" type="email" name="email" defaultValue={"karthik.jatin13@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f767">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f767" name="nat" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f768">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f768" name="gender" defaultValue={"Male"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f769">{"Date of birth"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f769" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__14-month" aria-label="Month" defaultValue={"09"}>
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
                                    <select className="dpk-y" name="dob__14-year" aria-label="Year" defaultValue={"1964"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__14" value="01" />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="07" defaultChecked={true} />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__14" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f770">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f770" type="text" name="a1" required={true} defaultValue={"35, Temple Road"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f771">{"Address line 2"}</label>
                              <input className="field__input" id="f771" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f772">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f772" type="text" name="city" required={true} defaultValue={"Mumbai"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f773">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f773" type="text" name="state" required={true} defaultValue={"Maharashtra"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f774">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f774" name="country" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f775">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f775" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"400001"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f776">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f776" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f777">{"GSTIN"}</label>
                              <input className="field__input" id="f777" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f778">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f778" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f779">{"Arriving from"}</label>
                              <input className="field__input" id="f779" type="text" name="from" defaultValue={"Mumbai"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f780">{"Next destination"}</label>
                              <input className="field__input" id="f780" type="text" name="next" defaultValue={""} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f781">{"Vehicle number"}</label>
                              <input className="field__input" id="f781" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f782">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f782" name="loyalty" defaultValue={""}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f783">{"Loyalty no."}</label>
                              <input className="field__input" id="f783" type="text" name="loyalty_no" defaultValue={""} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f784">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f784" type="number" name="adults" required={true} min="1" max="6" defaultValue={"2"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f785">{"Children"}</label>
                              <input className="field__input num" id="f785" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f786">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f786" name="special" defaultValue={"Quiet room away from the lift"} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Mr Jatin "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10201">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10201">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">{"KJ"}</span>
                          <div className="ci-who__t">
                            <strong>{"Mr Karthik Jatin"}</strong>
                            <span className="ci-who__s">{"Guest"}</span>
                          </div>
                        </div>
                        <div className="fd-flags ci-flags">
                          <span className="fd-flag fd-flag--group" title="Group GRP-0003">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#users" />
                            </svg>
                            {"GRP-0003"}
                          </span>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10201" data-leads-to="RS-07">{"FK-10201"}</a>
                            {" · Aviv mobile app"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × PDLX · "}
                            <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"512"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"2 nights · departs Sat 24 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹8,499.00 + GST ₹1,529.82"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"BAR-CP · CP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹10,028.82"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹10,028.82"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li className="is-bad">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#broom" />
                            </svg>
                            <span>{"Room 512 is not ready – override with approval or add to queue"}</span>
                          </li>
                          <li className="">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#users" />
                            </svg>
                            <span>{"Group GRP-0003 – rooms and extras are billed to the group master"}</span>
                          </li>
                          <li className="">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#message-square" />
                            </svg>
                            <span>{"Quiet room away from the lift"}</span>
                          </li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10201" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10201-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10201" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10201-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f817">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f817" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f818">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f818" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f820">{"Age"}</label>
                            <input className="field__input num" id="f820" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f821">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f821" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f822">{"ID number"}</label>
                            <input className="field__input" id="f822" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10233">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10233" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo" title="Only for foreign nationals and OCI cardholders">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III · skipped"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10233" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f824">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f824" name="title" required={true} defaultValue={"Mr"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f825">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f825" type="text" name="first" required={true} defaultValue={"Imran"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f826">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f826" type="text" name="last" required={true} defaultValue={"Dhruv"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f827">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f827" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+91 9079967739"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f828">{"Email"}</label>
                              <input className="field__input" id="f828" type="email" name="email" defaultValue={"imran.dhruv247@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f829">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f829" name="nat" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f830">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f830" name="gender" defaultValue={"Male"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f831">{"Date of birth"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f831" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__15-month" aria-label="Month" defaultValue={"04"}>
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
                                    <select className="dpk-y" name="dob__15-year" aria-label="Year" defaultValue={"1972"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__15" value="01" defaultChecked={true} />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="05" />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__15" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f832">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f832" type="text" name="a1" required={true} defaultValue={"42, Temple Road"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f833">{"Address line 2"}</label>
                              <input className="field__input" id="f833" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f834">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f834" type="text" name="city" required={true} defaultValue={"Kochi"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f835">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f835" type="text" name="state" required={true} defaultValue={"Kerala"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f836">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f836" name="country" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f837">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f837" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"682016"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f838">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f838" type="text" name="company" defaultValue={""} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f839">{"GSTIN"}</label>
                              <input className="field__input" id="f839" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={""} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f840">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f840" name="purpose" defaultValue={"Leisure"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f841">{"Arriving from"}</label>
                              <input className="field__input" id="f841" type="text" name="from" defaultValue={"Kochi"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f842">{"Next destination"}</label>
                              <input className="field__input" id="f842" type="text" name="next" defaultValue={""} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f843">{"Vehicle number"}</label>
                              <input className="field__input" id="f843" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f844">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f844" name="loyalty" defaultValue={""}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f845">{"Loyalty no."}</label>
                              <input className="field__input" id="f845" type="text" name="loyalty_no" defaultValue={""} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f846">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f846" type="number" name="adults" required={true} min="1" max="6" defaultValue={"2"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f847">{"Children"}</label>
                              <input className="field__input num" id="f847" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f848">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f848" name="special" defaultValue={""} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Reshma Dhruv "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10233">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10233">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">{"ID"}</span>
                          <div className="ci-who__t">
                            <strong>{"Mr Imran Dhruv"}</strong>
                            <span className="ci-who__s">{"Guest"}</span>
                          </div>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07">{"FK-10233"}</a>
                            {" · MakeMyTrip / Goibibo"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × GDLX · "}
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"203"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"5 nights · departs Tue 27 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹7,999.00 + GST ₹1,439.82"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"BAR-CP · CP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"₹9,438.82"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹0"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li className="is-warn">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#alert" />
                            </svg>
                            <span>{"Local ID guest – address in Kochi / Ernakulam (hotel policy: warn)"}</span>
                          </li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10233" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10233-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10233" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10233-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f874">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f874" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f875">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f875" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f877">{"Age"}</label>
                            <input className="field__input num" id="f877" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f878">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f878" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f879">{"ID number"}</label>
                            <input className="field__input" id="f879" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="variant v-FK-10239">
                  <nav className="ltabs ltabs--steps" aria-label="Check-in steps">
                    <div className="ltabs__list">
                      <a href="/front-desk/fd-03-check-in/#FK-10239" aria-current="page">
                        <span className="ltabs__n">{"1"}</span>
                        {"Guest details"}
                      </a>
                      <span className="is-todo">
                        <span className="ltabs__n">{"2"}</span>
                        {"ID & documents"}
                      </span>
                      <span className="is-todo" title="Only for foreign nationals and OCI cardholders">
                        <span className="ltabs__n">{"3"}</span>
                        {"Form III · skipped"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"4"}</span>
                        {"Room & rate"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"5"}</span>
                        {"Deposit"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"6"}</span>
                        {"Card & signature"}
                      </span>
                      <span className="is-todo">
                        <span className="ltabs__n">{"7"}</span>
                        {"Key card & finish"}
                      </span>
                    </div>
                  </nav>
                  <div className="fd-split fd-split--wide" data-code="FD-03-1">
                    <div>
                      <form className="fd-form" action="/front-desk/fd-03-check-in/step-2-id-documents.html#FK-10239" method="get">
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Guest details"}</h2>
                          <p className="fd-sec__d">{"From the reservation; editing updates the guest profile (RS-18)."}</p>
                          <div className="s-grid3">
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f881">
                                {"Title "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f881" name="title" required={true} defaultValue={"Mr"}>
                                  <option value="Mr">{"Mr"}</option>
                                  <option value="Ms">{"Ms"}</option>
                                  <option value="Mrs">{"Mrs"}</option>
                                  <option value="Dr">{"Dr"}</option>
                                  <option value="Miss">{"Miss"}</option>
                                  <option>{"Prof"}</option>
                                  <option>{"Capt"}</option>
                                  <option>{"Mx"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f882">
                                {"First name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f882" type="text" name="first" required={true} defaultValue={"Rahul"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f883">
                                {"Last name "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f883" type="text" name="last" required={true} defaultValue={"George"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f884">
                                {"Mobile "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f884" type="tel" name="mobile" required={true} pattern={"\\+[0-9]{1,3}[ 0-9]{6,14}"} defaultValue={"+91 6063768961"} />
                              <span className="field__hint">{"Country code + number"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f885">{"Email"}</label>
                              <input className="field__input" id="f885" type="email" name="email" defaultValue={"rahul.george197@example.com"} />
                              <span className="field__hint">{"Needed for the e-invoice by email"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f886">
                                {"Nationality "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f886" name="nat" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                              <span className="field__hint">{"Foreign or OCI opens step 3"}</span>
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f887">{"Gender"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f887" name="gender" defaultValue={"Male"}>
                                  <option value="Male">{"Male"}</option>
                                  <option value="Female">{"Female"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f888">{"Date of birth"}</label>
                              <div className="dpk">
                                <button type="button" className="dpk-f field__input" id="f888" aria-haspopup="dialog">
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
                                    <select className="dpk-m" name="dob__16-month" aria-label="Month" defaultValue={"08"}>
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
                                    <select className="dpk-y" name="dob__16-year" aria-label="Year" defaultValue={"1959"}>
                                      <option value="1940" className="lp">{"1940"}</option>
                                      <option value="1941">{"1941"}</option>
                                      <option value="1942">{"1942"}</option>
                                      <option value="1943">{"1943"}</option>
                                      <option value="1944" className="lp">{"1944"}</option>
                                      <option value="1945">{"1945"}</option>
                                      <option value="1946">{"1946"}</option>
                                      <option value="1947">{"1947"}</option>
                                      <option value="1948" className="lp">{"1948"}</option>
                                      <option value="1949">{"1949"}</option>
                                      <option value="1950">{"1950"}</option>
                                      <option value="1951">{"1951"}</option>
                                      <option value="1952" className="lp">{"1952"}</option>
                                      <option value="1953">{"1953"}</option>
                                      <option value="1954">{"1954"}</option>
                                      <option value="1955">{"1955"}</option>
                                      <option value="1956" className="lp">{"1956"}</option>
                                      <option value="1957">{"1957"}</option>
                                      <option value="1958">{"1958"}</option>
                                      <option value="1959">{"1959"}</option>
                                      <option value="1960" className="lp">{"1960"}</option>
                                      <option value="1961">{"1961"}</option>
                                      <option value="1962">{"1962"}</option>
                                      <option value="1963">{"1963"}</option>
                                      <option value="1964" className="lp">{"1964"}</option>
                                      <option value="1965">{"1965"}</option>
                                      <option value="1966">{"1966"}</option>
                                      <option value="1967">{"1967"}</option>
                                      <option value="1968" className="lp">{"1968"}</option>
                                      <option value="1969">{"1969"}</option>
                                      <option value="1970">{"1970"}</option>
                                      <option value="1971">{"1971"}</option>
                                      <option value="1972" className="lp">{"1972"}</option>
                                      <option value="1973">{"1973"}</option>
                                      <option value="1974">{"1974"}</option>
                                      <option value="1975">{"1975"}</option>
                                      <option value="1976" className="lp">{"1976"}</option>
                                      <option value="1977">{"1977"}</option>
                                      <option value="1978">{"1978"}</option>
                                      <option value="1979">{"1979"}</option>
                                      <option value="1980" className="lp">{"1980"}</option>
                                      <option value="1981">{"1981"}</option>
                                      <option value="1982">{"1982"}</option>
                                      <option value="1983">{"1983"}</option>
                                      <option value="1984" className="lp">{"1984"}</option>
                                      <option value="1985">{"1985"}</option>
                                      <option value="1986">{"1986"}</option>
                                      <option value="1987">{"1987"}</option>
                                      <option value="1988" className="lp">{"1988"}</option>
                                      <option value="1989">{"1989"}</option>
                                      <option value="1990">{"1990"}</option>
                                      <option value="1991">{"1991"}</option>
                                      <option value="1992" className="lp">{"1992"}</option>
                                      <option value="1993">{"1993"}</option>
                                      <option value="1994">{"1994"}</option>
                                      <option value="1995">{"1995"}</option>
                                      <option value="1996" className="lp">{"1996"}</option>
                                      <option value="1997">{"1997"}</option>
                                      <option value="1998">{"1998"}</option>
                                      <option value="1999">{"1999"}</option>
                                      <option value="2000" className="lp">{"2000"}</option>
                                      <option value="2001">{"2001"}</option>
                                      <option value="2002">{"2002"}</option>
                                      <option value="2003">{"2003"}</option>
                                      <option value="2004" className="lp">{"2004"}</option>
                                      <option value="2005">{"2005"}</option>
                                      <option value="2006">{"2006"}</option>
                                      <option value="2007">{"2007"}</option>
                                      <option value="2008" className="lp">{"2008"}</option>
                                      <option value="2009">{"2009"}</option>
                                      <option value="2010">{"2010"}</option>
                                      <option value="2011">{"2011"}</option>
                                      <option value="2012" className="lp">{"2012"}</option>
                                      <option value="2013">{"2013"}</option>
                                      <option value="2014">{"2014"}</option>
                                      <option value="2015">{"2015"}</option>
                                      <option value="2016" className="lp">{"2016"}</option>
                                      <option value="2017">{"2017"}</option>
                                      <option value="2018">{"2018"}</option>
                                      <option value="2019">{"2019"}</option>
                                      <option value="2020" className="lp">{"2020"}</option>
                                      <option value="2021">{"2021"}</option>
                                      <option value="2022">{"2022"}</option>
                                      <option value="2023">{"2023"}</option>
                                      <option value="2024" className="lp">{"2024"}</option>
                                      <option value="2025">{"2025"}</option>
                                      <option value="2026">{"2026"}</option>
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
                                      <input type="radio" name="dob__16" value="01" />
                                      {"1"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="02" />
                                      {"2"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="03" />
                                      {"3"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="04" />
                                      {"4"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="05" defaultChecked={true} />
                                      {"5"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="06" />
                                      {"6"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="07" />
                                      {"7"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="08" />
                                      {"8"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="09" />
                                      {"9"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="10" />
                                      {"10"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="11" />
                                      {"11"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="12" />
                                      {"12"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="13" />
                                      {"13"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="14" />
                                      {"14"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="15" />
                                      {"15"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="16" />
                                      {"16"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="17" />
                                      {"17"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="18" />
                                      {"18"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="19" />
                                      {"19"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="20" />
                                      {"20"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="21" />
                                      {"21"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="22" />
                                      {"22"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="23" />
                                      {"23"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="24" />
                                      {"24"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="25" />
                                      {"25"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="26" />
                                      {"26"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="27" />
                                      {"27"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="28" />
                                      {"28"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="29" />
                                      {"29"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="30" />
                                      {"30"}
                                    </label>
                                    <label className="dpk-d">
                                      <input type="radio" name="dob__16" value="31" />
                                      {"31"}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <span className="field__hint">{"Mandatory for foreign nationals; age checked (minimum 18)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f889">
                                {"Address line 1 "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f889" type="text" name="a1" required={true} defaultValue={"77, Church Street"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f890">{"Address line 2"}</label>
                              <input className="field__input" id="f890" type="text" name="a2" defaultValue={""} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f891">
                                {"City "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f891" type="text" name="city" required={true} defaultValue={"Bengaluru"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f892">
                                {"State "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f892" type="text" name="state" required={true} defaultValue={"Karnataka"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f893">
                                {"Country "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f893" name="country" required={true} defaultValue={"India"}>
                                  <option value="India">{"India"}</option>
                                  <option value="United States">{"United States"}</option>
                                  <option value="United Kingdom">{"United Kingdom"}</option>
                                  <option value="United Arab Emirates">{"United Arab Emirates"}</option>
                                  <option value="Germany">{"Germany"}</option>
                                  <option value="France">{"France"}</option>
                                  <option value="Australia">{"Australia"}</option>
                                  <option value="Singapore">{"Singapore"}</option>
                                  <option value="Canada">{"Canada"}</option>
                                  <option value="Saudi Arabia">{"Saudi Arabia"}</option>
                                  <option value="Qatar">{"Qatar"}</option>
                                  <option value="Sri Lanka">{"Sri Lanka"}</option>
                                  <option value="Nepal">{"Nepal"}</option>
                                  <option value="Netherlands">{"Netherlands"}</option>
                                  <option value="Italy">{"Italy"}</option>
                                  <option value="Russia">{"Russia"}</option>
                                  <option value="Japan">{"Japan"}</option>
                                  <option value="Switzerland">{"Switzerland"}</option>
                                  <option value="Sweden">{"Sweden"}</option>
                                  <option value="Bangladesh">{"Bangladesh"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f894">
                                {"PIN "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input" id="f894" type="text" name="pin" required={true} pattern={"[0-9A-Za-z \\-]{4,10}"} defaultValue={"560001"} />
                            </div>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Stay"}</h2>
                          <div className="s-grid3">
                            <div className="field">
                              <label className="field__label" htmlFor="f895">{"Company / name on invoice"}</label>
                              <input className="field__input" id="f895" type="text" name="company" defaultValue={"Southern Skies Travel"} />
                              <span className="field__hint">{"GSTIN format and state code are checked"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f896">{"GSTIN"}</label>
                              <input className="field__input" id="f896" type="text" name="gstin" pattern={"[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]"} defaultValue={"36TGNCS8610L1ZY"} />
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f897">{"Purpose of visit"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f897" name="purpose" defaultValue={"Business"}>
                                  <option value="Leisure">{"Leisure"}</option>
                                  <option value="Business">{"Business"}</option>
                                  <option value="Wedding">{"Wedding"}</option>
                                  <option value="Conference">{"Conference"}</option>
                                  <option value="Medical">{"Medical"}</option>
                                  <option value="Other">{"Other"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f898">{"Arriving from"}</label>
                              <input className="field__input" id="f898" type="text" name="from" defaultValue={"Bengaluru"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f899">{"Next destination"}</label>
                              <input className="field__input" id="f899" type="text" name="next" defaultValue={""} />
                              <span className="field__hint">{"Mandatory for foreigners (step 3)"}</span>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f900">{"Vehicle number"}</label>
                              <input className="field__input" id="f900" type="text" name="vehicle" defaultValue={""} />
                              <span className="field__hint">{"For parking"}</span>
                            </div>
                            <div className="field" data-fw="s">
                              <label className="field__label" htmlFor="f901">{"Loyalty programme"}</label>
                              <div className="field__wrap">
                                <select className="field__input field__input--select" id="f901" name="loyalty" defaultValue={"Aviv Club"}>
                                  <option value="" />
                                  <option value="Aviv Club">{"Aviv Club"}</option>
                                </select>
                                <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                  <use href="/assets/icons/sprite.svg#chevron-down" />
                                </svg>
                              </div>
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f902">{"Loyalty no."}</label>
                              <input className="field__input" id="f902" type="text" name="loyalty_no" defaultValue={"AC382615146"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f903">
                                {"Adults "}
                                <span className="field__req" title="Required">{"*"}</span>
                              </label>
                              <input className="field__input num" id="f903" type="number" name="adults" required={true} min="1" max="6" defaultValue={"2"} />
                            </div>
                            <div className="field" data-fw="x">
                              <label className="field__label" htmlFor="f904">{"Children"}</label>
                              <input className="field__input num" id="f904" type="number" name="children" min="0" max="4" defaultValue={"0"} />
                            </div>
                            <div className="field">
                              <label className="field__label" htmlFor="f905">{"Special requests / preferences"}</label>
                              <textarea className="field__input field__input--area" id="f905" name="special" defaultValue={"King bed"} />
                            </div>
                            <fieldset className="field fd-fieldset">
                              <legend className="field__label">{"Marketing consent"}</legend>
                              <div className="row fd-multi">
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="Email" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"Email"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="WhatsApp" defaultChecked={true} />
                                  <span className="check__box" />
                                  {"WhatsApp"}
                                </label>
                                <label className="check">
                                  <input className="check__input" type="checkbox" name="consent" value="SMS" />
                                  <span className="check__box" />
                                  {"SMS"}
                                </label>
                              </div>
                            </fieldset>
                          </div>
                        </section>
                        <section className="fd-sec">
                          <h2 className="fd-sec__t">{"Accompanying guests"}</h2>
                          <p className="fd-sec__d">{"One record per adult (FD-P08); sharers come from the booking."}</p>
                          <ul className="fd-people">
                            <li>
                              {"Mr George "}
                              <span className="fd-muted">{"· Adult"}</span>
                            </li>
                          </ul>
                          <a className="btn" href="#FD-P08-FK-10239">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#user-plus" />
                            </svg>
                            {"Add accompanying guest"}
                          </a>
                        </section>
                        <div className="fd-formfoot">
                          <Link className="btn fd-spacer" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>{"Cancel"}</Link>
                          <Link className="btn" data-leads-to="FD-02" title="Keeps progress; the stay stays Due In" to={"/front-desk/fd-02-arrivals"}>{"Save & exit"}</Link>
                          <button className="btn btn--primary" type="submit">{"Next →"}</button>
                        </div>
                      </form>
                    </div>
                    <aside className="fd-stack fd-stack--sticky" aria-label="Check-in summary">
                      <section className="card " data-code="FD-03-summary-FK-10239">
                        <div className="fd-cardhead">
                          <h2 className="s-card-title">{"Check-in summary"}</h2>
                        </div>
                        <div className="ci-who">
                          <span className="ci-av" aria-hidden="true">
                            {"RG"}
                            <span className="ci-av__star" title="Aviv Club Gold">
                              <svg className="icon" width="11" height="11" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#star" />
                              </svg>
                            </span>
                          </span>
                          <div className="ci-who__t">
                            <strong>{"Mr Rahul George"}</strong>
                            <span className="ci-who__s is-vip">{"Aviv Club Gold"}</span>
                          </div>
                        </div>
                        <dl className="s-kv">
                          <dt>{"Booking"}</dt>
                          <dd>
                            <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10239" data-leads-to="RS-07">{"FK-10239"}</a>
                            {" · Travel agent"}
                          </dd>
                          <dt>{"Room"}</dt>
                          <dd>
                            {"1 × GDLX · "}
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"205"}</span>
                          </dd>
                          <dt>{"Stay"}</dt>
                          <dd>{"3 nights · departs Sun 25 Oct"}</dd>
                          <dt>{"Rate / night"}</dt>
                          <dd>{"₹6,559.00 + GST ₹327.95"}</dd>
                          <dt>{"Plan"}</dt>
                          <dd>{"AGENT · CP"}</dd>
                          <dt>{"Deposit required"}</dt>
                          <dd>{"None (billed)"}</dd>
                          <dt>{"Balance to collect"}</dt>
                          <dd>{"₹0"}</dd>
                        </dl>
                        <ul className="fd-alerts">
                          <li className="is-bad">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#broom" />
                            </svg>
                            <span>{"Room 205 is not ready – override with approval or add to queue"}</span>
                          </li>
                        </ul>
                      </section>
                    </aside>
                  </div>
                  <div className="modal modal--lg" id="FD-P08-FK-10239" data-code="FD-P08" role="dialog" aria-modal="true" aria-labelledby="FD-P08-FK-10239-t">
                    <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                    <form className="modal__box" action="/front-desk/fd-03-check-in/#FK-10239" method="get">
                      <div className="modal__head">
                        <div>
                          <h2 className="modal__title" id="FD-P08-FK-10239-t">{"Add sharer / accompanying guest"}</h2>
                          <p className="modal__desc">{"Maximum occupancy of the room type is checked."}</p>
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
                            <label className="field__label" htmlFor="f936">
                              {"Search or new guest "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <input className="field__input" id="f936" type="text" name="who" required={true} placeholder="Type a name or mobile number" defaultValue={""} />
                          </div>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f937">{"Relationship"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f937" name="rel">
                                <option value="Spouse">{"Spouse"}</option>
                                <option value="Child">{"Child"}</option>
                                <option value="Parent">{"Parent"}</option>
                                <option value="Friend">{"Friend"}</option>
                                <option value="Colleague">{"Colleague"}</option>
                                <option value="Other">{"Other"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Adult / child "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Adult" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Adult"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="kind" value="Child" required={true} />
                                <span className="check__box" />
                                {"Child"}
                              </label>
                            </div>
                          </fieldset>
                          <div className="field" data-fw="x">
                            <label className="field__label" htmlFor="f939">{"Age"}</label>
                            <input className="field__input num" id="f939" type="number" name="age" min="0" max="120" defaultValue={""} />
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f940">{"ID type (adults)"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f940" name="idt" defaultValue={""}>
                                <option value="" />
                                <option value="Passport">{"Passport"}</option>
                                <option value="Aadhaar (masked)">{"Aadhaar (masked)"}</option>
                                <option value="Driving licence">{"Driving licence"}</option>
                                <option value="Voter ID">{"Voter ID"}</option>
                                <option value="PAN card">{"PAN card"}</option>
                                <option value="OCI card">{"OCI card"}</option>
                                <option value="Government employee ID">{"Government employee ID"}</option>
                                <option value="Other photo ID">{"Other photo ID"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field">
                            <label className="field__label" htmlFor="f941">{"ID number"}</label>
                            <input className="field__input" id="f941" type="text" name="idn" defaultValue={""} />
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Share of rate"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="None" defaultChecked={true} />
                                <span className="check__box" />
                                {"None"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Equal" />
                                <span className="check__box" />
                                {"Equal"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="share" value="Amount" />
                                <span className="check__box" />
                                {"Amount"}
                              </label>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                      <div className="modal__foot">
                        <a className="btn" href="#main">{"Cancel"}</a>
                        <button className="btn btn--primary" type="submit">{"Add guest"}</button>
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
                  <span className="code-chip">{"FD-03"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Guest, ID, Form III, room & rate, deposit, registration card & signature, key"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/front-desk/fd-02-arrivals"}>{"FD-02"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-05-group-check-in"}>{"FD-05"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-06-room-board"}>{"FD-06"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-29-online-check-in-arrivals"}>{"FD-29"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-07-reservation-details"}>{"RS-07"}</Link>
                    {" (arrival day)"}
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <Link to={"/front-desk/fd-07-in-house-guests"}>{"FD-07"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-20-form-c-form-iii-register"}>{"FD-20"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-08-guest-folio"}>{"FD-08"}</Link>
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
