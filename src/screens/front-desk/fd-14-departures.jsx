// GENERATED from public/front-desk/fd-14-departures/index.html by scripts/convert_legacy.py.
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
    "href": "/front-desk/fd-14-departures/fd-14-departures.css",
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

export default function FrontDeskFd14Departures() {
  return (
    <ScreenShell title="Departures" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FD-14" data-code="FD-14" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="FD-14" aria-current="page" title="Departures" to={"/front-desk/fd-14-departures"}>
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
            <main className="app__content" id="main" data-code="FD-14" tabIndex="-1">
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
                        <span aria-current="page">{"Departures"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Departures"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FD-14"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hs104" type="search" name="q" placeholder="Name, room, booking or company" aria-label="Search departures" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hs104" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="hf105" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hf105" aria-label="Show filters" />
                      <form className="hfilter" method="get" role="search" aria-label="Filter departures">
                        <span className="hfilter__hic" title="Filter departures">
                          <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#sliders" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f hf-f--date">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#calendar" />
                              </svg>
                              {"Departure from"}
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
                                  <select className="dpk-m" name="df-month" aria-label="Month" defaultValue={"10"}>
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
                                  <select className="dpk-y" name="df-year" aria-label="Year" defaultValue={"2026"}>
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
                                    <input type="radio" name="df" value="01" />
                                    {"1"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="02" />
                                    {"2"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="03" />
                                    {"3"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="04" />
                                    {"4"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="05" />
                                    {"5"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="06" />
                                    {"6"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="07" />
                                    {"7"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="08" />
                                    {"8"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="09" />
                                    {"9"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="10" />
                                    {"10"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="11" />
                                    {"11"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="12" />
                                    {"12"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="13" />
                                    {"13"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="14" />
                                    {"14"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="15" />
                                    {"15"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="16" />
                                    {"16"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="17" />
                                    {"17"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="18" />
                                    {"18"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="19" />
                                    {"19"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="20" />
                                    {"20"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="21" />
                                    {"21"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="22" defaultChecked={true} />
                                    {"22"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="23" />
                                    {"23"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="24" />
                                    {"24"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="25" />
                                    {"25"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="26" />
                                    {"26"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="27" />
                                    {"27"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="28" />
                                    {"28"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="29" />
                                    {"29"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="30" />
                                    {"30"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="df" value="31" />
                                    {"31"}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </label>
                          <label className="hf-f hf-f--date">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#calendar" />
                              </svg>
                              {"Departure to"}
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
                                  <select className="dpk-m" name="dt-month" aria-label="Month" defaultValue={"10"}>
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
                                  <select className="dpk-y" name="dt-year" aria-label="Year" defaultValue={"2026"}>
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
                                    <input type="radio" name="dt" value="01" />
                                    {"1"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="02" />
                                    {"2"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="03" />
                                    {"3"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="04" />
                                    {"4"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="05" />
                                    {"5"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="06" />
                                    {"6"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="07" />
                                    {"7"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="08" />
                                    {"8"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="09" />
                                    {"9"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="10" />
                                    {"10"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="11" />
                                    {"11"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="12" />
                                    {"12"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="13" />
                                    {"13"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="14" />
                                    {"14"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="15" />
                                    {"15"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="16" />
                                    {"16"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="17" />
                                    {"17"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="18" />
                                    {"18"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="19" />
                                    {"19"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="20" />
                                    {"20"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="21" />
                                    {"21"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="22" defaultChecked={true} />
                                    {"22"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="23" />
                                    {"23"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="24" />
                                    {"24"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="25" />
                                    {"25"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="26" />
                                    {"26"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="27" />
                                    {"27"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="28" />
                                    {"28"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="29" />
                                    {"29"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="30" />
                                    {"30"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="dt" value="31" />
                                    {"31"}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#key" />
                              </svg>
                              {"Stay status"}
                            </span>
                            <select className="hf-f__c" name="stay" defaultValue={"all"}>
                              <option value="all">{"In house and not checked in"}</option>
                              <option value="in">{"In house only"}</option>
                              <option value="not">{"Not checked in yet"}</option>
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
                            <select className="hf-f__c" name="roomtype" defaultValue={"all"}>
                              <option value="all">{"All room types"}</option>
                              <option value="GDLX">{"GDLX · Garden Deluxe Room"}</option>
                              <option value="PDLX">{"PDLX · Pool Deluxe Room"}</option>
                              <option value="DLXS">{"DLXS · Deluxe Suite"}</option>
                              <option value="PRMS">{"PRMS · Premium Suite"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#briefcase" />
                              </svg>
                              {"Agent / corporate"}
                            </span>
                            <select className="hf-f__c" name="agent" defaultValue={"all"}>
                              <option value="all">{"All agents & corporates"}</option>
                              <option value="agoda">{"Agoda"}</option>
                              <option value="booking-com">{"Booking.com"}</option>
                              <option value="coir-craft-industries">{"Coir Craft Industries"}</option>
                              <option value="easemytrip">{"EaseMyTrip"}</option>
                              <option value="expedia">{"Expedia"}</option>
                              <option value="heritage-routes-travel">{"Heritage Routes Travel"}</option>
                              <option value="kerala-trails-travel-co">{"Kerala Trails Travel Co"}</option>
                              <option value="makemytrip-goibibo">{"MakeMyTrip / Goibibo"}</option>
                              <option value="periyar-infotech-solutio">{"Periyar Infotech Solutions"}</option>
                              <option value="periyar-tours-travels">{"Periyar Tours & Travels"}</option>
                              <option value="self-booking">{"Self booking"}</option>
                              <option value="southern-skies-travel">{"Southern Skies Travel"}</option>
                              <option value="spice-coast-journeys">{"Spice Coast Journeys"}</option>
                              <option value="sunrise-tours-india">{"Sunrise Tours India"}</option>
                              <option value="techpark-kochi-systems">{"TechPark Kochi Systems"}</option>
                              <option value="trip-com">{"Trip.com"}</option>
                              <option value="willingdon-logistics-llp">{"Willingdon Logistics LLP"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#wallet" />
                              </svg>
                              {"Balance"}
                            </span>
                            <select className="hf-f__c" name="bal" defaultValue={"all"}>
                              <option value="all">{"Any balance"}</option>
                              <option value="due">{"Balance to collect"}</option>
                              <option value="none">{"Settled or billed"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <div className="hfilter__more">
                            <label className="sw">
                              <input type="checkbox" role="switch" name="express" />
                              <span className="sw__track" />
                              {"Express check-out eligible only"}
                            </label>
                          </div>
                          <fieldset className="arl-cols">
                            <legend>
                              <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#columns" />
                              </svg>
                              {"Show columns"}
                            </legend>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="mob" id="dlc-mob" />
                              {"Mobile no."}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="trv" id="dlc-trv" />
                              {"Travel details"}
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
                          <label className="hfilter__done" htmlFor="hf105">
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
                    <a className="btn" href="/minibar/mb-02-room-minibar-status/#cd-dep" data-leads-to="MB-02" title="Ask for a minibar check of a departing room (departure check – posts at once)">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#minibar" />
                      </svg>
                      {"Minibar checks"}
                    </a>
                    <a className="btn ph-ic" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R01" data-leads-to="FD-R01">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#download" />
                      </svg>
                      {"Departures list"}
                    </a>
                    <Link className="btn" data-leads-to="FD-04" to={"/front-desk/fd-04-walk-in-check-in"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#log-in" />
                      </svg>
                      {"Walk-in"}
                    </Link>
                    <Link className="btn" data-leads-to="FD-18" to={"/front-desk/fd-18-cashier-shift"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#wallet" />
                      </svg>
                      {"Cashier shift"}
                    </Link>
                  </div>
                </div>
              </header>
              <section className="st-tiles" data-n="5" data-code="FD-14-kpis" aria-label="Departures today">
                <div className="st-tile" title="0 checked out so far">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#log-out" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Due out today"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"8"}</b>
                    <small className="st-tile__u">{"13 rooms"}</small>
                  </span>
                </div>
                <div className="st-tile st-tile--good" title="No dues, or the stay is fully billed to a company / agent">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#check-circle" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Express eligible"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"3"}</b>
                    <small className="st-tile__u">{"ready"}</small>
                  </span>
                </div>
                <div className="st-tile st-tile--warn" title="Minibar · laundry · dining not yet posted">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#alert" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Pending postings"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"3"}</b>
                    <small className="st-tile__u">{"to clear"}</small>
                  </span>
                </div>
                <div className="st-tile" title="Guest balance before round-off">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#wallet" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Balance to collect"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"₹2,28,443.33"}</b>
                  </span>
                </div>
                <div className="st-tile" title="Goes to the city ledger (FD-17)">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#building" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Company / agent bills"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"₹20,660.85"}</b>
                  </span>
                </div>
              </section>
              <section className="arr-deck dp-deck" data-code="FD-14-deck" aria-label="Departures views and actions">
                <nav className="ltabs" aria-label="Sections">
                  <div className="ltabs__list">
                    <Link aria-current="page" data-leads-to="FD-14" to={"/front-desk/fd-14-departures"}>
                      {"Due out"}
                      <span className="ltabs__n">{"8"}</span>
                    </Link>
                    <Link data-leads-to="FD-14-2" to={"/front-desk/fd-14-departures/checked-out"}>
                      {"Checked out today"}
                      <span className="ltabs__n">{"0"}</span>
                    </Link>
                    <Link data-leads-to="FD-14-3" to={"/front-desk/fd-14-departures/express"}>
                      {"Express / bulk check-out"}
                      <span className="ltabs__n">{"3"}</span>
                    </Link>
                  </div>
                </nav>
                <div className="arr-bulk dp-bulk" data-code="FD-14-bulk">
                  <div className="arr-bulk__lead">
                    <span className="arr-bulk__ic">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#clipboard-check" />
                      </svg>
                    </span>
                    <span className="arr-bulk__t">
                      <strong>{"Actions for ticked guests"}</strong>
                      <small className="arr-bulk__off">{"Tick one or more guests in the table below"}</small>
                      <small className="arr-bulk__on">{"Ticked guests are ready for these actions"}</small>
                    </span>
                  </div>
                  <div className="arr-bulk__btns">
                    <a className="arr-act arr-act--primary" href="#FD-P30">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#log-out" />
                      </svg>
                      {"Express check-out"}
                    </a>
                    <a className="arr-act" href="/front-desk/fd-o02-guest-bill/#bill-FK-10104" data-leads-to="FD-O02">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Print bills"}
                    </a>
                    <a className="arr-act" href="/front-desk/fd-24-left-luggage/#FD-P42" data-leads-to="FD-P42">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#luggage" />
                      </svg>
                      {"Store luggage"}
                    </a>
                  </div>
                </div>
              </section>
              <div className="arl-wrap">
                <div className="s-scroll s-scroll--tall arl" data-code="FD-14-1">
                  <table className="srt dt__table arl-t" data-code="FD-14-1-table" style={{"--srt-cols": "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto max-content"}} data-mc="">
                    <caption className="sr-only">{"Departures"}</caption>
                    <thead>
                      <tr>
                        <th scope="col" className="arl-bk">
                          <input className="srt-i srt-a0" type="radio" name="stfd140" id="stfd140-0a" aria-label="Sort by Booking no., lowest or A first" />
                          <input className="srt-i srt-d0" type="radio" name="stfd140" id="stfd140-0d" aria-label="Sort by Booking no., highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-0a">{"Booking no."}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-0d" aria-hidden="true">{"Booking no."}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a1" type="radio" name="stfd140" id="stfd140-1a" aria-label="Sort by Guest name, lowest or A first" />
                          <input className="srt-i srt-d1" type="radio" name="stfd140" id="stfd140-1d" aria-label="Sort by Guest name, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-1a">{"Guest name"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-1d" aria-hidden="true">{"Guest name"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a2" type="radio" name="stfd140" id="stfd140-2a" aria-label="Sort by Room no., lowest or A first" />
                          <input className="srt-i srt-d2" type="radio" name="stfd140" id="stfd140-2d" aria-label="Sort by Room no., highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-2a">{"Room no."}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-2d" aria-hidden="true">{"Room no."}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a3" type="radio" name="stfd140" id="stfd140-3a" aria-label="Sort by Room type, lowest or A first" />
                          <input className="srt-i srt-d3" type="radio" name="stfd140" id="stfd140-3d" aria-label="Sort by Room type, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-3a">{"Room type"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-3d" aria-hidden="true">{"Room type"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a4" type="radio" name="stfd140" id="stfd140-4a" aria-label="Sort by Arrival, lowest or A first" />
                          <input className="srt-i srt-d4" type="radio" name="stfd140" id="stfd140-4d" aria-label="Sort by Arrival, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-4a">{"Arrival"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-4d" aria-hidden="true">{"Arrival"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a5" type="radio" name="stfd140" id="stfd140-5a" aria-label="Sort by Departure, lowest or A first" />
                          <input className="srt-i srt-d5" type="radio" name="stfd140" id="stfd140-5d" aria-label="Sort by Departure, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-5a">{"Departure"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-5d" aria-hidden="true">{"Departure"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a6" type="radio" name="stfd140" id="stfd140-6a" aria-label="Sort by Check-out, lowest or A first" />
                          <input className="srt-i srt-d6" type="radio" name="stfd140" id="stfd140-6d" aria-label="Sort by Check-out, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-6a">{"Check-out"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-6d" aria-hidden="true">{"Check-out"}</label>
                        </th>
                        <th scope="col" className="dt__th--right">
                          <input className="srt-i srt-a7" type="radio" name="stfd140" id="stfd140-7a" aria-label="Sort by Nights, lowest or A first" />
                          <input className="srt-i srt-d7" type="radio" name="stfd140" id="stfd140-7d" aria-label="Sort by Nights, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-7a">{"Nights"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-7d" aria-hidden="true">{"Nights"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a8" type="radio" name="stfd140" id="stfd140-8a" aria-label="Sort by Stay status, lowest or A first" />
                          <input className="srt-i srt-d8" type="radio" name="stfd140" id="stfd140-8d" aria-label="Sort by Stay status, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-8a">{"Stay status"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-8d" aria-hidden="true">{"Stay status"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a9" type="radio" name="stfd140" id="stfd140-9a" aria-label="Sort by Rate plan, lowest or A first" />
                          <input className="srt-i srt-d9" type="radio" name="stfd140" id="stfd140-9d" aria-label="Sort by Rate plan, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-9a">{"Rate plan"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-9d" aria-hidden="true">{"Rate plan"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a10" type="radio" name="stfd140" id="stfd140-10a" aria-label="Sort by Agent / corporate, lowest or A first" />
                          <input className="srt-i srt-d10" type="radio" name="stfd140" id="stfd140-10d" aria-label="Sort by Agent / corporate, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-10a">{"Agent / corporate"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-10d" aria-hidden="true">{"Agent / corporate"}</label>
                        </th>
                        <th scope="col" className="dt__th--right">
                          <input className="srt-i srt-a11" type="radio" name="stfd140" id="stfd140-11a" aria-label="Sort by Balance, lowest or A first" />
                          <input className="srt-i srt-d11" type="radio" name="stfd140" id="stfd140-11d" aria-label="Sort by Balance, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-11a">{"Balance"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-11d" aria-hidden="true">{"Balance"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a12" type="radio" name="stfd140" id="stfd140-12a" aria-label="Sort by Pending postings, lowest or A first" />
                          <input className="srt-i srt-d12" type="radio" name="stfd140" id="stfd140-12d" aria-label="Sort by Pending postings, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-12a">{"Pending postings"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-12d" aria-hidden="true">{"Pending postings"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a13" type="radio" name="stfd140" id="stfd140-13a" aria-label="Sort by Pre-auth / deposit, lowest or A first" />
                          <input className="srt-i srt-d13" type="radio" name="stfd140" id="stfd140-13d" aria-label="Sort by Pre-auth / deposit, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-13a">{"Pre-auth / deposit"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-13d" aria-hidden="true">{"Pre-auth / deposit"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a14" type="radio" name="stfd140" id="stfd140-14a" aria-label="Sort by Keys · luggage, lowest or A first" />
                          <input className="srt-i srt-d14" type="radio" name="stfd140" id="stfd140-14d" aria-label="Sort by Keys · luggage, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-14a">{"Keys · luggage"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-14d" aria-hidden="true">{"Keys · luggage"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a15" type="radio" name="stfd140" id="stfd140-15a" aria-label="Sort by Express, lowest or A first" />
                          <input className="srt-i srt-d15" type="radio" name="stfd140" id="stfd140-15d" aria-label="Sort by Express, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-15a">{"Express"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-15d" aria-hidden="true">{"Express"}</label>
                        </th>
                        <th scope="col" className="c-mob">
                          <input className="srt-i srt-a16" type="radio" name="stfd140" id="stfd140-16a" aria-label="Sort by Mobile no., lowest or A first" />
                          <input className="srt-i srt-d16" type="radio" name="stfd140" id="stfd140-16d" aria-label="Sort by Mobile no., highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-16a">{"Mobile no."}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-16d" aria-hidden="true">{"Mobile no."}</label>
                        </th>
                        <th scope="col" className="c-trv">
                          <input className="srt-i srt-a17" type="radio" name="stfd140" id="stfd140-17a" aria-label="Sort by Travel details, lowest or A first" />
                          <input className="srt-i srt-d17" type="radio" name="stfd140" id="stfd140-17d" aria-label="Sort by Travel details, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd140-17a">{"Travel details"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd140-17d" aria-hidden="true">{"Travel details"}</label>
                        </th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="dd-1022 rt-PDLX ag-agoda ss-in bal" style={{"--k0": "39", "--k1": "58", "--k2": "39", "--k3": "5", "--k4": "2", "--k5": "1", "--k6": "1", "--k7": "4", "--k8": "2", "--k9": "5", "--k10": "1", "--k11": "25", "--k12": "1", "--k13": "3", "--k14": "1", "--k15": "3", "--k16": "49", "--k17": "1"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10102" aria-label="Select Ms Remya Kurian" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10102" data-leads-to="RS-07">{"FK-10102"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10102" data-leads-to="FD-07-1">{"Ms Remya Kurian"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"319"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sun 18 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Thu 22 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Agoda"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹28,984.20"}</span>
                        </td>
                        <td className="dt__td" data-label="Pending postings" data-m="">{"1 not posted Travancore Restaurant – breakfast"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹20,000 HDFC-01"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"0 / 2 keys back"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Not eligible"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7081610269"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"6E 6312 · BLR → COK 08:40"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-15-check-out-settlement/#FK-10102" data-leads-to="FD-15">{"Check-out"}</a>
                          <a className="btn btn--xs" href="#FD-P18-FK-10102" title="Late check-out (FD-P18)">{"Late C/O"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1022 rt-GDLX ag-kerala-trails-travel-co ss-in xe" style={{"--k0": "41", "--k1": "3", "--k2": "18", "--k3": "4", "--k4": "3", "--k5": "1", "--k6": "1", "--k7": "3", "--k8": "2", "--k9": "2", "--k10": "7", "--k11": "1", "--k12": "2", "--k13": "15", "--k14": "1", "--k15": "2", "--k16": "23", "--k17": "15"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10104" aria-label="Select Mr Amit Chirag" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10104" data-leads-to="RS-07">{"FK-10104"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10104" data-leads-to="FD-07-1">{"Mr Amit Chirag"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"207"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 19 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Thu 22 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"AGENT"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Kerala Trails Travel Co"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-label="Pending postings" data-w2="" data-m="">{"None"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"– billed"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"0 / 2 keys back"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Eligible"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6050175895"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"UK 879 · BOM → COK 13:20 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-15-check-out-settlement/#FK-10104" data-leads-to="FD-15">{"Check-out"}</a>
                          <a className="btn btn--xs" href="#FD-P18-FK-10104" title="Late check-out (FD-P18)">{"Late C/O"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1022 rt-GDLX ag-makemytrip-goibibo ss-in bal" style={{"--k0": "44", "--k1": "6", "--k2": "17", "--k3": "4", "--k4": "3", "--k5": "1", "--k6": "1", "--k7": "3", "--k8": "2", "--k9": "5", "--k10": "8", "--k11": "22", "--k12": "2", "--k13": "2", "--k14": "1", "--k15": "3", "--k16": "14", "--k17": "13"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10108" aria-label="Select Ms Anna Schneider" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10108" data-leads-to="RS-07">{"FK-10108"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10108" data-leads-to="FD-07-1">{"Ms Anna Schneider"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"DE"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"205"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 19 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Thu 22 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹24,623.45"}</span>
                        </td>
                        <td className="dt__td" data-label="Pending postings" data-w2="" data-m="">{"None"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹15,000 HDFC-01"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-m="">{"0 / 2 keys back · Luggage stored"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Not eligible"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+49 779087659"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"SG 3021 · HYD → COK 17:10 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-15-check-out-settlement/#FK-10108" data-leads-to="FD-15">{"Check-out"}</a>
                          <a className="btn btn--xs" href="#FD-P18-FK-10108" title="Late check-out (FD-P18)">{"Late C/O"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1022 rt-PDLX ag-self-booking ss-in bal" style={{"--k0": "49", "--k1": "26", "--k2": "50", "--k3": "1", "--k4": "4", "--k5": "1", "--k6": "1", "--k7": "2", "--k8": "2", "--k9": "7", "--k10": "11", "--k11": "26", "--k12": "1", "--k13": "3", "--k14": "1", "--k15": "3", "--k16": "45", "--k17": "11"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10123" aria-label="Select Mrs Isha Neil" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10123" data-leads-to="RS-07">{"FK-10123"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10123" data-leads-to="FD-07-1">{"Mrs Isha Neil"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"416"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"505"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"2 × PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 20 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Thu 22 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CLUB"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹30,011.54"}</span>
                        </td>
                        <td className="dt__td" data-label="Pending postings" data-m="">{"1 not posted Laundry – 6 pieces, collected 08:50"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹20,000 HDFC-01"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"0 / 4 keys back"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Not eligible"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7078985939"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"QR 516 · DOH → COK 02:50 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-15-check-out-settlement/#FK-10123" data-leads-to="FD-15">{"Check-out"}</a>
                          <a className="btn btn--xs" href="#FD-P18-FK-10123" title="Late check-out (FD-P18)">{"Late C/O"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1022 rt-PRMS ag-trip-com ss-in xe" style={{"--k0": "53", "--k1": "40", "--k2": "64", "--k3": "7", "--k4": "3", "--k5": "1", "--k6": "1", "--k7": "3", "--k8": "2", "--k9": "4", "--k10": "16", "--k11": "1", "--k12": "2", "--k13": "7", "--k14": "2", "--k15": "2", "--k16": "63", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10142" aria-label="Select Mrs Maya Mohan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10142" data-leads-to="RS-07">{"FK-10142"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10142" data-leads-to="FD-07-1">{"Mrs Maya Mohan"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"517"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PRMS"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 19 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Thu 22 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Trip.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-label="Pending postings" data-w2="" data-m="">{"None"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹50,000 HDFC-01"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 / 2 keys back"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Eligible"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8084504466"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-15-check-out-settlement/#FK-10142" data-leads-to="FD-15">{"Check-out"}</a>
                          <a className="btn btn--xs" href="#FD-P18-FK-10142" title="Late check-out (FD-P18)">{"Late C/O"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1022 rt-PDLX ag-self-booking ss-in bal" style={{"--k0": "65", "--k1": "66", "--k2": "49", "--k3": "1", "--k4": "2", "--k5": "1", "--k6": "2", "--k7": "4", "--k8": "2", "--k9": "5", "--k10": "11", "--k11": "40", "--k12": "2", "--k13": "8", "--k14": "1", "--k15": "3", "--k16": "70", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10172" aria-label="Select Ms Shruti Siddharth" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10172" data-leads-to="RS-07">{"FK-10172"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10172" data-leads-to="FD-07-1">{"Ms Shruti Siddharth"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"415"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"316"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"2 × PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sun 18 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Thu 22 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"15:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹77,015.92"}</span>
                        </td>
                        <td className="dt__td" data-label="Pending postings" data-w2="" data-m="">{"None"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹55,000 HDFC-01"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-m="">{"0 / 4 keys back · Locker L-07 open"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Not eligible"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9074846416"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-15-check-out-settlement/#FK-10172" data-leads-to="FD-15">{"Check-out"}</a>
                          <a className="btn btn--xs" href="#FD-P18-FK-10172" title="Late check-out (FD-P18)">{"Late C/O"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1022 rt-PDLX ag-self-booking ss-in bal" style={{"--k0": "69", "--k1": "33", "--k2": "43", "--k3": "2", "--k4": "4", "--k5": "1", "--k6": "1", "--k7": "2", "--k8": "2", "--k9": "5", "--k10": "11", "--k11": "37", "--k12": "1", "--k13": "6", "--k14": "1", "--k15": "3", "--k16": "27", "--k17": "17"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10187" aria-label="Select Mrs Kavita Ranjan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10187" data-leads-to="RS-07">{"FK-10187"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10187" data-leads-to="FD-07-1">{"Mrs Kavita Ranjan"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"406"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"503"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"404"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"3 × PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 20 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Thu 22 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹67,808.22"}</span>
                        </td>
                        <td className="dt__td" data-label="Pending postings" data-m="">{"1 not posted Minibar – room 503"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹45,000 HDFC-01"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"0 / 6 keys back"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Not eligible"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6082492516"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"Vande Bharat 20634 · TVC → Ernakulam Jn 12:35 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-15-check-out-settlement/#FK-10187" data-leads-to="FD-15">{"Check-out"}</a>
                          <a className="btn btn--xs" href="#FD-P18-FK-10187" title="Late check-out (FD-P18)">{"Late C/O"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1022 rt-GDLX ag-self-booking ss-in xe" style={{"--k0": "70", "--k1": "68", "--k2": "23", "--k3": "1", "--k4": "5", "--k5": "1", "--k6": "1", "--k7": "1", "--k8": "2", "--k9": "5", "--k10": "11", "--k11": "1", "--k12": "2", "--k13": "1", "--k14": "2", "--k15": "2", "--k16": "36", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10193" aria-label="Select Mrs Sindhu Wilson" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10193" data-leads-to="RS-07">{"FK-10193"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10193" data-leads-to="FD-07-1">{"Mrs Sindhu Wilson"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"216"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"305"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"2 × GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 21 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Thu 22 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-label="Pending postings" data-w2="" data-m="">{"None"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹10,000 HDFC-01"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 / 4 keys back"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Eligible"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7025913425"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-15-check-out-settlement/#FK-10193" data-leads-to="FD-15">{"Check-out"}</a>
                          <a className="btn btn--xs" href="#FD-P18-FK-10193" title="Late check-out (FD-P18)">{"Late C/O"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1023 rt-GDLX ag-self-booking ss-in bal" style={{"--k0": "1", "--k1": "29", "--k2": "6", "--k3": "4", "--k4": "4", "--k5": "2", "--k6": "1", "--k7": "3", "--k8": "2", "--k9": "3", "--k10": "11", "--k11": "11", "--k12": "3", "--k13": "7", "--k14": "2", "--k15": "1", "--k16": "32", "--k17": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10002" aria-label="Select Mrs Jyoti Jatin" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10002" data-leads-to="RS-07">{"FK-10002"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10002" data-leads-to="FD-07-1">{"Mrs Jyoti Jatin"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"107"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 20 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 23 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-AP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹15,238.80"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹50,000 · paid ₹20,000"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6099291524"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"IX 434 · SHJ → COK 07:55 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10002" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10002" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1023 rt-PDLX ag-self-booking ss-in" style={{"--k0": "5", "--k1": "49", "--k2": "56", "--k3": "5", "--k4": "5", "--k5": "2", "--k6": "1", "--k7": "2", "--k8": "2", "--k9": "5", "--k10": "11", "--k11": "1", "--k12": "3", "--k13": "3", "--k14": "2", "--k15": "1", "--k16": "39", "--k17": "10"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10010" aria-label="Select Mrs Pooja Kunal" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10010" data-leads-to="RS-07">{"FK-10010"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10010" data-leads-to="FD-07-1">{"Mrs Pooja Kunal"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"507"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 21 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 23 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹20,000 · paid ₹24,074.36"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7043104410"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"QR 516 · DOH → COK 02:50"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10010" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10010" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1023 rt-GDLX ag-self-booking ss-in bal" style={{"--k0": "14", "--k1": "14", "--k2": "28", "--k3": "4", "--k4": "1", "--k5": "2", "--k6": "1", "--k7": "6", "--k8": "2", "--k9": "1", "--k10": "11", "--k11": "18", "--k12": "3", "--k13": "4", "--k14": "2", "--k15": "1", "--k16": "11", "--k17": "6"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10031" aria-label="Select Ms Charlotte Fraser" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10031" data-leads-to="RS-07">{"FK-10031"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10031" data-leads-to="FD-07-1">{"Ms Charlotte Fraser"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"GB"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"303"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 17 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 23 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"6"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"ADV15"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹20,856.75"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹30,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+44 791012497"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"EK 530 · DXB → COK 03:15"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10031" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10031" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1023 rt-GDLX ag-self-booking ss-in" style={{"--k0": "25", "--k1": "43", "--k2": "32", "--k3": "4", "--k4": "2", "--k5": "2", "--k6": "1", "--k7": "5", "--k8": "2", "--k9": "1", "--k10": "11", "--k11": "1", "--k12": "3", "--k13": "5", "--k14": "2", "--k15": "1", "--k16": "69", "--k17": "11"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10061" aria-label="Select Ms Nandini Rishi" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10061" data-leads-to="RS-07">{"FK-10061"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10061" data-leads-to="FD-07-1">{"Ms Nandini Rishi"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"309"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sun 18 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 23 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"ADV15"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹40,000 · paid ₹35,306.45"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9074297248"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"QR 516 · DOH → COK 02:50 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10061" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10061" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1023 rt-GDLX ag-periyar-tours-travels ss-in bal" style={{"--k0": "27", "--k1": "12", "--k2": "26", "--k3": "4", "--k4": "5", "--k5": "2", "--k6": "1", "--k7": "2", "--k8": "2", "--k9": "2", "--k10": "10", "--k11": "4", "--k12": "3", "--k13": "16", "--k14": "2", "--k15": "1", "--k16": "65", "--k17": "14"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10069" aria-label="Select Mr Biju George" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10069" data-leads-to="RS-07">{"FK-10069"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10069" data-leads-to="FD-07-1">{"Mr Biju George"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"301"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 21 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 23 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"AGENT"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Periyar Tours & Travels"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹1,753.50"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"– · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9026672375"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10069" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10069" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1023 rt-GDLX ag-makemytrip-goibibo ss-in bal" style={{"--k0": "42", "--k1": "30", "--k2": "31", "--k3": "4", "--k4": "1", "--k5": "2", "--k6": "1", "--k7": "6", "--k8": "2", "--k9": "4", "--k10": "8", "--k11": "33", "--k12": "3", "--k13": "10", "--k14": "2", "--k15": "1", "--k16": "33", "--k17": "10"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10105" aria-label="Select Ms Jyoti Kabir" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10105" data-leads-to="RS-07">{"FK-10105"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10105" data-leads-to="FD-07-1">{"Ms Jyoti Kabir"}</a>
                          <span className="arl-mk arl-mk--vip" title="VIP">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#star" />
                            </svg>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"306"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 17 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 23 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"6"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹55,135.30"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹70,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7013647341"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"QR 516 · DOH → COK 02:50"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10105" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10105" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1023 rt-GDLX ag-self-booking ss-in bal" style={{"--k0": "46", "--k1": "25", "--k2": "11", "--k3": "4", "--k4": "1", "--k5": "2", "--k6": "1", "--k7": "6", "--k8": "2", "--k9": "6", "--k10": "11", "--k11": "42", "--k12": "3", "--k13": "13", "--k14": "2", "--k15": "1", "--k16": "30", "--k17": "14"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10118" aria-label="Select Ms Isha Dhruv" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10118" data-leads-to="RS-07">{"FK-10118"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10118" data-leads-to="FD-07-1">{"Ms Isha Dhruv"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"115"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 17 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 23 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"6"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-MAP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹91,638.40"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹1,10,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6095350983"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10118" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10118" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1023 rt-GDLX ag-booking-com ss-in" style={{"--k0": "61", "--k1": "19", "--k2": "21", "--k3": "4", "--k4": "1", "--k5": "2", "--k6": "1", "--k7": "6", "--k8": "2", "--k9": "5", "--k10": "2", "--k11": "1", "--k12": "3", "--k13": "7", "--k14": "2", "--k15": "1", "--k16": "1", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10162" aria-label="Select Mr Ethan Anderson" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10162" data-leads-to="RS-07">{"FK-10162"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10162" data-leads-to="FD-07-1">{"Mr Ethan Anderson"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"CA"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"212"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 17 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 23 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"6"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹50,000 · paid ₹46,200"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+1 784882037"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10162" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10162" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1023 rt-GDLX ag-self-booking ss-in bal" style={{"--k0": "63", "--k1": "39", "--k2": "20", "--k3": "4", "--k4": "2", "--k5": "2", "--k6": "1", "--k7": "5", "--k8": "2", "--k9": "4", "--k10": "11", "--k11": "29", "--k12": "3", "--k13": "9", "--k14": "2", "--k15": "1", "--k16": "5", "--k17": "14"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10170" aria-label="Select Mr Marco Rossi" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10170" data-leads-to="RS-07">{"FK-10170"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10170" data-leads-to="FD-07-1">{"Mr Marco Rossi"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"IT"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"211"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sun 18 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 23 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹45,392.28"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹60,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+39 717183350"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10170" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10170" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1023 rt-PDLX ag-self-booking ss-in bal" style={{"--k0": "75", "--k1": "34", "--k2": "51", "--k3": "5", "--k4": "3", "--k5": "2", "--k6": "1", "--k7": "4", "--k8": "2", "--k9": "5", "--k10": "11", "--k11": "21", "--k12": "3", "--k13": "4", "--k14": "2", "--k15": "1", "--k16": "34", "--k17": "1"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10203" aria-label="Select Mrs Kavita Siddharth" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10203" data-leads-to="RS-07">{"FK-10203"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10203" data-leads-to="FD-07-1">{"Mrs Kavita Siddharth"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"417"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 19 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 23 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹23,743.65"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹30,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7016441324"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"6E 6312 · BLR → COK 08:40"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10203" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10203" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1023 rt-DLXS ag-booking-com ss-in" style={{"--k0": "85", "--k1": "28", "--k2": "61", "--k3": "3", "--k4": "5", "--k5": "2", "--k6": "1", "--k7": "2", "--k8": "2", "--k9": "4", "--k10": "2", "--k11": "1", "--k12": "3", "--k13": "4", "--k14": "2", "--k15": "1", "--k16": "56", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10232" aria-label="Select Mr Jithin Mathew" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10232" data-leads-to="RS-07">{"FK-10232"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10232" data-leads-to="FD-07-1">{"Mr Jithin Mathew"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"514"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 21 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 23 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹30,000 · paid ₹34,220"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8033431744"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10232" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10232" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1023 rt-PDLX ag-expedia ss-not bal" style={{"--k0": "18", "--k1": "17", "--k2": "38", "--k3": "2", "--k4": "6", "--k5": "2", "--k6": "1", "--k7": "1", "--k8": "1", "--k9": "4", "--k10": "5", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "4", "--k15": "1", "--k16": "75", "--k17": "4"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10039" aria-label="Select Mr Dileep Pranav" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07">{"FK-10039"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0347" data-leads-to="RS-18">{"Mr Dileep Pranav"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"317"}</span>
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"411"}</span>
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"412"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"3 × PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 23 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Expedia"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"6 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9086966722"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"AI 681 · BOM → COK 19:30"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1023 rt-PDLX ag-booking-com ss-not bal" style={{"--k0": "80", "--k1": "72", "--k2": "34", "--k3": "5", "--k4": "6", "--k5": "2", "--k6": "1", "--k7": "1", "--k8": "1", "--k9": "4", "--k10": "2", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "78", "--k17": "14"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10216" aria-label="Select Mrs Swathi Sahil" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07">{"FK-10216"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0017" data-leads-to="RS-18">{"Mrs Swathi Sahil"}</a>
                          <span className="arl-mk arl-mk--vip" title="VIP">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#star" />
                            </svg>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"311"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 23 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9095851502"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1024 rt-GDLX ag-self-booking ss-in bal" style={{"--k0": "4", "--k1": "1", "--k2": "25", "--k3": "2", "--k4": "2", "--k5": "3", "--k6": "1", "--k7": "6", "--k8": "2", "--k9": "5", "--k10": "11", "--k11": "41", "--k12": "3", "--k13": "13", "--k14": "4", "--k15": "1", "--k16": "57", "--k17": "14"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10008" aria-label="Select Mr Ajay Jatin" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10008" data-leads-to="RS-07">{"FK-10008"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10008" data-leads-to="FD-07-1">{"Mr Ajay Jatin"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"219"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"112"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"103"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"3 × GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sun 18 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sat 24 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"6"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹79,423.70"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹1,10,000 · paid ₹6,385"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"6 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8048156307"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10008" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10008" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1024 rt-GDLX ag-heritage-routes-travel ss-in" style={{"--k0": "23", "--k1": "46", "--k2": "4", "--k3": "4", "--k4": "3", "--k5": "3", "--k6": "1", "--k7": "5", "--k8": "2", "--k9": "2", "--k10": "6", "--k11": "46", "--k12": "3", "--k13": "16", "--k14": "2", "--k15": "1", "--k16": "81", "--k17": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10056" aria-label="Select Ms Noura Al Saud" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10056" data-leads-to="RS-07">{"FK-10056"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10056" data-leads-to="FD-07-1">{"Ms Noura Al Saud"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"SA"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"105"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 19 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sat 24 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"AGENT"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Heritage Routes Travel"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Billed"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"– · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+966 765835597"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"IX 434 · SHJ → COK 07:55"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10056" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10056" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1024 rt-PDLX rt-GDLX ag-self-booking ss-in bal" style={{"--k0": "36", "--k1": "67", "--k2": "57", "--k3": "6", "--k4": "2", "--k5": "3", "--k6": "1", "--k7": "6", "--k8": "2", "--k9": "4", "--k10": "11", "--k11": "38", "--k12": "3", "--k13": "13", "--k14": "3", "--k15": "1", "--k16": "55", "--k17": "2"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10097" aria-label="Select Ms Sindhu Rahman" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10097" data-leads-to="RS-07">{"FK-10097"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10097" data-leads-to="FD-07-1">{"Ms Sindhu Rahman"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"508"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"217"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX + GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sun 18 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sat 24 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"6"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹74,531.76"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹1,10,000 · paid ₹10,029"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"4 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8027791279"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"AI 512 · DEL → COK 11:05"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10097" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10097" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1024 rt-GDLX ag-booking-com ss-in" style={{"--k0": "38", "--k1": "34", "--k2": "14", "--k3": "4", "--k4": "2", "--k5": "3", "--k6": "1", "--k7": "6", "--k8": "2", "--k9": "5", "--k10": "2", "--k11": "1", "--k12": "3", "--k13": "5", "--k14": "2", "--k15": "1", "--k16": "59", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10101" aria-label="Select Ms Kavita Siddharth" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10101" data-leads-to="RS-07">{"FK-10101"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10101" data-leads-to="FD-07-1">{"Ms Kavita Siddharth"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"201"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sun 18 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sat 24 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"6"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹40,000 · paid ₹46,200"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8055709254"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10101" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10101" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1024 rt-PDLX ag-self-booking ss-in bal" style={{"--k0": "59", "--k1": "9", "--k2": "55", "--k3": "1", "--k4": "1", "--k5": "3", "--k6": "1", "--k7": "7", "--k8": "2", "--k9": "4", "--k10": "11", "--k11": "44", "--k12": "3", "--k13": "12", "--k14": "3", "--k15": "1", "--k16": "38", "--k17": "6"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10159" aria-label="Select Dr Ayesha Chirag" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10159" data-leads-to="RS-07">{"FK-10159"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10159" data-leads-to="FD-07-1">{"Dr Ayesha Chirag"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"506"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"318"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"2 × PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 17 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sat 24 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"7"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹1,30,610.20"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹1,00,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"4 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7042582560"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"EK 530 · DXB → COK 03:15"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10159" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10159" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1024 rt-GDLX ag-coir-craft-industries ss-in bal" style={{"--k0": "62", "--k1": "27", "--k2": "9", "--k3": "4", "--k4": "4", "--k5": "3", "--k6": "1", "--k7": "4", "--k8": "2", "--k9": "8", "--k10": "3", "--k11": "4", "--k12": "3", "--k13": "16", "--k14": "2", "--k15": "1", "--k16": "54", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10165" aria-label="Select Mrs Isha Vihaan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10165" data-leads-to="RS-07">{"FK-10165"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10165" data-leads-to="FD-07-1">{"Mrs Isha Vihaan"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"113"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 20 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sat 24 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CORP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Coir Craft Industries"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹1,753.50"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"– · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8024152338"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10165" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10165" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1024 rt-PDLX ag-agoda ss-in bal" style={{"--k0": "73", "--k1": "47", "--k2": "46", "--k3": "5", "--k4": "4", "--k5": "3", "--k6": "1", "--k7": "4", "--k8": "2", "--k9": "4", "--k10": "1", "--k11": "17", "--k12": "3", "--k13": "4", "--k14": "2", "--k15": "1", "--k16": "10", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10200" aria-label="Select Mr Oliver Hughes" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10200" data-leads-to="RS-07">{"FK-10200"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10200" data-leads-to="FD-07-1">{"Mr Oliver Hughes"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"GB"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"409"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 20 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sat 24 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Agoda"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹20,694.84"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹30,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+44 787827462"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10200" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10200" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1024 rt-GDLX ag-booking-com ss-not bal" style={{"--k0": "8", "--k1": "16", "--k2": "2", "--k3": "4", "--k4": "6", "--k5": "3", "--k6": "1", "--k7": "2", "--k8": "1", "--k9": "4", "--k10": "2", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "58", "--k17": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10015" aria-label="Select Mr Dileep Kurian" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07">{"FK-10015"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0337" data-leads-to="RS-18">{"Mr Dileep Kurian"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"102"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sat 24 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8052147906"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"IX 434 · SHJ → COK 07:55 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1024 rt-GDLX ag-self-booking ss-not bal" style={{"--k0": "35", "--k1": "22", "--k2": "27", "--k3": "1", "--k4": "6", "--k5": "3", "--k6": "1", "--k7": "2", "--k8": "1", "--k9": "4", "--k10": "11", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "3", "--k15": "1", "--k16": "15", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10096" aria-label="Select Mr Hans Mueller" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10096" data-leads-to="RS-07">{"FK-10096"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0108" data-leads-to="RS-18">{"Mr Hans Mueller"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"DE"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"302"}</span>
                            <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"111"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"2 × GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sat 24 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"4 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+49 782572599"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10096" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1024 rt-PDLX ag-self-booking ss-not bal" style={{"--k0": "74", "--k1": "31", "--k2": "60", "--k3": "5", "--k4": "6", "--k5": "3", "--k6": "1", "--k7": "2", "--k8": "1", "--k9": "4", "--k10": "11", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "53", "--k17": "6"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10201" aria-label="Select Mr Karthik Jatin" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10201" data-leads-to="RS-07">{"FK-10201"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0013" data-leads-to="RS-18">{"Mr Karthik Jatin"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"512"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sat 24 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8017357828"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"EK 530 · DXB → COK 03:15"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10201" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-DLXS ag-willingdon-logistics-llp ss-in bal" style={{"--k0": "13", "--k1": "57", "--k2": "62", "--k3": "3", "--k4": "2", "--k5": "4", "--k6": "1", "--k7": "7", "--k8": "2", "--k9": "8", "--k10": "17", "--k11": "7", "--k12": "3", "--k13": "16", "--k14": "2", "--k15": "1", "--k16": "48", "--k17": "15"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10029" aria-label="Select Mrs Rekha Krish" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10029" data-leads-to="RS-07">{"FK-10029"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10029" data-leads-to="FD-07-1">{"Mrs Rekha Krish"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"515"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sun 18 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"7"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CORP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Willingdon Logistics LLP"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹6,419.20"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"– · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7080613480"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"UK 879 · BOM → COK 13:20 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10029" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10029" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-GDLX ag-easemytrip ss-in bal" style={{"--k0": "17", "--k1": "53", "--k2": "8", "--k3": "2", "--k4": "3", "--k5": "4", "--k6": "1", "--k7": "6", "--k8": "2", "--k9": "4", "--k10": "4", "--k11": "43", "--k12": "3", "--k13": "14", "--k14": "4", "--k15": "1", "--k16": "61", "--k17": "2"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10035" aria-label="Select Mrs Priya Kabir" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10035" data-leads-to="RS-07">{"FK-10035"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10035" data-leads-to="FD-07-1">{"Mrs Priya Kabir"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OD" title="Occupied dirty">{"110"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"119"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"109"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"3 × GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 19 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"6"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"EaseMyTrip"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹1,11,813.38"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹1,40,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"6 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8078585932"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"AI 512 · DEL → COK 11:05"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10035" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10035" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-DLXS ag-techpark-kochi-systems ss-in bal" style={{"--k0": "19", "--k1": "42", "--k2": "63", "--k3": "3", "--k4": "4", "--k5": "4", "--k6": "1", "--k7": "5", "--k8": "2", "--k9": "8", "--k10": "15", "--k11": "6", "--k12": "3", "--k13": "16", "--k14": "2", "--k15": "1", "--k16": "60", "--k17": "16"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10042" aria-label="Select Ms Nandini Jatin" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10042" data-leads-to="RS-07">{"FK-10042"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10042" data-leads-to="FD-07-1">{"Ms Nandini Jatin"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"516"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 20 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CORP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"TechPark Kochi Systems"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹5,253.50"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"– · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8075690925"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"Vande Bharat 20634 · TVC → Ernakulam Jn 12:35"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10042" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10042" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-PDLX ag-booking-com ss-in" style={{"--k0": "20", "--k1": "34", "--k2": "41", "--k3": "5", "--k4": "1", "--k5": "4", "--k6": "1", "--k7": "8", "--k8": "2", "--k9": "4", "--k10": "2", "--k11": "1", "--k12": "3", "--k13": "11", "--k14": "2", "--k15": "1", "--k16": "34", "--k17": "1"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10048" aria-label="Select Mrs Kavita Siddharth" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10048" data-leads-to="RS-07">{"FK-10048"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10048" data-leads-to="FD-07-1">{"Mrs Kavita Siddharth"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"402"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 17 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"8"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹80,000 · paid ₹83,062.56"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7016441324"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"6E 2148 · MAA → COK 15:45"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10048" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10048" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-GDLX ag-self-booking ss-in bal" style={{"--k0": "21", "--k1": "20", "--k2": "10", "--k3": "4", "--k4": "4", "--k5": "4", "--k6": "1", "--k7": "5", "--k8": "2", "--k9": "4", "--k10": "11", "--k11": "12", "--k12": "3", "--k13": "5", "--k14": "2", "--k15": "1", "--k16": "82", "--k17": "1"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10050" aria-label="Select Mrs Fatima Al Mansoori" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10050" data-leads-to="RS-07">{"FK-10050"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10050" data-leads-to="FD-07-1">{"Mrs Fatima Al Mansoori"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"AE"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"114"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 20 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹15,908.64"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹40,000 · paid ₹9,439"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+971 705478355"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"6E 6312 · BLR → COK 08:40"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10050" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10050" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-GDLX ag-agoda ss-in" style={{"--k0": "24", "--k1": "62", "--k2": "3", "--k3": "4", "--k4": "3", "--k5": "4", "--k6": "1", "--k7": "6", "--k8": "2", "--k9": "5", "--k10": "1", "--k11": "1", "--k12": "3", "--k13": "5", "--k14": "2", "--k15": "1", "--k16": "51", "--k17": "3"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10058" aria-label="Select Mr Shibu Krish" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10058" data-leads-to="RS-07">{"FK-10058"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10058" data-leads-to="FD-07-1">{"Mr Shibu Krish"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"104"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 19 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"6"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Agoda"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹40,000 · paid ₹46,584.70"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8013760939"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"AI 512 · DEL → COK 11:05 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10058" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10058" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-GDLX ag-self-booking ss-in bal" style={{"--k0": "30", "--k1": "7", "--k2": "15", "--k3": "4", "--k4": "1", "--k5": "4", "--k6": "1", "--k7": "8", "--k8": "2", "--k9": "5", "--k10": "11", "--k11": "24", "--k12": "3", "--k13": "9", "--k14": "2", "--k15": "1", "--k16": "25", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10084" aria-label="Select Dr Aswathy Vijay" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10084" data-leads-to="RS-07">{"FK-10084"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10084" data-leads-to="FD-07-1">{"Dr Aswathy Vijay"}</a>
                          <span className="arl-mk arl-mk--vip" title="VIP">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#star" />
                            </svg>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"202"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 17 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"8"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹28,839.25"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹60,000 · paid ₹15,000"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6064731802"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10084" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10084" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-GDLX ag-self-booking ss-in bal" style={{"--k0": "40", "--k1": "52", "--k2": "33", "--k3": "4", "--k4": "1", "--k5": "4", "--k6": "1", "--k7": "8", "--k8": "2", "--k9": "4", "--k10": "11", "--k11": "32", "--k12": "3", "--k13": "10", "--k14": "2", "--k15": "1", "--k16": "42", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10103" aria-label="Select Mr Prasad Pavan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10103" data-leads-to="RS-07">{"FK-10103"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10103" data-leads-to="FD-07-1">{"Mr Prasad Pavan"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OD" title="Occupied dirty">{"310"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 17 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"8"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹52,457.40"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹70,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7053317435"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10103" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10103" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-PDLX ag-self-booking ss-in" style={{"--k0": "43", "--k1": "42", "--k2": "36", "--k3": "5", "--k4": "5", "--k5": "4", "--k6": "1", "--k7": "4", "--k8": "2", "--k9": "4", "--k10": "11", "--k11": "1", "--k12": "3", "--k13": "4", "--k14": "2", "--k15": "1", "--k16": "60", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10106" aria-label="Select Ms Nandini Jatin" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10106" data-leads-to="RS-07">{"FK-10106"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10106" data-leads-to="FD-07-1">{"Ms Nandini Jatin"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"313"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 21 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹30,000 · paid ₹40,000"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8075690925"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10106" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10106" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-GDLX ag-makemytrip-goibibo ss-in bal" style={{"--k0": "54", "--k1": "47", "--k2": "29", "--k3": "4", "--k4": "4", "--k5": "4", "--k6": "1", "--k7": "5", "--k8": "2", "--k9": "4", "--k10": "8", "--k11": "19", "--k12": "3", "--k13": "4", "--k14": "2", "--k15": "1", "--k16": "9", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10143" aria-label="Select Mr Oliver Hughes" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10143" data-leads-to="RS-07">{"FK-10143"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10143" data-leads-to="FD-07-1">{"Mr Oliver Hughes"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"GB"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"304"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 20 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹21,166.84"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹30,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+44 704239286"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10143" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10143" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-PDLX ag-coir-craft-industries ss-in bal" style={{"--k0": "60", "--k1": "35", "--k2": "45", "--k3": "5", "--k4": "1", "--k5": "4", "--k6": "1", "--k7": "8", "--k8": "2", "--k9": "8", "--k10": "3", "--k11": "3", "--k12": "3", "--k13": "16", "--k14": "2", "--k15": "1", "--k16": "44", "--k17": "2"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10161" aria-label="Select Ms Lakshmi Mathew" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10161" data-leads-to="RS-07">{"FK-10161"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10161" data-leads-to="FD-07-1">{"Ms Lakshmi Mathew"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"408"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 17 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"8"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CORP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Coir Craft Industries"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹920.40"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"– · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7075512688"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"AI 512 · DEL → COK 11:05"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10161" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10161" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-PDLX ag-expedia ss-in" style={{"--k0": "68", "--k1": "37", "--k2": "42", "--k3": "1", "--k4": "2", "--k5": "4", "--k6": "1", "--k7": "7", "--k8": "2", "--k9": "5", "--k10": "5", "--k11": "1", "--k12": "3", "--k13": "11", "--k14": "3", "--k15": "1", "--k16": "2", "--k17": "17"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10180" aria-label="Select Mr Luc Moreau" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10180" data-leads-to="RS-07">{"FK-10180"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10180" data-leads-to="FD-07-1">{"Mr Luc Moreau"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"FR"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"403"}</span>
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"509"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"2 × PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sun 18 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"7"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Expedia"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-m="">{"₹80,000 · paid ₹1,21,647.62"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"4 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+33 715467367"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"Vande Bharat 20634 · TVC → Ernakulam Jn 12:35 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10180" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10180" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-GDLX ag-trip-com ss-in bal" style={{"--k0": "76", "--k1": "5", "--k2": "24", "--k3": "4", "--k4": "4", "--k5": "4", "--k6": "1", "--k7": "5", "--k8": "2", "--k9": "4", "--k10": "16", "--k11": "16", "--k12": "3", "--k13": "4", "--k14": "2", "--k15": "1", "--k16": "46", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10205" aria-label="Select Dr Anjali Rahman" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10205" data-leads-to="RS-07">{"FK-10205"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10205" data-leads-to="FD-07-1">{"Dr Anjali Rahman"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"218"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 20 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Trip.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹19,822.64"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹30,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7079210322"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10205" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10205" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-GDLX ag-self-booking ss-not" style={{"--k0": "28", "--k1": "65", "--k2": "7", "--k3": "4", "--k4": "6", "--k5": "4", "--k6": "1", "--k7": "3", "--k8": "1", "--k9": "7", "--k10": "11", "--k11": "1", "--k12": "3", "--k13": "3", "--k14": "2", "--k15": "1", "--k16": "71", "--k17": "7"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10074" aria-label="Select Mrs Shruti Shaan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10074" data-leads-to="RS-07">{"FK-10074"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0183" data-leads-to="RS-18">{"Mrs Shruti Shaan"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"108"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CLUB"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹20,000 · paid ₹7,558.95"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9076092446"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"EK 530 · DXB → COK 03:15 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10074" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-PDLX ag-self-booking ss-not bal" style={{"--k0": "56", "--k1": "21", "--k2": "48", "--k3": "5", "--k4": "6", "--k5": "4", "--k6": "1", "--k7": "3", "--k8": "1", "--k9": "3", "--k10": "11", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "22", "--k17": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10146" aria-label="Select Mr Ganesh Mihir" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07">{"FK-10146"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0299" data-leads-to="RS-18">{"Mr Ganesh Mihir"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"414"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-AP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6046881212"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"IX 434 · SHJ → COK 07:55"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-GDLX ag-self-booking ss-not bal" style={{"--k0": "71", "--k1": "60", "--k2": "13", "--k3": "4", "--k4": "7", "--k5": "4", "--k6": "1", "--k7": "1", "--k8": "3", "--k9": "4", "--k10": "11", "--k11": "8", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "77", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10194" aria-label="Select Mr Sandeep Shaan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10194" data-leads-to="RS-07">{"FK-10194"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0377" data-leads-to="RS-18">{"Mr Sandeep Shaan"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--none" title="Room allocated">{"117"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 24 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹10,382.82"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9092663957"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10194" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1025 rt-GDLX ag-southern-skies-travel ss-not bal" style={{"--k0": "87", "--k1": "54", "--k2": "17", "--k3": "4", "--k4": "6", "--k5": "4", "--k6": "1", "--k7": "3", "--k8": "1", "--k9": "2", "--k10": "12", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "24", "--k17": "14"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10239" aria-label="Select Mr Rahul George" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10239" data-leads-to="RS-07">{"FK-10239"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0197" data-leads-to="RS-18">{"Mr Rahul George"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"205"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 25 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"AGENT"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Southern Skies Travel"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6063768961"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10239" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1026 rt-GDLX ag-makemytrip-goibibo ss-in bal" style={{"--k0": "6", "--k1": "2", "--k2": "12", "--k3": "4", "--k4": "3", "--k5": "5", "--k6": "1", "--k7": "7", "--k8": "2", "--k9": "4", "--k10": "8", "--k11": "2", "--k12": "3", "--k13": "5", "--k14": "2", "--k15": "1", "--k16": "62", "--k17": "14"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10011" aria-label="Select Mr Amit Bijoy" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10011" data-leads-to="RS-07">{"FK-10011"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10011" data-leads-to="FD-07-1">{"Mr Amit Bijoy"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"116"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 19 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Mon 26 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"7"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹15.66"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹40,000 · paid ₹30,000"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8079085485"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10011" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10011" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1026 rt-PDLX ag-trip-com ss-in bal" style={{"--k0": "11", "--k1": "15", "--k2": "53", "--k3": "5", "--k4": "1", "--k5": "5", "--k6": "1", "--k7": "9", "--k8": "2", "--k9": "4", "--k10": "16", "--k11": "36", "--k12": "3", "--k13": "11", "--k14": "2", "--k15": "1", "--k16": "4", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10027" aria-label="Select Dr Claire Dubois" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10027" data-leads-to="RS-07">{"FK-10027"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10027" data-leads-to="FD-07-1">{"Dr Claire Dubois"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"FR"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"504"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 17 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Mon 26 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"9"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Trip.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹60,594.10"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹80,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+33 779619175"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10027" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10027" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1026 rt-GDLX ag-makemytrip-goibibo ss-in" style={{"--k0": "15", "--k1": "18", "--k2": "19", "--k3": "4", "--k4": "3", "--k5": "5", "--k6": "1", "--k7": "7", "--k8": "2", "--k9": "5", "--k10": "8", "--k11": "1", "--k12": "3", "--k13": "4", "--k14": "2", "--k15": "1", "--k16": "13", "--k17": "14"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10033" aria-label="Select Ms Elsa Lindberg" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10033" data-leads-to="RS-07">{"FK-10033"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10033" data-leads-to="FD-07-1">{"Ms Elsa Lindberg"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"SE"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"208"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 19 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Mon 26 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"7"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹30,000 · paid ₹53,761.05"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+46 799808098"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10033" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10033" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1026 rt-GDLX ag-self-booking ss-in bal" style={{"--k0": "29", "--k1": "59", "--k2": "1", "--k3": "4", "--k4": "5", "--k5": "5", "--k6": "1", "--k7": "5", "--k8": "2", "--k9": "5", "--k10": "11", "--k11": "9", "--k12": "3", "--k13": "3", "--k14": "2", "--k15": "1", "--k16": "79", "--k17": "16"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10082" aria-label="Select Mr Rohit Neil" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10082" data-leads-to="RS-07">{"FK-10082"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10082" data-leads-to="FD-07-1">{"Mr Rohit Neil"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"101"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 21 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Mon 26 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹13,779.88"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹20,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9097563483"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"Vande Bharat 20634 · TVC → Ernakulam Jn 12:35"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10082" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10082" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1026 rt-PDLX ag-booking-com ss-in bal" style={{"--k0": "45", "--k1": "44", "--k2": "59", "--k3": "1", "--k4": "5", "--k5": "5", "--k6": "1", "--k7": "5", "--k8": "2", "--k9": "5", "--k10": "2", "--k11": "10", "--k12": "3", "--k13": "3", "--k14": "3", "--k15": "1", "--k16": "21", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10109" aria-label="Select Mr Naveen Chirag" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10109" data-leads-to="RS-07">{"FK-10109"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10109" data-leads-to="FD-07-1">{"Mr Naveen Chirag"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"511"}</span>
                            <span className="fd-rm fd-rm--OD" title="Occupied dirty">{"410"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"2 × PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 21 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Mon 26 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹13,866.25"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹20,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"4 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6045983550"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10109" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10109" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1026 rt-PDLX ag-self-booking ss-in bal" style={{"--k0": "47", "--k1": "10", "--k2": "44", "--k3": "5", "--k4": "3", "--k5": "5", "--k6": "1", "--k7": "7", "--k8": "2", "--k9": "7", "--k10": "11", "--k11": "20", "--k12": "3", "--k13": "5", "--k14": "2", "--k15": "1", "--k16": "64", "--k17": "16"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10120" aria-label="Select Ms Ayesha Sahil" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10120" data-leads-to="RS-07">{"FK-10120"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10120" data-leads-to="FD-07-1">{"Ms Ayesha Sahil"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"407"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 19 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Mon 26 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"7"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CLUB"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹22,181.46"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹40,000 · paid ₹9,026"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8088534394"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"Vande Bharat 20634 · TVC → Ernakulam Jn 12:35"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10120" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10120" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1026 rt-GDLX ag-makemytrip-goibibo ss-in" style={{"--k0": "52", "--k1": "48", "--k2": "22", "--k3": "4", "--k4": "3", "--k5": "5", "--k6": "1", "--k7": "7", "--k8": "2", "--k9": "5", "--k10": "8", "--k11": "1", "--k12": "3", "--k13": "4", "--k14": "2", "--k15": "1", "--k16": "83", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10140" aria-label="Select Mr Omar Al Farsi" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10140" data-leads-to="RS-07">{"FK-10140"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10140" data-leads-to="FD-07-1">{"Mr Omar Al Farsi"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"AE"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"213"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 19 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Mon 26 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"7"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹30,000 · paid ₹49,980"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+971 760705120"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10140" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10140" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1026 rt-PDLX ag-booking-com ss-in bal" style={{"--k0": "55", "--k1": "61", "--k2": "58", "--k3": "5", "--k4": "3", "--k5": "5", "--k6": "1", "--k7": "7", "--k8": "2", "--k9": "4", "--k10": "2", "--k11": "5", "--k12": "3", "--k13": "5", "--k14": "2", "--k15": "1", "--k16": "52", "--k17": "10"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10145" aria-label="Select Ms Sheela Nathan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10145" data-leads-to="RS-07">{"FK-10145"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10145" data-leads-to="FD-07-1">{"Ms Sheela Nathan"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OD" title="Occupied dirty">{"510"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 19 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Mon 26 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"7"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹2,077.82"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹40,000 · paid ₹25,000"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8016065073"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"QR 516 · DOH → COK 02:50"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10145" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10145" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1026 rt-PDLX ag-trip-com ss-in bal" style={{"--k0": "67", "--k1": "51", "--k2": "52", "--k3": "5", "--k4": "3", "--k5": "5", "--k6": "1", "--k7": "7", "--k8": "2", "--k9": "4", "--k10": "16", "--k11": "31", "--k12": "3", "--k13": "10", "--k14": "2", "--k15": "1", "--k16": "31", "--k17": "4"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10178" aria-label="Select Mr Prasad Manav" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10178" data-leads-to="RS-07">{"FK-10178"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10178" data-leads-to="FD-07-1">{"Mr Prasad Manav"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"501"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 19 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Mon 26 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"7"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--occupied">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#key" />
                            </svg>
                            {"In house"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Trip.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹51,274.46"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹70,000 · paid ₹0"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6098131867"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"AI 681 · BOM → COK 19:30"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/front-desk/fd-08-guest-folio/#FK-10178" data-leads-to="FD-08">{"Folio"}</a>
                          <a className="btn btn--xs" href="/front-desk/fd-10-extend-shorten-stay/#FK-10178" data-leads-to="FD-10" title="Extend or shorten the stay">{"Change stay"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1026 rt-PDLX ag-booking-com ss-not bal" style={{"--k0": "3", "--k1": "56", "--k2": "54", "--k3": "5", "--k4": "6", "--k5": "5", "--k6": "1", "--k7": "4", "--k8": "1", "--k9": "4", "--k10": "2", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "29", "--k17": "11"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10006" aria-label="Select Mr Ravi Kabir" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10006" data-leads-to="RS-07">{"FK-10006"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0289" data-leads-to="RS-18">{"Mr Ravi Kabir"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"505"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Mon 26 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6087734078"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"QR 516 · DOH → COK 02:50 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10006" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1026 rt-PRMS ag-self-booking ss-not bal" style={{"--k0": "7", "--k1": "8", "--k2": "64", "--k3": "7", "--k4": "6", "--k5": "5", "--k6": "1", "--k7": "4", "--k8": "1", "--k9": "4", "--k10": "11", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "37", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10013" aria-label="Select Mrs Athira Nirav" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07">{"FK-10013"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0232" data-leads-to="RS-18">{"Mrs Athira Nirav"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"517"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PRMS"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Mon 26 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7033724972"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1026 rt-PDLX ag-makemytrip-goibibo ss-not bal" style={{"--k0": "33", "--k1": "64", "--k2": "47", "--k3": "5", "--k4": "6", "--k5": "5", "--k6": "1", "--k7": "4", "--k8": "1", "--k9": "5", "--k10": "8", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "47", "--k17": "10"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10089" aria-label="Select Dr Shruti Manav" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07">{"FK-10089"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0353" data-leads-to="RS-18">{"Dr Shruti Manav"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"413"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Mon 26 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7079600624"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"QR 516 · DOH → COK 02:50"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1026 rt-PDLX ag-self-booking ss-not" style={{"--k0": "72", "--k1": "55", "--k2": "40", "--k3": "5", "--k4": "6", "--k5": "5", "--k6": "1", "--k7": "4", "--k8": "1", "--k9": "4", "--k10": "11", "--k11": "1", "--k12": "3", "--k13": "3", "--k14": "2", "--k15": "1", "--k16": "66", "--k17": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10197" aria-label="Select Mr Rahul Philip" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10197" data-leads-to="RS-07">{"FK-10197"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0280" data-leads-to="RS-18">{"Mr Rahul Philip"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"401"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Mon 26 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"₹0.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-label="Pre-auth / deposit" data-w2="" data-m="">{"₹20,000 · paid ₹9,202.82"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9030807261"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"IX 434 · SHJ → COK 07:55"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10197" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1027 rt-PDLX ag-self-booking ss-not bal" style={{"--k0": "10", "--k1": "35", "--k2": "35", "--k3": "5", "--k4": "6", "--k5": "6", "--k6": "1", "--k7": "5", "--k8": "1", "--k9": "1", "--k10": "11", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "44", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10022" aria-label="Select Ms Lakshmi Mathew" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07">{"FK-10022"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0052" data-leads-to="RS-18">{"Ms Lakshmi Mathew"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"312"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Tue 27 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"ADV15"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7075512688"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1027 rt-GDLX ag-kerala-trails-travel-co ss-not bal" style={{"--k0": "16", "--k1": "50", "--k2": "5", "--k3": "4", "--k4": "6", "--k5": "6", "--k6": "1", "--k7": "5", "--k8": "1", "--k9": "2", "--k10": "7", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "72", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10034" aria-label="Select Ms Pooja Neil" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10034" data-leads-to="RS-07">{"FK-10034"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0099" data-leads-to="RS-18">{"Ms Pooja Neil"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"106"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Tue 27 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"AGENT"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Kerala Trails Travel Co"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9078326259"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10034" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1027 rt-PDLX ag-self-booking ss-not bal" style={{"--k0": "26", "--k1": "38", "--k2": "37", "--k3": "5", "--k4": "6", "--k5": "6", "--k6": "1", "--k7": "5", "--k8": "1", "--k9": "4", "--k10": "11", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "8", "--k17": "12"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10067" aria-label="Select Mr Lukas Keller" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10067" data-leads-to="RS-07">{"FK-10067"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0210" data-leads-to="RS-18">{"Mr Lukas Keller"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"CH"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"314"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Tue 27 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+41 720811894"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"SG 3021 · HYD → COK 17:10"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10067" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1027 rt-GDLX ag-self-booking ss-not bal" style={{"--k0": "34", "--k1": "70", "--k2": "30", "--k3": "4", "--k4": "6", "--k5": "6", "--k6": "1", "--k7": "5", "--k8": "1", "--k9": "7", "--k10": "11", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "50", "--k17": "16"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10091" aria-label="Select Mr Srinivas Manav" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10091" data-leads-to="RS-07">{"FK-10091"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0359" data-leads-to="RS-18">{"Mr Srinivas Manav"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"305"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Tue 27 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CLUB"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7088495156"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"Vande Bharat 20634 · TVC → Ernakulam Jn 12:35"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10091" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1027 rt-GDLX ag-self-booking ss-not bal" style={{"--k0": "48", "--k1": "46", "--k2": "13", "--k3": "4", "--k4": "6", "--k5": "6", "--k6": "1", "--k7": "5", "--k8": "1", "--k9": "5", "--k10": "11", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "80", "--k17": "11"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10121" aria-label="Select Ms Noura Al Saud" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07">{"FK-10121"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0268" data-leads-to="RS-18">{"Ms Noura Al Saud"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"SA"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"117"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Tue 27 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+966 729059763"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"QR 516 · DOH → COK 02:50 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1027 rt-GDLX ag-makemytrip-goibibo ss-not bal" style={{"--k0": "86", "--k1": "23", "--k2": "16", "--k3": "4", "--k4": "6", "--k5": "6", "--k6": "1", "--k7": "5", "--k8": "1", "--k9": "4", "--k10": "8", "--k11": "48", "--k12": "3", "--k13": "17", "--k14": "2", "--k15": "1", "--k16": "73", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10233" aria-label="Select Mr Imran Dhruv" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07">{"FK-10233"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0247" data-leads-to="RS-18">{"Mr Imran Dhruv"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"203"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Tue 27 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#log-in" />
                            </svg>
                            {"Arrives today"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td dt__td--right" data-e="">
                          <span className="fd-money--due">{"–"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"2 keys issued"}</td>
                        <td className="dt__td" data-label="Express" data-w2="" data-m="">{"Check on the day"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9079967739"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1031 rt-GDLX ag-self-booking ss-not bal" style={{"--k0": "84", "--k1": "11", "--k2": "65", "--k3": "4", "--k4": "8", "--k5": "7", "--k6": "1", "--k7": "3", "--k8": "3", "--k9": "4", "--k10": "11", "--k11": "28", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "28", "--k17": "5"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10231" aria-label="Select Ms Ayesha Shaan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10231" data-leads-to="RS-07">{"FK-10231"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0135" data-leads-to="RS-18">{"Ms Ayesha Shaan"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 28 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sat 31 Oct"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹33,838.86"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6085656318"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"AI 681 · BOM → COK 19:30 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10231" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1103 rt-DLXS ag-self-booking ss-not bal" style={{"--k0": "12", "--k1": "74", "--k2": "65", "--k3": "3", "--k4": "9", "--k5": "8", "--k6": "1", "--k7": "5", "--k8": "3", "--k9": "4", "--k10": "11", "--k11": "39", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "35", "--k17": "1"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10028" aria-label="Select Mr Vishnu Uday" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10028" data-leads-to="RS-07">{"FK-10028"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0050" data-leads-to="RS-18">{"Mr Vishnu Uday"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 29 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Tue 3 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹75,880.50"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7021800323"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"6E 6312 · BLR → COK 08:40 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10028" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1103 rt-PDLX ag-sunrise-tours-india ss-not" style={{"--k0": "79", "--k1": "45", "--k2": "65", "--k3": "5", "--k4": "10", "--k5": "8", "--k6": "1", "--k7": "4", "--k8": "3", "--k9": "2", "--k10": "14", "--k11": "46", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "41", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10215" aria-label="Select Ms Nimisha Prem" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10215" data-leads-to="RS-07">{"FK-10215"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0106" data-leads-to="RS-18">{"Ms Nimisha Prem"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Fri 30 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Tue 3 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"AGENT"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Sunrise Tours India"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="arl-mute">{"Billed"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7052289196"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10215" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1103 rt-GDLX ag-self-booking ss-not bal" style={{"--k0": "81", "--k1": "46", "--k2": "65", "--k3": "4", "--k4": "11", "--k5": "8", "--k6": "1", "--k7": "3", "--k8": "3", "--k9": "4", "--k10": "11", "--k11": "14", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "80", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10217" aria-label="Select Ms Noura Al Saud" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10217" data-leads-to="RS-07">{"FK-10217"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0268" data-leads-to="RS-18">{"Ms Noura Al Saud"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"SA"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 31 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Tue 3 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹18,877.46"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+966 729059763"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10217" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1106 rt-DLXS ag-self-booking ss-not" style={{"--k0": "22", "--k1": "41", "--k2": "65", "--k3": "3", "--k4": "12", "--k5": "9", "--k6": "1", "--k7": "3", "--k8": "3", "--k9": "5", "--k10": "11", "--k11": "47", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "68", "--k17": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10054" aria-label="Select Ms Meera Rahman" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10054" data-leads-to="RS-07">{"FK-10054"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0102" data-leads-to="RS-18">{"Ms Meera Rahman"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 3 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 6 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9066221541"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"IX 434 · SHJ → COK 07:55 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10054" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1106 rt-DLXS ag-periyar-infotech-solutio ss-not" style={{"--k0": "64", "--k1": "63", "--k2": "65", "--k3": "3", "--k4": "12", "--k5": "9", "--k6": "1", "--k7": "3", "--k8": "3", "--k9": "8", "--k10": "9", "--k11": "46", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "76", "--k17": "6"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10171" aria-label="Select Mr Shibu Vijay" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10171" data-leads-to="RS-07">{"FK-10171"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0067" data-leads-to="RS-18">{"Mr Shibu Vijay"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 3 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 6 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CORP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-m="">{"Periyar Infotech Solutions"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="arl-mute">{"Billed"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9089287486"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"EK 530 · DXB → COK 03:15"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10171" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1106 rt-PDLX ag-agoda ss-not bal" style={{"--k0": "82", "--k1": "39", "--k2": "65", "--k3": "5", "--k4": "13", "--k5": "9", "--k6": "1", "--k7": "2", "--k8": "3", "--k9": "4", "--k10": "1", "--k11": "13", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "7", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10227" aria-label="Select Mr Marco Rossi" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10227" data-leads-to="RS-07">{"FK-10227"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0165" data-leads-to="RS-18">{"Mr Marco Rossi"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"IT"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 4 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 6 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Agoda"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹18,870.12"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+39 756785874"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10227" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1106 rt-DLXS ag-expedia ss-not" style={{"--k0": "83", "--k1": "24", "--k2": "65", "--k3": "3", "--k4": "12", "--k5": "9", "--k6": "1", "--k7": "3", "--k8": "3", "--k9": "4", "--k10": "5", "--k11": "47", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "18", "--k17": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10228" aria-label="Select Ms Irina Petrova" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10228" data-leads-to="RS-07">{"FK-10228"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0360" data-leads-to="RS-18">{"Ms Irina Petrova"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"RU"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 3 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 6 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Expedia"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+7 769846043"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"IX 434 · SHJ → COK 07:55"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10228" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1106 rt-PRMS ag-self-booking ss-not bal" style={{"--k0": "89", "--k1": "36", "--k2": "65", "--k3": "7", "--k4": "12", "--k5": "9", "--k6": "1", "--k7": "3", "--k8": "3", "--k9": "4", "--k10": "11", "--k11": "34", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "16", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10247" aria-label="Select Mr Liam Walker" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10247" data-leads-to="RS-07">{"FK-10247"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0121" data-leads-to="RS-18">{"Mr Liam Walker"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"AU"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PRMS"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 3 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 6 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹56,640.00"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+61 774837077"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10247" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1112 rt-GDLX ag-self-booking ss-not bal" style={{"--k0": "2", "--k1": "32", "--k2": "65", "--k3": "4", "--k4": "14", "--k5": "10", "--k6": "1", "--k7": "7", "--k8": "3", "--k9": "1", "--k10": "11", "--k11": "35", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "40", "--k17": "14"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10005" aria-label="Select Dr Kavita Dhruv" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10005" data-leads-to="RS-07">{"FK-10005"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0373" data-leads-to="RS-18">{"Dr Kavita Dhruv"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 5 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Thu 12 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"7"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"ADV15"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹57,465.59"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7043786133"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10005" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1112 rt-PDLX rt-GDLX ag-booking-com ss-not bal" style={{"--k0": "50", "--k1": "76", "--k2": "65", "--k3": "6", "--k4": "14", "--k5": "10", "--k6": "1", "--k7": "7", "--k8": "3", "--k9": "4", "--k10": "2", "--k11": "45", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "19", "--k17": "6"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10133" aria-label="Select Dr Yuki Tanaka" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10133" data-leads-to="RS-07">{"FK-10133"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0191" data-leads-to="RS-18">{"Dr Yuki Tanaka"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"JP"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX + GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 5 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Thu 12 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"7"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹1,39,931.48"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+81 796176487"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"EK 530 · DXB → COK 03:15"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10133" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1112 rt-GDLX ag-self-booking ss-not bal" style={{"--k0": "66", "--k1": "15", "--k2": "65", "--k3": "4", "--k4": "16", "--k5": "10", "--k6": "1", "--k7": "3", "--k8": "3", "--k9": "7", "--k10": "11", "--k11": "23", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "3", "--k17": "1"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10174" aria-label="Select Mrs Claire Dubois" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10174" data-leads-to="RS-07">{"FK-10174"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0256" data-leads-to="RS-18">{"Mrs Claire Dubois"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"FR"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 9 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Thu 12 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CLUB"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹26,777.12"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+33 724782631"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"6E 2148 · MAA → COK 15:45"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10174" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1113 rt-GDLX ag-self-booking ss-not bal" style={{"--k0": "77", "--k1": "71", "--k2": "65", "--k3": "4", "--k4": "15", "--k5": "11", "--k6": "1", "--k7": "5", "--k8": "3", "--k9": "4", "--k10": "11", "--k11": "27", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "74", "--k17": "14"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10206" aria-label="Select Mr Suresh George" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10206" data-leads-to="RS-07">{"FK-10206"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0027" data-leads-to="RS-18">{"Mr Suresh George"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sun 8 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 13 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹33,335.49"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9081372897"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10206" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1113 rt-DLXS ag-makemytrip-goibibo ss-not" style={{"--k0": "88", "--k1": "31", "--k2": "65", "--k3": "3", "--k4": "17", "--k5": "11", "--k6": "1", "--k7": "2", "--k8": "3", "--k9": "4", "--k10": "8", "--k11": "47", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "53", "--k17": "4"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10240" aria-label="Select Mr Karthik Jatin" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10240" data-leads-to="RS-07">{"FK-10240"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0013" data-leads-to="RS-18">{"Mr Karthik Jatin"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 11 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 13 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8017357828"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"AI 681 · BOM → COK 19:30"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10240" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1114 rt-PRMS ag-self-booking ss-not" style={{"--k0": "32", "--k1": "39", "--k2": "65", "--k3": "7", "--k4": "17", "--k5": "12", "--k6": "1", "--k7": "3", "--k8": "3", "--k9": "4", "--k10": "11", "--k11": "47", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "6", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10086" aria-label="Select Mr Marco Rossi" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10086" data-leads-to="RS-07">{"FK-10086"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0383" data-leads-to="RS-18">{"Mr Marco Rossi"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"IT"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PRMS"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 11 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sat 14 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+39 751143945"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10086" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1115 rt-PDLX ag-booking-com ss-not" style={{"--k0": "57", "--k1": "4", "--k2": "65", "--k3": "5", "--k4": "18", "--k5": "13", "--k6": "1", "--k7": "1", "--k8": "3", "--k9": "4", "--k10": "2", "--k11": "47", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "43", "--k17": "6"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10147" aria-label="Select Mrs Anitha Rahman" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10147" data-leads-to="RS-07">{"FK-10147"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0250" data-leads-to="RS-18">{"Mrs Anitha Rahman"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 14 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sun 15 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7075344230"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"EK 530 · DXB → COK 03:15"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10147" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1117 rt-GDLX ag-makemytrip-goibibo ss-not" style={{"--k0": "31", "--k1": "3", "--k2": "65", "--k3": "4", "--k4": "20", "--k5": "14", "--k6": "1", "--k7": "1", "--k8": "3", "--k9": "4", "--k10": "8", "--k11": "47", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "23", "--k17": "11"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10085" aria-label="Select Mr Amit Chirag" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10085" data-leads-to="RS-07">{"FK-10085"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0262" data-leads-to="RS-18">{"Mr Amit Chirag"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 16 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Tue 17 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6050175895"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"QR 516 · DOH → COK 02:50 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10085" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1118 rt-PDLX ag-booking-com ss-not" style={{"--k0": "37", "--k1": "75", "--k2": "65", "--k3": "5", "--k4": "19", "--k5": "15", "--k6": "1", "--k7": "3", "--k8": "3", "--k9": "4", "--k10": "2", "--k11": "47", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "17", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10100" aria-label="Select Mr Wei Tan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10100" data-leads-to="RS-07">{"FK-10100"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0010" data-leads-to="RS-18">{"Mr Wei Tan"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"SG"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sun 15 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Wed 18 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+65 760328823"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10100" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1119 rt-PDLX ag-makemytrip-goibibo ss-not" style={{"--k0": "9", "--k1": "69", "--k2": "65", "--k3": "5", "--k4": "21", "--k5": "16", "--k6": "1", "--k7": "2", "--k8": "3", "--k9": "4", "--k10": "8", "--k11": "47", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "67", "--k17": "7"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10016" aria-label="Select Ms Sreelakshmi Krish" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10016" data-leads-to="RS-07">{"FK-10016"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0346" data-leads-to="RS-18">{"Ms Sreelakshmi Krish"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 17 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Thu 19 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9050900032"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"EK 530 · DXB → COK 03:15 · pickup booked"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10016" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1119 rt-GDLX ag-booking-com ss-not bal" style={{"--k0": "51", "--k1": "13", "--k2": "65", "--k3": "4", "--k4": "18", "--k5": "16", "--k6": "1", "--k7": "5", "--k8": "3", "--k9": "5", "--k10": "2", "--k11": "30", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "26", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10139" aria-label="Select Mr Biju Joseph" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10139" data-leads-to="RS-07">{"FK-10139"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0201" data-leads-to="RS-18">{"Mr Biju Joseph"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 14 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Thu 19 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹49,329.90"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6078556607"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10139" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1120 rt-GDLX ag-spice-coast-journeys ss-not" style={{"--k0": "58", "--k1": "18", "--k2": "65", "--k3": "4", "--k4": "22", "--k5": "17", "--k6": "1", "--k7": "1", "--k8": "3", "--k9": "2", "--k10": "13", "--k11": "46", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "12", "--k17": "12"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10149" aria-label="Select Ms Elsa Lindberg" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10149" data-leads-to="RS-07">{"FK-10149"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0114" data-leads-to="RS-18">{"Ms Elsa Lindberg"}</a>
                          <span className="arl-mk" title="Foreign national – Form III departure report">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"SE"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 19 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Fri 20 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"AGENT"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Spice Coast Journeys"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="arl-mute">{"Billed"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+46 709160433"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"SG 3021 · HYD → COK 17:10"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10149" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="dd-1121 rt-GDLX ag-self-booking ss-not bal" style={{"--k0": "78", "--k1": "73", "--k2": "65", "--k3": "4", "--k4": "22", "--k5": "18", "--k6": "1", "--k7": "2", "--k8": "3", "--k9": "4", "--k10": "11", "--k11": "15", "--k12": "3", "--k13": "17", "--k14": "5", "--k15": "4", "--k16": "20", "--k17": "18"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10208" aria-label="Select Mr Unni Wilson" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10208" data-leads-to="RS-07">{"FK-10208"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0182" data-leads-to="RS-18">{"Mr Unni Wilson"}</a>
                        </td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-mute">{"Not allocated"}</span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 19 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">
                          <b>{"Sat 21 Nov"}</b>
                        </td>
                        <td className="dt__td" data-label="Check-out" data-w2="" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Stay status" data-w2="" data-s="">
                          <span className="pill pill--ooo">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Not checked in"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td dt__td--right" data-label="Balance" data-w2="" data-m="">
                          <span className="fd-money--due">{"₹19,821.64"}</span>
                        </td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td arl-ag" data-label="Keys · luggage" data-w2="" data-m="">{"Not checked in"}</td>
                        <td className="dt__td" data-e="">{"–"}</td>
                        <td className="dt__td dt__td--right c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6014463340"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10208" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="arl-foot">
                  <span className="arl-count">{"departures shown"}</span>
                  <span className="arl-hint">
                    <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#info" />
                    </svg>
                    {"Set "}
                    <b>{"Departure from / to"}</b>
                    {" under Filter to see later departures – guests in house and bookings not checked in yet. Click a column title to sort."}
                  </span>
                </p>
              </div>
              <div className="s-note">
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <span>
                  {"The balance is shown per window. "}
                  <strong>{"Express"}</strong>
                  {" is open to guests with a zero balance or a stay fully billed to a company / agent. Late check-outs keep the room until the approved time; the Room Board (FD-06) shows the room as due out until then. Check-out is not possible while a window has a balance (FDS-04)."}
                </span>
              </div>
              <div className="modal modal--lg" id="FD-P18-FK-10108" data-code="FD-P18" role="dialog" aria-modal="true" aria-labelledby="FD-P18-FK-10108-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-14-departures/#late-FK-10108" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P18-FK-10108-t">{"Late check-out – Ms Anna Schneider"}</h2>
                      <p className="modal__desc">{"Keeps the room until the requested time; the charge is posted to the folio."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-banner fd-banner--warn">
                      <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      <div className="fd-banner__t">
                        <strong>{"The room is needed for an arrival"}</strong>
                        {"room 205 is promised to Mr Rahul George (FK-10239) arriving tonight. A late check-out delays that check-in."}
                      </div>
                    </div>
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room"}</span>
                        <div className="fd-display">{"Ms Anna Schneider · room 205 · standard check-out 12:00"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f2">
                          {"Requested time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f2" type="time" name="time" required={true} min="12:30" max="18:00" defaultValue={"14:00"} />
                        <span className="field__hint">{"Not later than 18:00 (FDS-04) – after that a full night is charged"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Charge"}</span>
                        <div className="fd-display">{"50% of the room rate ₹6,401.00 = ₹3,200.50 + GST ₹160.02 (charge code LCO, slab FDS-04a)"}</div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f4">
                          <input id="f4" type="checkbox" role="switch" name="waive" />
                          <span className="sw__track" />
                          {"Waive the charge"}
                        </label>
                        <span className="field__hint">{"Within your limit with a reason; above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f5">{"Waiver reason"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f5" name="reason" defaultValue={""}>
                            <option value="" />
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required when waiving (FDS-19)"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room needed for arrival"}</span>
                        <div className="fd-display">{"room 205 is promised to Mr Rahul George (FK-10239) arriving tonight"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-FK-10108">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="cm-p04-FK-10108" data-code="CM-P04" role="dialog" aria-modal="true" aria-labelledby="cm-p04-FK-10108-t">
                <a className="modal__backdrop" href="#FD-P18-FK-10108" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/reservation/rs-20-approvals/" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="cm-p04-FK-10108-t">{"Request approval"}</h2>
                      <p className="modal__desc">{"This action is above your limit. The next approver is asked on screen; the request appears in Approvals (RS-20)."}</p>
                    </div>
                    <a className="modal__close" href="#FD-P18-FK-10108" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Action"}</span>
                        <div className="fd-display">{"Waive the late check-out charge"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Value"}</span>
                        <div className="fd-display">{"Ms Anna Schneider · FK-10108"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f9">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f9" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f10">{"Note"}</label>
                        <textarea className="field__input field__input--area" id="f10" name="note" maxLength="240" defaultValue={""} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Goes to"}</span>
                        <div className="fd-display">{"Front Office Manager (limits from FDS-22; escalates after 30 minutes)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FD-P18-FK-10108">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send request"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P18-FK-10104" data-code="FD-P18" role="dialog" aria-modal="true" aria-labelledby="FD-P18-FK-10104-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-14-departures/#late-FK-10104" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P18-FK-10104-t">{"Late check-out – Mr Amit Chirag"}</h2>
                      <p className="modal__desc">{"Keeps the room until the requested time; the charge is posted to the folio."}</p>
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
                        <span className="field__label">{"Guest / room"}</span>
                        <div className="fd-display">{"Mr Amit Chirag · room 207 · standard check-out 12:00"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f13">
                          {"Requested time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f13" type="time" name="time" required={true} min="12:30" max="18:00" defaultValue={"14:00"} />
                        <span className="field__hint">{"Not later than 18:00 (FDS-04) – after that a full night is charged"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Charge"}</span>
                        <div className="fd-display">{"50% of the room rate ₹6,559.00 = ₹3,279.50 + GST ₹163.98 (charge code LCO, slab FDS-04a)"}</div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f15">
                          <input id="f15" type="checkbox" role="switch" name="waive" />
                          <span className="sw__track" />
                          {"Waive the charge"}
                        </label>
                        <span className="field__hint">{"Within your limit with a reason; above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f16">{"Waiver reason"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f16" name="reason" defaultValue={""}>
                            <option value="" />
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required when waiving (FDS-19)"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room needed for arrival"}</span>
                        <div className="fd-display">{"No – the room is not assigned to an arrival today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-FK-10104">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="cm-p04-FK-10104" data-code="CM-P04" role="dialog" aria-modal="true" aria-labelledby="cm-p04-FK-10104-t">
                <a className="modal__backdrop" href="#FD-P18-FK-10104" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/reservation/rs-20-approvals/" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="cm-p04-FK-10104-t">{"Request approval"}</h2>
                      <p className="modal__desc">{"This action is above your limit. The next approver is asked on screen; the request appears in Approvals (RS-20)."}</p>
                    </div>
                    <a className="modal__close" href="#FD-P18-FK-10104" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Action"}</span>
                        <div className="fd-display">{"Waive the late check-out charge"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Value"}</span>
                        <div className="fd-display">{"Mr Amit Chirag · FK-10104"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f20">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f20" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f21">{"Note"}</label>
                        <textarea className="field__input field__input--area" id="f21" name="note" maxLength="240" defaultValue={""} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Goes to"}</span>
                        <div className="fd-display">{"Front Office Manager (limits from FDS-22; escalates after 30 minutes)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FD-P18-FK-10104">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send request"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P18-FK-10193" data-code="FD-P18" role="dialog" aria-modal="true" aria-labelledby="FD-P18-FK-10193-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-14-departures/#late-FK-10193" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P18-FK-10193-t">{"Late check-out – Mrs Sindhu Wilson"}</h2>
                      <p className="modal__desc">{"Keeps the room until the requested time; the charge is posted to the folio."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-banner fd-banner--warn">
                      <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      <div className="fd-banner__t">
                        <strong>{"The room is needed for an arrival"}</strong>
                        {"room 305 is promised to Mr Srinivas Manav (FK-10091) arriving tonight – waiting in the queue. A late check-out delays that check-in."}
                      </div>
                    </div>
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room"}</span>
                        <div className="fd-display">{"Mrs Sindhu Wilson · room 216, 305 · standard check-out 12:00"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f24">
                          {"Requested time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f24" type="time" name="time" required={true} min="12:30" max="18:00" defaultValue={"14:00"} />
                        <span className="field__hint">{"Not later than 18:00 (FDS-04) – after that a full night is charged"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Charge"}</span>
                        <div className="fd-display">{"50% of the room rate ₹12,802.00 = ₹6,401.00 + GST ₹320.05 (charge code LCO, slab FDS-04a)"}</div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f26">
                          <input id="f26" type="checkbox" role="switch" name="waive" />
                          <span className="sw__track" />
                          {"Waive the charge"}
                        </label>
                        <span className="field__hint">{"Within your limit with a reason; above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f27">{"Waiver reason"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f27" name="reason" defaultValue={""}>
                            <option value="" />
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required when waiving (FDS-19)"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room needed for arrival"}</span>
                        <div className="fd-display">{"room 305 is promised to Mr Srinivas Manav (FK-10091) arriving tonight – waiting in the queue"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-FK-10193">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="cm-p04-FK-10193" data-code="CM-P04" role="dialog" aria-modal="true" aria-labelledby="cm-p04-FK-10193-t">
                <a className="modal__backdrop" href="#FD-P18-FK-10193" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/reservation/rs-20-approvals/" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="cm-p04-FK-10193-t">{"Request approval"}</h2>
                      <p className="modal__desc">{"This action is above your limit. The next approver is asked on screen; the request appears in Approvals (RS-20)."}</p>
                    </div>
                    <a className="modal__close" href="#FD-P18-FK-10193" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Action"}</span>
                        <div className="fd-display">{"Waive the late check-out charge"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Value"}</span>
                        <div className="fd-display">{"Mrs Sindhu Wilson · FK-10193"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f31">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f31" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f32">{"Note"}</label>
                        <textarea className="field__input field__input--area" id="f32" name="note" maxLength="240" defaultValue={""} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Goes to"}</span>
                        <div className="fd-display">{"Front Office Manager (limits from FDS-22; escalates after 30 minutes)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FD-P18-FK-10193">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send request"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P18-FK-10102" data-code="FD-P18" role="dialog" aria-modal="true" aria-labelledby="FD-P18-FK-10102-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-14-departures/#late-FK-10102" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P18-FK-10102-t">{"Late check-out – Ms Remya Kurian"}</h2>
                      <p className="modal__desc">{"Keeps the room until the requested time; the charge is posted to the folio."}</p>
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
                        <span className="field__label">{"Guest / room"}</span>
                        <div className="fd-display">{"Ms Remya Kurian · room 319 · standard check-out 12:00"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f35">
                          {"Requested time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f35" type="time" name="time" required={true} min="12:30" max="18:00" defaultValue={"14:00"} />
                        <span className="field__hint">{"Not later than 18:00 (FDS-04) – after that a full night is charged"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Charge"}</span>
                        <div className="fd-display">{"50% of the room rate ₹6,901.00 = ₹3,450.50 + GST ₹172.52 (charge code LCO, slab FDS-04a)"}</div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f37">
                          <input id="f37" type="checkbox" role="switch" name="waive" />
                          <span className="sw__track" />
                          {"Waive the charge"}
                        </label>
                        <span className="field__hint">{"Within your limit with a reason; above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f38">{"Waiver reason"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f38" name="reason" defaultValue={""}>
                            <option value="" />
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required when waiving (FDS-19)"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room needed for arrival"}</span>
                        <div className="fd-display">{"No – the room is not assigned to an arrival today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-FK-10102">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="cm-p04-FK-10102" data-code="CM-P04" role="dialog" aria-modal="true" aria-labelledby="cm-p04-FK-10102-t">
                <a className="modal__backdrop" href="#FD-P18-FK-10102" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/reservation/rs-20-approvals/" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="cm-p04-FK-10102-t">{"Request approval"}</h2>
                      <p className="modal__desc">{"This action is above your limit. The next approver is asked on screen; the request appears in Approvals (RS-20)."}</p>
                    </div>
                    <a className="modal__close" href="#FD-P18-FK-10102" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Action"}</span>
                        <div className="fd-display">{"Waive the late check-out charge"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Value"}</span>
                        <div className="fd-display">{"Ms Remya Kurian · FK-10102"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f42">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f42" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f43">{"Note"}</label>
                        <textarea className="field__input field__input--area" id="f43" name="note" maxLength="240" defaultValue={""} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Goes to"}</span>
                        <div className="fd-display">{"Front Office Manager (limits from FDS-22; escalates after 30 minutes)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FD-P18-FK-10102">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send request"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P18-FK-10187" data-code="FD-P18" role="dialog" aria-modal="true" aria-labelledby="FD-P18-FK-10187-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-14-departures/#late-FK-10187" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P18-FK-10187-t">{"Late check-out – Mrs Kavita Ranjan"}</h2>
                      <p className="modal__desc">{"Keeps the room until the requested time; the charge is posted to the folio."}</p>
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
                        <span className="field__label">{"Guest / room"}</span>
                        <div className="fd-display">{"Mrs Kavita Ranjan · room 406, 503, 404 · standard check-out 12:00"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f46">
                          {"Requested time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f46" type="time" name="time" required={true} min="12:30" max="18:00" defaultValue={"14:00"} />
                        <span className="field__hint">{"Not later than 18:00 (FDS-04) – after that a full night is charged"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Charge"}</span>
                        <div className="fd-display">{"50% of the room rate ₹27,402.00 = ₹13,701.00 + GST ₹2,466.18 (charge code LCO, slab FDS-04a)"}</div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f48">
                          <input id="f48" type="checkbox" role="switch" name="waive" />
                          <span className="sw__track" />
                          {"Waive the charge"}
                        </label>
                        <span className="field__hint">{"Within your limit with a reason; above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f49">{"Waiver reason"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f49" name="reason" defaultValue={""}>
                            <option value="" />
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required when waiving (FDS-19)"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room needed for arrival"}</span>
                        <div className="fd-display">{"No – the room is not assigned to an arrival today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-FK-10187">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="cm-p04-FK-10187" data-code="CM-P04" role="dialog" aria-modal="true" aria-labelledby="cm-p04-FK-10187-t">
                <a className="modal__backdrop" href="#FD-P18-FK-10187" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/reservation/rs-20-approvals/" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="cm-p04-FK-10187-t">{"Request approval"}</h2>
                      <p className="modal__desc">{"This action is above your limit. The next approver is asked on screen; the request appears in Approvals (RS-20)."}</p>
                    </div>
                    <a className="modal__close" href="#FD-P18-FK-10187" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Action"}</span>
                        <div className="fd-display">{"Waive the late check-out charge"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Value"}</span>
                        <div className="fd-display">{"Mrs Kavita Ranjan · FK-10187"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f53">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f53" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f54">{"Note"}</label>
                        <textarea className="field__input field__input--area" id="f54" name="note" maxLength="240" defaultValue={""} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Goes to"}</span>
                        <div className="fd-display">{"Front Office Manager (limits from FDS-22; escalates after 30 minutes)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FD-P18-FK-10187">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send request"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P18-FK-10172" data-code="FD-P18" role="dialog" aria-modal="true" aria-labelledby="FD-P18-FK-10172-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-14-departures/#late-FK-10172" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P18-FK-10172-t">{"Late check-out – Ms Shruti Siddharth"}</h2>
                      <p className="modal__desc">{"Already approved until 15:00 – change it here."}</p>
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
                        <span className="field__label">{"Guest / room"}</span>
                        <div className="fd-display">{"Ms Shruti Siddharth · room 415, 316 · standard check-out 12:00"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f57">
                          {"Requested time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f57" type="time" name="time" required={true} min="12:30" max="18:00" defaultValue={"15:00"} />
                        <span className="field__hint">{"Not later than 18:00 (FDS-04) – after that a full night is charged"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Charge"}</span>
                        <div className="fd-display">{"50% of the room rate ₹17,102.00 = ₹8,551.00 + GST ₹1,539.18 (charge code LCO, slab FDS-04a)"}</div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f59">
                          <input id="f59" type="checkbox" role="switch" name="waive" />
                          <span className="sw__track" />
                          {"Waive the charge"}
                        </label>
                        <span className="field__hint">{"Within your limit with a reason; above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f60">{"Waiver reason"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f60" name="reason" defaultValue={""}>
                            <option value="" />
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required when waiving (FDS-19)"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room needed for arrival"}</span>
                        <div className="fd-display">{"No – the room is not assigned to an arrival today"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-FK-10172">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="cm-p04-FK-10172" data-code="CM-P04" role="dialog" aria-modal="true" aria-labelledby="cm-p04-FK-10172-t">
                <a className="modal__backdrop" href="#FD-P18-FK-10172" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/reservation/rs-20-approvals/" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="cm-p04-FK-10172-t">{"Request approval"}</h2>
                      <p className="modal__desc">{"This action is above your limit. The next approver is asked on screen; the request appears in Approvals (RS-20)."}</p>
                    </div>
                    <a className="modal__close" href="#FD-P18-FK-10172" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Action"}</span>
                        <div className="fd-display">{"Waive the late check-out charge"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Value"}</span>
                        <div className="fd-display">{"Ms Shruti Siddharth · FK-10172"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f64">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f64" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f65">{"Note"}</label>
                        <textarea className="field__input field__input--area" id="f65" name="note" maxLength="240" defaultValue={""} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Goes to"}</span>
                        <div className="fd-display">{"Front Office Manager (limits from FDS-22; escalates after 30 minutes)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FD-P18-FK-10172">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send request"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P18-FK-10123" data-code="FD-P18" role="dialog" aria-modal="true" aria-labelledby="FD-P18-FK-10123-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-14-departures/#late-FK-10123" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P18-FK-10123-t">{"Late check-out – Mrs Isha Neil"}</h2>
                      <p className="modal__desc">{"Keeps the room until the requested time; the charge is posted to the folio."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-banner fd-banner--warn">
                      <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      <div className="fd-banner__t">
                        <strong>{"The room is needed for an arrival"}</strong>
                        {"room 505 is promised to Mr Ravi Kabir (FK-10006) arriving tonight – waiting in the queue. A late check-out delays that check-in."}
                      </div>
                    </div>
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room"}</span>
                        <div className="fd-display">{"Mrs Isha Neil · room 416, 505 · standard check-out 12:00"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f68">
                          {"Requested time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f68" type="time" name="time" required={true} min="12:30" max="18:00" defaultValue={"14:00"} />
                        <span className="field__hint">{"Not later than 18:00 (FDS-04) – after that a full night is charged"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Charge"}</span>
                        <div className="fd-display">{"50% of the room rate ₹13,201.20 = ₹6,600.60 + GST ₹330.03 (charge code LCO, slab FDS-04a)"}</div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f70">
                          <input id="f70" type="checkbox" role="switch" name="waive" />
                          <span className="sw__track" />
                          {"Waive the charge"}
                        </label>
                        <span className="field__hint">{"Within your limit with a reason; above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f71">{"Waiver reason"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f71" name="reason" defaultValue={""}>
                            <option value="" />
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required when waiving (FDS-19)"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room needed for arrival"}</span>
                        <div className="fd-display">{"room 505 is promised to Mr Ravi Kabir (FK-10006) arriving tonight – waiting in the queue"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-FK-10123">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="cm-p04-FK-10123" data-code="CM-P04" role="dialog" aria-modal="true" aria-labelledby="cm-p04-FK-10123-t">
                <a className="modal__backdrop" href="#FD-P18-FK-10123" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/reservation/rs-20-approvals/" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="cm-p04-FK-10123-t">{"Request approval"}</h2>
                      <p className="modal__desc">{"This action is above your limit. The next approver is asked on screen; the request appears in Approvals (RS-20)."}</p>
                    </div>
                    <a className="modal__close" href="#FD-P18-FK-10123" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Action"}</span>
                        <div className="fd-display">{"Waive the late check-out charge"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Value"}</span>
                        <div className="fd-display">{"Mrs Isha Neil · FK-10123"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f75">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f75" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f76">{"Note"}</label>
                        <textarea className="field__input field__input--area" id="f76" name="note" maxLength="240" defaultValue={""} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Goes to"}</span>
                        <div className="fd-display">{"Front Office Manager (limits from FDS-22; escalates after 30 minutes)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FD-P18-FK-10123">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send request"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P18-FK-10142" data-code="FD-P18" role="dialog" aria-modal="true" aria-labelledby="FD-P18-FK-10142-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-14-departures/#late-FK-10142" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P18-FK-10142-t">{"Late check-out – Mrs Maya Mohan"}</h2>
                      <p className="modal__desc">{"Keeps the room until the requested time; the charge is posted to the folio."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-banner fd-banner--warn">
                      <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      <div className="fd-banner__t">
                        <strong>{"The room is needed for an arrival"}</strong>
                        {"room 517 is promised to Mrs Athira Nirav (FK-10013) arriving tonight. A late check-out delays that check-in."}
                      </div>
                    </div>
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room"}</span>
                        <div className="fd-display">{"Mrs Maya Mohan · room 517 · standard check-out 12:00"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f79">
                          {"Requested time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f79" type="time" name="time" required={true} min="12:30" max="18:00" defaultValue={"14:00"} />
                        <span className="field__hint">{"Not later than 18:00 (FDS-04) – after that a full night is charged"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Charge"}</span>
                        <div className="fd-display">{"50% of the room rate ₹22,099.00 = ₹11,049.50 + GST ₹1,988.91 (charge code LCO, slab FDS-04a)"}</div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f81">
                          <input id="f81" type="checkbox" role="switch" name="waive" />
                          <span className="sw__track" />
                          {"Waive the charge"}
                        </label>
                        <span className="field__hint">{"Within your limit with a reason; above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f82">{"Waiver reason"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f82" name="reason" defaultValue={""}>
                            <option value="" />
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required when waiving (FDS-19)"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room needed for arrival"}</span>
                        <div className="fd-display">{"room 517 is promised to Mrs Athira Nirav (FK-10013) arriving tonight"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-FK-10142">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="cm-p04-FK-10142" data-code="CM-P04" role="dialog" aria-modal="true" aria-labelledby="cm-p04-FK-10142-t">
                <a className="modal__backdrop" href="#FD-P18-FK-10142" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/reservation/rs-20-approvals/" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="cm-p04-FK-10142-t">{"Request approval"}</h2>
                      <p className="modal__desc">{"This action is above your limit. The next approver is asked on screen; the request appears in Approvals (RS-20)."}</p>
                    </div>
                    <a className="modal__close" href="#FD-P18-FK-10142" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Action"}</span>
                        <div className="fd-display">{"Waive the late check-out charge"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Value"}</span>
                        <div className="fd-display">{"Mrs Maya Mohan · FK-10142"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f86">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f86" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f87">{"Note"}</label>
                        <textarea className="field__input field__input--area" id="f87" name="note" maxLength="240" defaultValue={""} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Goes to"}</span>
                        <div className="fd-display">{"Front Office Manager (limits from FDS-22; escalates after 30 minutes)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FD-P18-FK-10142">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send request"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P18" data-code="FD-P18" role="dialog" aria-modal="true" aria-labelledby="FD-P18-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-14-departures/#late-FK-10108" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P18-t">{"Late check-out – Ms Anna Schneider"}</h2>
                      <p className="modal__desc">{"Keeps the room until the requested time; the charge is posted to the folio."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-banner fd-banner--warn">
                      <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#alert" />
                      </svg>
                      <div className="fd-banner__t">
                        <strong>{"The room is needed for an arrival"}</strong>
                        {"room 205 is promised to Mr Rahul George (FK-10239) arriving tonight. A late check-out delays that check-in."}
                      </div>
                    </div>
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Guest / room"}</span>
                        <div className="fd-display">{"Ms Anna Schneider · room 205 · standard check-out 12:00"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f90">
                          {"Requested time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f90" type="time" name="time" required={true} min="12:30" max="18:00" defaultValue={"14:00"} />
                        <span className="field__hint">{"Not later than 18:00 (FDS-04) – after that a full night is charged"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Charge"}</span>
                        <div className="fd-display">{"50% of the room rate ₹6,401.00 = ₹3,200.50 + GST ₹160.02 (charge code LCO, slab FDS-04a)"}</div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f92">
                          <input id="f92" type="checkbox" role="switch" name="waive" />
                          <span className="sw__track" />
                          {"Waive the charge"}
                        </label>
                        <span className="field__hint">{"Within your limit with a reason; above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f93">{"Waiver reason"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f93" name="reason" defaultValue={""}>
                            <option value="" />
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Required when waiving (FDS-19)"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Room needed for arrival"}</span>
                        <div className="fd-display">{"room 205 is promised to Mr Rahul George (FK-10239) arriving tonight"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-FK-10108-p">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Save"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="cm-p04-FK-10108-p" data-code="CM-P04" role="dialog" aria-modal="true" aria-labelledby="cm-p04-FK-10108-p-t">
                <a className="modal__backdrop" href="#FD-P18" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/reservation/rs-20-approvals/" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="cm-p04-FK-10108-p-t">{"Request approval"}</h2>
                      <p className="modal__desc">{"This action is above your limit. The next approver is asked on screen; the request appears in Approvals (RS-20)."}</p>
                    </div>
                    <a className="modal__close" href="#FD-P18" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-grid1">
                      <div className="field">
                        <span className="field__label">{"Action"}</span>
                        <div className="fd-display">{"Waive the late check-out charge"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Value"}</span>
                        <div className="fd-display">{"Ms Anna Schneider · FK-10108"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f97">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f97" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="LOYALTY – Aviv Club benefit">{"LOYALTY – Aviv Club benefit"}</option>
                            <option value="LATEFLT – Late flight">{"LATEFLT – Late flight"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f98">{"Note"}</label>
                        <textarea className="field__input field__input--area" id="f98" name="note" maxLength="240" defaultValue={""} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Goes to"}</span>
                        <div className="fd-display">{"Front Office Manager (limits from FDS-22; escalates after 30 minutes)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#FD-P18">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send request"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P30" data-code="FD-P30" role="dialog" aria-modal="true" aria-labelledby="FD-P30-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-14-departures/checked-out.html#co-FK-10104" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P30-t">{"Express check-out"}</h2>
                      <p className="modal__desc">{"Closes the folios without the wizard: invoices are issued, rooms become Vacant Dirty and the reservations are Checked-out."}</p>
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
                        <span className="field__label">{"Rooms selected"}</span>
                        <div className="fd-display">
                          <div className="stack">
                            <label className="check">
                              <input className="check__input" type="checkbox" name="sel" value="FK-10104" defaultChecked={true} />
                              <span className="check__box" />
                              {"Room 207 – Mr Amit Chirag "}
                              <span className="fd-muted">{"(company pays all)"}</span>
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="sel" value="FK-10193" defaultChecked={true} />
                              <span className="check__box" />
                              {"Room 216, 305 – Mrs Sindhu Wilson "}
                              <span className="fd-muted">{"(zero balance)"}</span>
                            </label>
                            <label className="check">
                              <input className="check__input" type="checkbox" name="sel" value="FK-10142" defaultChecked={true} />
                              <span className="check__box" />
                              {"Room 517 – Mrs Maya Mohan "}
                              <span className="fd-muted">{"(zero balance)"}</span>
                            </label>
                          </div>
                        </div>
                        <span className="field__hint">{"Only eligible rooms are listed. 5 other guests have a balance, a pending posting or an open locker and need the full check-out (FD-15)."}</span>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f101">
                          <input id="f101" type="checkbox" role="switch" name="preauth" />
                          <span className="sw__track" />
                          {"Settle to pre-authorised card"}
                        </label>
                        <span className="field__hint">{"Only if allowed in FDS-04 and a balance exists – the selected guests have no balance"}</span>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Send invoices by "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="send" value="Email" defaultChecked={true} />
                            <span className="check__box" />
                            {"Email"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="send" value="WhatsApp" />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Keys returned"}</legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="keys" value="Yes" />
                            <span className="check__box" />
                            {"Yes"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="keys" value="Drop box" defaultChecked={true} />
                            <span className="check__box" />
                            {"Drop box"}
                          </label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Check out selected"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P35" data-code="FD-P35" role="dialog" aria-modal="true" aria-labelledby="FD-P35-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-07-in-house-guests/#reinstated-FK-10108" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P35-t">{"Reinstate check-out – Ms Anna Schneider"}</h2>
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
                        <label className="field__label" htmlFor="f108">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f108" name="reason" required={true}>
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
              <div className="fd-toast" id="late-FK-10108" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Late check-out saved – Ms Anna Schneider"}
                  <small>{"The room is kept until the requested time; the late check-out fee is posted to the folio (LCO). Housekeeping and the Room Board are told."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="late-FK-10104" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Late check-out saved – Mr Amit Chirag"}
                  <small>{"The room is kept until the requested time; the late check-out fee is posted to the folio (LCO). Housekeeping and the Room Board are told."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="late-FK-10193" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Late check-out saved – Mrs Sindhu Wilson"}
                  <small>{"The room is kept until the requested time; the late check-out fee is posted to the folio (LCO). Housekeeping and the Room Board are told."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="late-FK-10102" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Late check-out saved – Ms Remya Kurian"}
                  <small>{"The room is kept until the requested time; the late check-out fee is posted to the folio (LCO). Housekeeping and the Room Board are told."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="late-FK-10187" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Late check-out saved – Mrs Kavita Ranjan"}
                  <small>{"The room is kept until the requested time; the late check-out fee is posted to the folio (LCO). Housekeeping and the Room Board are told."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="late-FK-10172" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Late check-out saved – Ms Shruti Siddharth"}
                  <small>{"The room is kept until the requested time; the late check-out fee is posted to the folio (LCO). Housekeeping and the Room Board are told."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="late-FK-10123" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Late check-out saved – Mrs Isha Neil"}
                  <small>{"The room is kept until the requested time; the late check-out fee is posted to the folio (LCO). Housekeeping and the Room Board are told."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="late-FK-10142" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Late check-out saved – Mrs Maya Mohan"}
                  <small>{"The room is kept until the requested time; the late check-out fee is posted to the folio (LCO). Housekeeping and the Room Board are told."}</small>
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
                  <span className="code-chip">{"FD-14"}</span>
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
