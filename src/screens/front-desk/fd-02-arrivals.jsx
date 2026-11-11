// GENERATED from public/front-desk/fd-02-arrivals/index.html by scripts/convert_legacy.py.
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
    "href": "/front-desk/fd-02-arrivals/fd-02-arrivals.css",
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

export default function FrontDeskFd02Arrivals() {
  return (
    <ScreenShell title="Arrivals" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FD-02" data-code="FD-02" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="FD-02" aria-current="page" title="Arrivals" to={"/front-desk/fd-02-arrivals"}>
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
            <main className="app__content" id="main" data-code="FD-02" tabIndex="-1">
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
                        <span aria-current="page">{"Arrivals"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Arrivals"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FD-02"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hs123" type="search" name="q" placeholder="Guest, booking no., agent or conf. no." aria-label="Search arrivals" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hs123" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="hf124" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hf124" aria-label="Show filters" />
                      <form className="hfilter" method="get" role="search" aria-label="Filter arrivals">
                        <span className="hfilter__hic" title="Filter arrivals">
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
                                  <select className="dpk-m" name="af-month" aria-label="Month" defaultValue={"10"}>
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
                                  <select className="dpk-y" name="af-year" aria-label="Year" defaultValue={"2026"}>
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
                                    <input type="radio" name="af" value="01" />
                                    {"1"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="02" />
                                    {"2"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="03" />
                                    {"3"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="04" />
                                    {"4"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="05" />
                                    {"5"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="06" />
                                    {"6"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="07" />
                                    {"7"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="08" />
                                    {"8"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="09" />
                                    {"9"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="10" />
                                    {"10"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="11" />
                                    {"11"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="12" />
                                    {"12"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="13" />
                                    {"13"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="14" />
                                    {"14"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="15" />
                                    {"15"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="16" />
                                    {"16"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="17" />
                                    {"17"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="18" />
                                    {"18"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="19" />
                                    {"19"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="20" />
                                    {"20"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="21" />
                                    {"21"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="22" defaultChecked={true} />
                                    {"22"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="23" />
                                    {"23"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="24" />
                                    {"24"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="25" />
                                    {"25"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="26" />
                                    {"26"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="27" />
                                    {"27"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="28" />
                                    {"28"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="29" />
                                    {"29"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="30" />
                                    {"30"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="af" value="31" />
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
                                  <select className="dpk-m" name="at-month" aria-label="Month" defaultValue={"10"}>
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
                                  <select className="dpk-y" name="at-year" aria-label="Year" defaultValue={"2026"}>
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
                                    <input type="radio" name="at" value="01" />
                                    {"1"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="02" />
                                    {"2"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="03" />
                                    {"3"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="04" />
                                    {"4"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="05" />
                                    {"5"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="06" />
                                    {"6"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="07" />
                                    {"7"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="08" />
                                    {"8"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="09" />
                                    {"9"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="10" />
                                    {"10"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="11" />
                                    {"11"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="12" />
                                    {"12"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="13" />
                                    {"13"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="14" />
                                    {"14"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="15" />
                                    {"15"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="16" />
                                    {"16"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="17" />
                                    {"17"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="18" />
                                    {"18"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="19" />
                                    {"19"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="20" />
                                    {"20"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="21" />
                                    {"21"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="22" defaultChecked={true} />
                                    {"22"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="23" />
                                    {"23"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="24" />
                                    {"24"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="25" />
                                    {"25"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="26" />
                                    {"26"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="27" />
                                    {"27"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="28" />
                                    {"28"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="29" />
                                    {"29"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="30" />
                                    {"30"}
                                  </label>
                                  <label className="dpk-d">
                                    <input type="radio" name="at" value="31" />
                                    {"31"}
                                  </label>
                                </div>
                              </div>
                            </div>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"ETA from"}
                            </span>
                            <select className="hf-f__c" name="etaf" defaultValue={"00"}>
                              <option value="00">{"00:00"}</option>
                              <option value="01">{"01:00"}</option>
                              <option value="02">{"02:00"}</option>
                              <option value="03">{"03:00"}</option>
                              <option value="04">{"04:00"}</option>
                              <option value="05">{"05:00"}</option>
                              <option value="06">{"06:00"}</option>
                              <option value="07">{"07:00"}</option>
                              <option value="08">{"08:00"}</option>
                              <option value="09">{"09:00"}</option>
                              <option value="10">{"10:00"}</option>
                              <option value="11">{"11:00"}</option>
                              <option value="12">{"12:00"}</option>
                              <option value="13">{"13:00"}</option>
                              <option value="14">{"14:00"}</option>
                              <option value="15">{"15:00"}</option>
                              <option value="16">{"16:00"}</option>
                              <option value="17">{"17:00"}</option>
                              <option value="18">{"18:00"}</option>
                              <option value="19">{"19:00"}</option>
                              <option value="20">{"20:00"}</option>
                              <option value="21">{"21:00"}</option>
                              <option value="22">{"22:00"}</option>
                              <option value="23">{"23:00"}</option>
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
                              {"ETA to"}
                            </span>
                            <select className="hf-f__c" name="etat" defaultValue={"23"}>
                              <option value="23">{"23:59"}</option>
                              <option value="22">{"22:59"}</option>
                              <option value="21">{"21:59"}</option>
                              <option value="20">{"20:59"}</option>
                              <option value="19">{"19:59"}</option>
                              <option value="18">{"18:59"}</option>
                              <option value="17">{"17:59"}</option>
                              <option value="16">{"16:59"}</option>
                              <option value="15">{"15:59"}</option>
                              <option value="14">{"14:59"}</option>
                              <option value="13">{"13:59"}</option>
                              <option value="12">{"12:59"}</option>
                              <option value="11">{"11:59"}</option>
                              <option value="10">{"10:59"}</option>
                              <option value="09">{"09:59"}</option>
                              <option value="08">{"08:59"}</option>
                              <option value="07">{"07:59"}</option>
                              <option value="06">{"06:59"}</option>
                              <option value="05">{"05:59"}</option>
                              <option value="04">{"04:59"}</option>
                              <option value="03">{"03:59"}</option>
                              <option value="02">{"02:59"}</option>
                              <option value="01">{"01:59"}</option>
                              <option value="00">{"00:59"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#door" />
                              </svg>
                              {"Room allocation"}
                            </span>
                            <select className="hf-f__c" name="alloc" defaultValue={"all"}>
                              <option value="all">{"All bookings"}</option>
                              <option value="yes">{"Room allocated"}</option>
                              <option value="no">{"Not allocated"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
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
                              <option value="expedia">{"Expedia"}</option>
                              <option value="kerala-trails-travel-co">{"Kerala Trails Travel Co"}</option>
                              <option value="makemytrip-goibibo">{"MakeMyTrip / Goibibo"}</option>
                              <option value="periyar-infotech-solutio">{"Periyar Infotech Solutions"}</option>
                              <option value="self-booking">{"Self booking"}</option>
                              <option value="southern-skies-travel">{"Southern Skies Travel"}</option>
                              <option value="spice-coast-journeys">{"Spice Coast Journeys"}</option>
                              <option value="sunrise-tours-india">{"Sunrise Tours India"}</option>
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
                              {"Guest class"}
                            </span>
                            <select className="hf-f__c" name="gclass" defaultValue={"all"}>
                              <option value="all">{"All guest classes"}</option>
                              <option value="aviv-club-gold">{"Aviv Club Gold"}</option>
                              <option value="aviv-club-member">{"Aviv Club Member"}</option>
                              <option value="aviv-club-silver">{"Aviv Club Silver"}</option>
                              <option value="cip">{"CIP"}</option>
                              <option value="first-timer">{"First timer"}</option>
                              <option value="repeat-guest">{"Repeat guest"}</option>
                              <option value="vip-b">{"VIP-B"}</option>
                              <option>{"VIP-A"}</option>
                              <option>{"VIP-C"}</option>
                              <option>{"VIP-D"}</option>
                              <option>{"Long stay"}</option>
                              <option>{"Platinum"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
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
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#message-square" />
                              </svg>
                              {"Special instructions"}
                            </span>
                            <select className="hf-f__c" name="instr" defaultValue={"all"}>
                              <option value="all">{"All instructions"}</option>
                              <option value="any">{"With any instruction"}</option>
                              <option value="front-office">{"Front office"}</option>
                              <option value="housekeeping">{"Housekeeping"}</option>
                              <option value="f-b">{"Food & beverage"}</option>
                              <option value="transport">{"Transport"}</option>
                              <option value="spa">{"Spa"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <div className="hfilter__more">
                            <label className="sw">
                              <input type="checkbox" role="switch" name="deposit" />
                              <span className="sw__track" />
                              {"Only arrivals with a payment due"}
                            </label>
                            <label className="sw">
                              <input type="checkbox" role="switch" name="foreign" />
                              <span className="sw__track" />
                              {"Foreign / OCI guests only"}
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
                              <input type="checkbox" name="col" value="tar" id="arlc-tar" />
                              {"Room tariff"}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="adv" id="arlc-adv" />
                              {"Advance received"}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="pm" id="arlc-pm" />
                              {"Payment mode"}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="mob" id="arlc-mob" />
                              {"Mobile no."}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="trv" id="arlc-trv" />
                              {"Travel details"}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="cp" id="arlc-cp" />
                              {"Contact person details"}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="cal" id="arlc-cal" />
                              {"Caller information"}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="pref" id="arlc-pref" />
                              {"Guest preferences"}
                            </label>
                            <label className="arl-col">
                              <input type="checkbox" name="col" value="si" id="arlc-si" />
                              {"Special instructions"}
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
                          <label className="hfilter__done" htmlFor="hf124">
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
                    <Link className="btn btn--primary" data-leads-to="FD-04" to={"/front-desk/fd-04-walk-in-check-in"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#log-in" />
                      </svg>
                      {"Walk-in"}
                    </Link>
                  </div>
                </div>
              </header>
              <p className="field__hint" data-flow="fd02-late">{"Late arrivals: rooms not guaranteed are held 4 hours after the given arrival time (late-arrival hold, RSS-14; late-arrival exception, RSS-12), then appear on the No-show list (RS-13)."}</p>
              <section className="arr-deck" data-code="FD-02-deck" aria-label="Arrivals views and filters">
                <nav className="ltabs" aria-label="Sections">
                  <div className="ltabs__list">
                    <Link aria-current="page" data-leads-to="FD-02" to={"/front-desk/fd-02-arrivals"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#calendar" />
                      </svg>
                      {"Expected arrivals"}
                      <span className="ltabs__n">{"16"}</span>
                    </Link>
                    <Link data-leads-to="FD-02-2" to={"/front-desk/fd-02-arrivals/queue"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#clock" />
                      </svg>
                      {"Queue"}
                      <span className="ltabs__n">{"2"}</span>
                    </Link>
                    <Link data-leads-to="FD-02-3" to={"/front-desk/fd-02-arrivals/arrived-today"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#user-check" />
                      </svg>
                      {"Arrived today"}
                      <span className="ltabs__n">{"2"}</span>
                    </Link>
                  </div>
                  <div className="ltabs__end">
                    <Link className="arr-online" data-leads-to="FD-29" to={"/front-desk/fd-29-online-check-in-arrivals"}>
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#smartphone" />
                      </svg>
                      {"Online check-ins "}
                      <span className="ltabs__n">{"1"}</span>
                    </Link>
                  </div>
                </nav>
                <div className="arr-bulk" data-code="FD-02-bulk">
                  <div className="arr-bulk__lead">
                    <span className="arr-bulk__ic">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#clipboard-check" />
                      </svg>
                    </span>
                    <span className="arr-bulk__t">
                      <strong>{"With the ticked arrivals"}</strong>
                      <small className="arr-bulk__off">{"Tick guests in the table to use these actions"}</small>
                      <small className="arr-bulk__on">{"Ticked guests are ready for these actions"}</small>
                    </span>
                  </div>
                  <div className="arr-bulk__btns">
                    <a className="arr-act" href="#FD-P49">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Pre-register / print cards"}
                    </a>
                    <a className="arr-act" href="/front-desk/fd-38-guest-communication/#FD-P56-arrivals" data-leads-to="FD-P56">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#send" />
                      </svg>
                      {"Send pre-arrival message"}
                    </a>
                    <a className="arr-act" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R01" data-leads-to="FD-R01">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#download" />
                      </svg>
                      {"Print / export list"}
                    </a>
                  </div>
                </div>
              </section>
              <div className="arl-wrap">
                <div className="s-scroll s-scroll--tall arl" data-code="FD-02-1">
                  <table className="srt dt__table arl-t" data-code="FD-02-1-table" style={{"--srt-cols": "auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto max-content"}} data-mc="">
                    <caption className="sr-only">{"Expected arrivals"}</caption>
                    <thead>
                      <tr>
                        <th scope="col" className="arl-bk">
                          <input className="srt-i srt-a0" type="radio" name="stfd020" id="stfd020-0a" aria-label="Sort by Booking no., lowest or A first" />
                          <input className="srt-i srt-d0" type="radio" name="stfd020" id="stfd020-0d" aria-label="Sort by Booking no., highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-0a">{"Booking no."}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-0d" aria-hidden="true">{"Booking no."}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a1" type="radio" name="stfd020" id="stfd020-1a" aria-label="Sort by Guest name, lowest or A first" />
                          <input className="srt-i srt-d1" type="radio" name="stfd020" id="stfd020-1d" aria-label="Sort by Guest name, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-1a">{"Guest name"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-1d" aria-hidden="true">{"Guest name"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a2" type="radio" name="stfd020" id="stfd020-2a" aria-label="Sort by Room type, lowest or A first" />
                          <input className="srt-i srt-d2" type="radio" name="stfd020" id="stfd020-2d" aria-label="Sort by Room type, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-2a">{"Room type"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-2d" aria-hidden="true">{"Room type"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a3" type="radio" name="stfd020" id="stfd020-3a" aria-label="Sort by Room no., lowest or A first" />
                          <input className="srt-i srt-d3" type="radio" name="stfd020" id="stfd020-3d" aria-label="Sort by Room no., highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-3a">{"Room no."}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-3d" aria-hidden="true">{"Room no."}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a4" type="radio" name="stfd020" id="stfd020-4a" aria-label="Sort by Arrival, lowest or A first" />
                          <input className="srt-i srt-d4" type="radio" name="stfd020" id="stfd020-4d" aria-label="Sort by Arrival, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-4a">{"Arrival"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-4d" aria-hidden="true">{"Arrival"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a5" type="radio" name="stfd020" id="stfd020-5a" aria-label="Sort by Departure, lowest or A first" />
                          <input className="srt-i srt-d5" type="radio" name="stfd020" id="stfd020-5d" aria-label="Sort by Departure, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-5a">{"Departure"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-5d" aria-hidden="true">{"Departure"}</label>
                        </th>
                        <th scope="col" className="dt__th--right">
                          <input className="srt-i srt-a6" type="radio" name="stfd020" id="stfd020-6a" aria-label="Sort by Nights, lowest or A first" />
                          <input className="srt-i srt-d6" type="radio" name="stfd020" id="stfd020-6d" aria-label="Sort by Nights, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-6a">{"Nights"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-6d" aria-hidden="true">{"Nights"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a7" type="radio" name="stfd020" id="stfd020-7a" aria-label="Sort by ETA, lowest or A first" />
                          <input className="srt-i srt-d7" type="radio" name="stfd020" id="stfd020-7d" aria-label="Sort by ETA, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-7a">{"ETA"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-7d" aria-hidden="true">{"ETA"}</label>
                        </th>
                        <th scope="col" className="dt__th--right">
                          <input className="srt-i srt-a8" type="radio" name="stfd020" id="stfd020-8a" aria-label="Sort by Adults, lowest or A first" />
                          <input className="srt-i srt-d8" type="radio" name="stfd020" id="stfd020-8d" aria-label="Sort by Adults, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-8a">{"Adults"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-8d" aria-hidden="true">{"Adults"}</label>
                        </th>
                        <th scope="col" className="dt__th--right">
                          <input className="srt-i srt-a9" type="radio" name="stfd020" id="stfd020-9a" aria-label="Sort by Child, lowest or A first" />
                          <input className="srt-i srt-d9" type="radio" name="stfd020" id="stfd020-9d" aria-label="Sort by Child, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-9a">{"Child"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-9d" aria-hidden="true">{"Child"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a10" type="radio" name="stfd020" id="stfd020-10a" aria-label="Sort by Rate plan, lowest or A first" />
                          <input className="srt-i srt-d10" type="radio" name="stfd020" id="stfd020-10d" aria-label="Sort by Rate plan, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-10a">{"Rate plan"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-10d" aria-hidden="true">{"Rate plan"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a11" type="radio" name="stfd020" id="stfd020-11a" aria-label="Sort by Meal, lowest or A first" />
                          <input className="srt-i srt-d11" type="radio" name="stfd020" id="stfd020-11d" aria-label="Sort by Meal, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-11a">{"Meal"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-11d" aria-hidden="true">{"Meal"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a12" type="radio" name="stfd020" id="stfd020-12a" aria-label="Sort by Guest class, lowest or A first" />
                          <input className="srt-i srt-d12" type="radio" name="stfd020" id="stfd020-12d" aria-label="Sort by Guest class, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-12a">{"Guest class"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-12d" aria-hidden="true">{"Guest class"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a13" type="radio" name="stfd020" id="stfd020-13a" aria-label="Sort by Agent / corporate, lowest or A first" />
                          <input className="srt-i srt-d13" type="radio" name="stfd020" id="stfd020-13d" aria-label="Sort by Agent / corporate, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-13a">{"Agent / corporate"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-13d" aria-hidden="true">{"Agent / corporate"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a14" type="radio" name="stfd020" id="stfd020-14a" aria-label="Sort by Status, lowest or A first" />
                          <input className="srt-i srt-d14" type="radio" name="stfd020" id="stfd020-14d" aria-label="Sort by Status, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-14a">{"Status"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-14d" aria-hidden="true">{"Status"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a15" type="radio" name="stfd020" id="stfd020-15a" aria-label="Sort by Payment, lowest or A first" />
                          <input className="srt-i srt-d15" type="radio" name="stfd020" id="stfd020-15d" aria-label="Sort by Payment, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-15a">{"Payment"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-15d" aria-hidden="true">{"Payment"}</label>
                        </th>
                        <th scope="col" className="dt__th--right c-tar">
                          <input className="srt-i srt-a16" type="radio" name="stfd020" id="stfd020-16a" aria-label="Sort by Room tariff, lowest or A first" />
                          <input className="srt-i srt-d16" type="radio" name="stfd020" id="stfd020-16d" aria-label="Sort by Room tariff, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-16a">{"Room tariff"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-16d" aria-hidden="true">{"Room tariff"}</label>
                        </th>
                        <th scope="col" className="dt__th--right c-adv">
                          <input className="srt-i srt-a17" type="radio" name="stfd020" id="stfd020-17a" aria-label="Sort by Advance received, lowest or A first" />
                          <input className="srt-i srt-d17" type="radio" name="stfd020" id="stfd020-17d" aria-label="Sort by Advance received, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-17a">{"Advance received"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-17d" aria-hidden="true">{"Advance received"}</label>
                        </th>
                        <th scope="col" className="c-pm">
                          <input className="srt-i srt-a18" type="radio" name="stfd020" id="stfd020-18a" aria-label="Sort by Payment mode, lowest or A first" />
                          <input className="srt-i srt-d18" type="radio" name="stfd020" id="stfd020-18d" aria-label="Sort by Payment mode, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-18a">{"Payment mode"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-18d" aria-hidden="true">{"Payment mode"}</label>
                        </th>
                        <th scope="col" className="c-mob">
                          <input className="srt-i srt-a19" type="radio" name="stfd020" id="stfd020-19a" aria-label="Sort by Mobile no., lowest or A first" />
                          <input className="srt-i srt-d19" type="radio" name="stfd020" id="stfd020-19d" aria-label="Sort by Mobile no., highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-19a">{"Mobile no."}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-19d" aria-hidden="true">{"Mobile no."}</label>
                        </th>
                        <th scope="col" className="c-trv">
                          <input className="srt-i srt-a20" type="radio" name="stfd020" id="stfd020-20a" aria-label="Sort by Travel details, lowest or A first" />
                          <input className="srt-i srt-d20" type="radio" name="stfd020" id="stfd020-20d" aria-label="Sort by Travel details, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-20a">{"Travel details"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-20d" aria-hidden="true">{"Travel details"}</label>
                        </th>
                        <th scope="col" className="c-cp">
                          <input className="srt-i srt-a21" type="radio" name="stfd020" id="stfd020-21a" aria-label="Sort by Contact person, lowest or A first" />
                          <input className="srt-i srt-d21" type="radio" name="stfd020" id="stfd020-21d" aria-label="Sort by Contact person, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-21a">{"Contact person"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-21d" aria-hidden="true">{"Contact person"}</label>
                        </th>
                        <th scope="col" className="c-cal">
                          <input className="srt-i srt-a22" type="radio" name="stfd020" id="stfd020-22a" aria-label="Sort by Caller information, lowest or A first" />
                          <input className="srt-i srt-d22" type="radio" name="stfd020" id="stfd020-22d" aria-label="Sort by Caller information, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-22a">{"Caller information"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-22d" aria-hidden="true">{"Caller information"}</label>
                        </th>
                        <th scope="col" className="c-pref">
                          <input className="srt-i srt-a23" type="radio" name="stfd020" id="stfd020-23a" aria-label="Sort by Guest preferences, lowest or A first" />
                          <input className="srt-i srt-d23" type="radio" name="stfd020" id="stfd020-23d" aria-label="Sort by Guest preferences, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-23a">{"Guest preferences"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-23d" aria-hidden="true">{"Guest preferences"}</label>
                        </th>
                        <th scope="col" className="c-si">
                          <input className="srt-i srt-a24" type="radio" name="stfd020" id="stfd020-24a" aria-label="Sort by Special instructions, lowest or A first" />
                          <input className="srt-i srt-d24" type="radio" name="stfd020" id="stfd020-24d" aria-label="Sort by Special instructions, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd020-24a">{"Special instructions"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd020-24d" aria-hidden="true">{"Special instructions"}</label>
                        </th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="ad-1022 eh-09 rt-PDLX gc-aviv-club-silver ag-booking-com al-yes" style={{"--k0": "2", "--k1": "28", "--k2": "5", "--k3": "7", "--k4": "1", "--k5": "4", "--k6": "4", "--k7": "1", "--k8": "1", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "3", "--k13": "2", "--k14": "2", "--k15": "27", "--k16": "9", "--k17": "12", "--k18": "6", "--k19": "17", "--k20": "9", "--k21": "6", "--k22": "14", "--k23": "7", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10006" aria-label="Select Mr Ravi Kabir" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10006" data-leads-to="RS-07">{"FK-10006"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10006">{"Mr Ravi Kabir"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"505"}</span>
                          </span>
                          <span className="arl-rd arl-rd--no">{"Not ready"}</span>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Mon 26 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"09:15"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Aviv Club Silver"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,799.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹43,277.68"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-m="">{"OTA prepaid / virtual card"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6087734078"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"QR 516 · DOH → COK 02:50 · pickup booked"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Booking.com · ref BO-446947201"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Non-smoking, High floor"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10006" data-leads-to="FD-03">{"Check-in"}</a>
                          <span className="arl-q">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"In queue"}
                          </span>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-09 rt-GDLX gc-aviv-club-gold ag-self-booking al-yes dd" style={{"--k0": "15", "--k1": "33", "--k2": "4", "--k3": "5", "--k4": "1", "--k5": "5", "--k6": "5", "--k7": "2", "--k8": "2", "--k9": "1", "--k10": "6", "--k11": "2", "--k12": "1", "--k13": "7", "--k14": "1", "--k15": "22", "--k16": "5", "--k17": "17", "--k18": "7", "--k19": "27", "--k20": "12", "--k21": "6", "--k22": "17", "--k23": "6", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10091" aria-label="Select Mr Srinivas Manav" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10091" data-leads-to="RS-07">{"FK-10091"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10091">{"Mr Srinivas Manav"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"305"}</span>
                          </span>
                          <span className="arl-rd arl-rd--no">{"Not ready"}</span>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Tue 27 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"09:35"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CLUB"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Aviv Club Gold"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Confirmed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹7,558.95"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,199.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7088495156"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"Vande Bharat 20634 · TVC → Ernakulam Jn 12:35"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w="" data-m="">{"Email · srinivas.manav359@example.com"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-m="">{"Non-smoking, Extra pillows"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10091" data-leads-to="FD-03">{"Check-in"}</a>
                          <span className="arl-q">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"In queue"}
                          </span>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-12 rt-PDLX gc-vip-b ag-booking-com al-no" style={{"--k0": "33", "--k1": "35", "--k2": "5", "--k3": "10", "--k4": "1", "--k5": "1", "--k6": "1", "--k7": "3", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "7", "--k13": "2", "--k14": "2", "--k15": "27", "--k16": "14", "--k17": "2", "--k18": "6", "--k19": "39", "--k20": "11", "--k21": "6", "--k22": "11", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10216" aria-label="Select Mrs Swathi Sahil" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07">{"FK-10216"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10216">{"Mrs Swathi Sahil"}</a>
                          <span className="arl-mk arl-mk--vip" title="VIP">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#star" />
                            </svg>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10216" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Fri 23 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"VIP-B"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,499.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹10,028.82"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-m="">{"OTA prepaid / virtual card"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9095851502"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Booking.com · ref BO-293317163"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10216" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10216">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-12 rt-PRMS gc-aviv-club-member ag-self-booking al-yes dd" style={{"--k0": "3", "--k1": "4", "--k2": "7", "--k3": "9", "--k4": "1", "--k5": "4", "--k6": "4", "--k7": "4", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "2", "--k13": "7", "--k14": "3", "--k15": "12", "--k16": "23", "--k17": "17", "--k18": "7", "--k19": "20", "--k20": "13", "--k21": "6", "--k22": "6", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10013" aria-label="Select Mrs Athira Nirav" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07">{"FK-10013"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10013">{"Mrs Athira Nirav"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PRMS"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"517"}</span>
                          </span>
                          <span className="arl-rd arl-rd--no">{"Not ready"}</span>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Mon 26 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"12:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Aviv Club Member"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Tentative"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹28,320"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹24,000.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7033724972"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"At the desk (walk-in)"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10013" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10013">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-13 rt-GDLX gc-aviv-club-gold ag-booking-com si-front-office si-any al-no dd" style={{"--k0": "4", "--k1": "8", "--k2": "4", "--k3": "10", "--k4": "1", "--k5": "2", "--k6": "2", "--k7": "5", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "1", "--k13": "2", "--k14": "1", "--k15": "24", "--k16": "11", "--k17": "17", "--k18": "7", "--k19": "30", "--k20": "7", "--k21": "6", "--k22": "15", "--k23": "12", "--k24": "1"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10015" aria-label="Select Mr Dileep Kurian" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07">{"FK-10015"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10015">{"Mr Dileep Kurian"}</a>
                          <Link className="arl-mk arl-mk--grp" data-leads-to="FD-05" title="Group GRP-0003 – group check-in" to={"/front-desk/fd-05-group-check-in"}>
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#users" />
                            </svg>
                            {"GRP-0003"}
                          </Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10015" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Sat 24 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"13:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Aviv Club Gold"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Confirmed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹9,438.82"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,999.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8052147906"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"IX 434 · SHJ → COK 07:55 · pickup booked"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Booking.com · ref BO-523266015"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-label="Special instructions" data-w2="" data-m="">{"Adjoining rooms"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10015" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10015">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-13 rt-PDLX gc-repeat-guest ag-self-booking al-no" style={{"--k0": "6", "--k1": "18", "--k2": "5", "--k3": "10", "--k4": "1", "--k5": "5", "--k6": "5", "--k7": "6", "--k8": "2", "--k9": "1", "--k10": "1", "--k11": "2", "--k12": "6", "--k13": "7", "--k14": "2", "--k15": "27", "--k16": "7", "--k17": "11", "--k18": "5", "--k19": "25", "--k20": "13", "--k21": "6", "--k22": "16", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10022" aria-label="Select Ms Lakshmi Mathew" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07">{"FK-10022"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10022">{"Ms Lakshmi Mathew"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10022" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Tue 27 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"13:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"ADV15"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,224.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹41,409.04"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Credit / debit card"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7075512688"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w="" data-m="">{"Email · lakshmi.mathew52@example.com"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10022" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10022">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-14 rt-GDLX gc-aviv-club-gold ag-kerala-trails-travel-co al-yes" style={{"--k0": "8", "--k1": "25", "--k2": "4", "--k3": "1", "--k4": "1", "--k5": "5", "--k6": "5", "--k7": "7", "--k8": "2", "--k9": "1", "--k10": "2", "--k11": "2", "--k12": "1", "--k13": "4", "--k14": "2", "--k15": "26", "--k16": "2", "--k17": "17", "--k18": "1", "--k19": "33", "--k20": "13", "--k21": "1", "--k22": "2", "--k23": "7", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10034" aria-label="Select Ms Pooja Neil" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10034" data-leads-to="RS-07">{"FK-10034"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10034">{"Ms Pooja Neil"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"106"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Tue 27 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"14:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"AGENT"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Aviv Club Gold"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Kerala Trails Travel Co"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="arl-mute">{"None (billed)"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹6,559.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Bill to agent"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9078326259"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-label="Contact person" data-m="">{"Anand Mohan (Reservations) · +91 8067524975"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Anand Mohan · Kerala Trails Travel Co"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Non-smoking, High floor"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10034" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10034">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-14 rt-PDLX gc-repeat-guest ag-expedia al-no dd" style={{"--k0": "9", "--k1": "9", "--k2": "2", "--k3": "10", "--k4": "1", "--k5": "1", "--k6": "1", "--k7": "8", "--k8": "5", "--k9": "3", "--k10": "4", "--k11": "2", "--k12": "6", "--k13": "3", "--k14": "2", "--k15": "15", "--k16": "14", "--k17": "17", "--k18": "3", "--k19": "36", "--k20": "2", "--k21": "6", "--k22": "19", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10039" aria-label="Select Mr Dileep Pranav" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07">{"FK-10039"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10039">{"Mr Dileep Pranav"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"3 × PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10039" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Fri 23 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"14:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"7"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Expedia"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹33,980.46"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,499.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-m="">{"Card guarantee – pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9086966722"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"AI 681 · BOM → COK 19:30"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Expedia · ref EX-730809750"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10039" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10039">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-15 rt-PDLX gc-repeat-guest ag-self-booking si-housekeeping si-any fx al-yes dd" style={{"--k0": "11", "--k1": "20", "--k2": "5", "--k3": "6", "--k4": "1", "--k5": "5", "--k6": "5", "--k7": "9", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "6", "--k13": "7", "--k14": "1", "--k15": "3", "--k16": "14", "--k17": "17", "--k18": "7", "--k19": "4", "--k20": "10", "--k21": "6", "--k22": "20", "--k23": "4", "--k24": "7"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10067" aria-label="Select Mr Lukas Keller" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10067" data-leads-to="RS-07">{"FK-10067"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10067">{"Mr Lukas Keller"}</a>
                          <span className="arl-mk" title="Foreign national – Form III required">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"CH"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"314"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Tue 27 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"15:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Confirmed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹10,028.82"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,499.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+41 720811894"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"SG 3021 · HYD → COK 17:10"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Guest called · +41 720811894"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-m="">{"King bed, Vegetarian meals"}</td>
                        <td className="dt__td c-si" data-label="Special instructions" data-w2="" data-m="">{"Honeymoon set-up"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10067" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10067">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-15 rt-PDLX gc-aviv-club-silver ag-makemytrip-goibibo al-no dd" style={{"--k0": "14", "--k1": "31", "--k2": "5", "--k3": "10", "--k4": "1", "--k5": "4", "--k6": "4", "--k7": "10", "--k8": "2", "--k9": "1", "--k10": "5", "--k11": "3", "--k12": "3", "--k13": "5", "--k14": "2", "--k15": "21", "--k16": "4", "--k17": "17", "--k18": "3", "--k19": "26", "--k20": "8", "--k21": "6", "--k22": "29", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10089" aria-label="Select Dr Shruti Manav" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07">{"FK-10089"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10089">{"Dr Shruti Manav"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10089" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Mon 26 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"15:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"EP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Aviv Club Silver"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹7,246.05"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹6,901.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-m="">{"Card guarantee – pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7079600624"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"QR 516 · DOH → COK 02:50"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"MakeMyTrip / Goibibo · ref MM-418649606"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10089" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10089">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-16 rt-GDLX gc-repeat-guest ag-self-booking fx al-yes dd" style={{"--k0": "16", "--k1": "12", "--k2": "1", "--k3": "4", "--k4": "1", "--k5": "2", "--k6": "2", "--k7": "11", "--k8": "4", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "6", "--k13": "7", "--k14": "1", "--k15": "8", "--k16": "11", "--k17": "17", "--k18": "7", "--k19": "6", "--k20": "13", "--k21": "6", "--k22": "21", "--k23": "2", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10096" aria-label="Select Mr Hans Mueller" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10096" data-leads-to="RS-07">{"FK-10096"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name">
                          <a className="fd-link" href="#sum-FK-10096">{"Mr Hans Mueller"}</a>
                          <Link className="arl-mk arl-mk--grp" data-leads-to="FD-05" title="Group GRP-0003 – group check-in" to={"/front-desk/fd-05-group-check-in"}>
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#users" />
                            </svg>
                            {"GRP-0003"}
                          </Link>
                          <span className="arl-mk" title="Foreign national – Form III required">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"DE"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"2 × GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"302"}</span>
                            <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"111"}</span>
                          </span>
                          <span className="arl-rd arl-rd--no">{"Dirty"}</span>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Sat 24 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"16:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"4"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Confirmed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹18,877.64"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,999.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+49 782572599"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Guest called · +49 782572599"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-m="">{"Extra pillows, Late check-out"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10096" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10096">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-16 rt-GDLX gc-first-timer ag-self-booking fx al-no dd" style={{"--k0": "19", "--k1": "24", "--k2": "4", "--k3": "10", "--k4": "1", "--k5": "5", "--k6": "5", "--k7": "12", "--k8": "2", "--k9": "1", "--k10": "5", "--k11": "3", "--k12": "5", "--k13": "7", "--k14": "3", "--k15": "20", "--k16": "1", "--k17": "17", "--k18": "7", "--k19": "40", "--k20": "9", "--k21": "6", "--k22": "26", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10121" aria-label="Select Ms Noura Al Saud" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07">{"FK-10121"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10121">{"Ms Noura Al Saud"}</a>
                          <span className="arl-mk" title="Foreign national – Form III required">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"SA"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10121" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Tue 27 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"16:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"EP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"First timer"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Tentative"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹6,721.05"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹6,401.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+966 729059763"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"QR 516 · DOH → COK 02:50 · pickup booked"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Guest called · +966 729059763"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10121" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10121">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-17 rt-PDLX gc-first-timer ag-self-booking al-no dd" style={{"--k0": "22", "--k1": "11", "--k2": "5", "--k3": "10", "--k4": "1", "--k5": "3", "--k6": "3", "--k7": "13", "--k8": "2", "--k9": "1", "--k10": "3", "--k11": "1", "--k12": "5", "--k13": "7", "--k14": "3", "--k15": "5", "--k16": "20", "--k17": "17", "--k18": "7", "--k19": "12", "--k20": "6", "--k21": "6", "--k22": "22", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10146" aria-label="Select Mr Ganesh Mihir" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07">{"FK-10146"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10146">{"Mr Ganesh Mihir"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10146" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Sun 25 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"17:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-AP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"AP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"First timer"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Tentative"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹16,160.10"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹13,695.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6046881212"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"IX 434 · SHJ → COK 07:55"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Guest called · +91 6046881212"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10146" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10146">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-17 rt-PDLX gc-repeat-guest ag-self-booking si-front-office si-any al-yes dd" style={{"--k0": "29", "--k1": "16", "--k2": "5", "--k3": "8", "--k4": "1", "--k5": "2", "--k6": "2", "--k7": "14", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "6", "--k13": "7", "--k14": "2", "--k15": "3", "--k16": "14", "--k17": "17", "--k18": "3", "--k19": "28", "--k20": "4", "--k21": "6", "--k22": "7", "--k23": "12", "--k24": "8"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10201" aria-label="Select Mr Karthik Jatin" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10201" data-leads-to="RS-07">{"FK-10201"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10201">{"Mr Karthik Jatin"}</a>
                          <Link className="arl-mk arl-mk--grp" data-leads-to="FD-05" title="Group GRP-0003 – group check-in" to={"/front-desk/fd-05-group-check-in"}>
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#users" />
                            </svg>
                            {"GRP-0003"}
                          </Link>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"512"}</span>
                          </span>
                          <span className="arl-rd arl-rd--no">{"Dirty"}</span>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Sat 24 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"17:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹10,028.82"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,499.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-m="">{"Card guarantee – pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8017357828"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"EK 530 · DXB → COK 03:15"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"Aviv mobile app · self"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-label="Special instructions" data-w2="" data-m="">{"Quiet room"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10201" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10201">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-18 rt-GDLX gc-repeat-guest ag-makemytrip-goibibo al-no" style={{"--k0": "39", "--k1": "13", "--k2": "4", "--k3": "10", "--k4": "1", "--k5": "5", "--k6": "5", "--k7": "15", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "6", "--k13": "5", "--k14": "2", "--k15": "27", "--k16": "11", "--k17": "14", "--k18": "6", "--k19": "34", "--k20": "13", "--k21": "6", "--k22": "31", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10233" aria-label="Select Mr Imran Dhruv" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07">{"FK-10233"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10233">{"Mr Imran Dhruv"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10233" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Tue 27 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"18:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,999.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹49,082.10"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-m="">{"OTA prepaid / virtual card"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9079967739"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"MakeMyTrip / Goibibo · ref MM-930569184"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10233" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10233">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1022 eh-19 rt-GDLX gc-aviv-club-gold ag-southern-skies-travel al-yes" style={{"--k0": "40", "--k1": "27", "--k2": "4", "--k3": "3", "--k4": "1", "--k5": "3", "--k6": "3", "--k7": "16", "--k8": "2", "--k9": "1", "--k10": "2", "--k11": "2", "--k12": "1", "--k13": "8", "--k14": "2", "--k15": "26", "--k16": "2", "--k17": "17", "--k18": "1", "--k19": "14", "--k20": "11", "--k21": "5", "--k22": "27", "--k23": "3", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10239" aria-label="Select Mr Rahul George" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10239" data-leads-to="RS-07">{"FK-10239"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="#sum-FK-10239">{"Mr Rahul George"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"205"}</span>
                          </span>
                          <span className="arl-rd arl-rd--no">{"Not ready"}</span>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 22 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Sun 25 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"19:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"AGENT"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Aviv Club Gold"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Southern Skies Travel"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="arl-mute">{"None (billed)"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹6,559.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Bill to agent"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6063768961"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td c-cp" data-label="Contact person" data-m="">{"Kabir Vijay (Reservations) · +91 8028815203"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Kabir Vijay · Southern Skies Travel"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"King bed"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--primary btn--xs" href="/front-desk/fd-03-check-in/#FK-10239" data-leads-to="FD-03">{"Check-in"}</a>
                          <a className="btn btn--xs" href="#FD-P39-FK-10239">{"Queue"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1024 eh-16 rt-GDLX gc-first-timer ag-self-booking al-yes dd" style={{"--k0": "28", "--k1": "29", "--k2": "4", "--k3": "2", "--k4": "2", "--k5": "3", "--k6": "1", "--k7": "11", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "5", "--k13": "7", "--k14": "1", "--k15": "4", "--k16": "16", "--k17": "17", "--k18": "7", "--k19": "38", "--k20": "13", "--k21": "6", "--k22": "8", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10194" aria-label="Select Mr Sandeep Shaan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10194" data-leads-to="RS-07">{"FK-10194"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0377" data-leads-to="RS-18">{"Mr Sandeep Shaan"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <span className="arl-rms">
                            <span className="fd-rm fd-rm--none" title="Room allocated">{"117"}</span>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 24 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Sun 25 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"16:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"First timer"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Confirmed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹10,382.82"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,799.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9092663957"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"Aviv website · self"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10194" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1028 eh-14 rt-GDLX gc-repeat-guest ag-self-booking si-front-office si-transport si-any al-no dd" style={{"--k0": "38", "--k1": "5", "--k2": "4", "--k3": "10", "--k4": "3", "--k5": "6", "--k6": "3", "--k7": "8", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "6", "--k13": "7", "--k14": "1", "--k15": "14", "--k16": "11", "--k17": "17", "--k18": "7", "--k19": "16", "--k20": "3", "--k21": "6", "--k22": "23", "--k23": "10", "--k24": "3"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10231" aria-label="Select Ms Ayesha Shaan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10231" data-leads-to="RS-07">{"FK-10231"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0135" data-leads-to="RS-18">{"Ms Ayesha Shaan"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10231" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 28 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Sat 31 Oct"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"14:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Confirmed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹33,838.86"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,999.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6085656318"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"AI 681 · BOM → COK 19:30 · pickup booked"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Guest called · +91 6085656318"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Twin beds"}</td>
                        <td className="dt__td c-si" data-label="Special instructions" data-m="">{"Airport pickup, Early check-in"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10231" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1029 eh-13 rt-DLXS gc-first-timer ag-self-booking al-no dd" style={{"--k0": "7", "--k1": "38", "--k2": "3", "--k3": "10", "--k4": "4", "--k5": "7", "--k6": "5", "--k7": "6", "--k8": "1", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "5", "--k13": "7", "--k14": "1", "--k15": "23", "--k16": "19", "--k17": "17", "--k18": "7", "--k19": "19", "--k20": "1", "--k21": "6", "--k22": "34", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10028" aria-label="Select Mr Vishnu Uday" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10028" data-leads-to="RS-07">{"FK-10028"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0050" data-leads-to="RS-18">{"Mr Vishnu Uday"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10028" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 29 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Tue 3 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"13:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"First timer"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Confirmed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹75,880.50"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹13,299.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7021800323"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"6E 6312 · BLR → COK 08:40 · pickup booked"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"WhatsApp · +91 7021800323"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10028" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1030 eh-19 rt-PDLX gc-aviv-club-member ag-sunrise-tours-india al-no" style={{"--k0": "32", "--k1": "23", "--k2": "5", "--k3": "10", "--k4": "5", "--k5": "7", "--k6": "4", "--k7": "17", "--k8": "2", "--k9": "3", "--k10": "2", "--k11": "2", "--k12": "2", "--k13": "10", "--k14": "2", "--k15": "1", "--k16": "8", "--k17": "17", "--k18": "1", "--k19": "22", "--k20": "13", "--k21": "2", "--k22": "3", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10215" aria-label="Select Ms Nimisha Prem" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10215" data-leads-to="RS-07">{"FK-10215"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0106" data-leads-to="RS-18">{"Ms Nimisha Prem"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10215" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Fri 30 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Tue 3 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"19:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"AGENT"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Aviv Club Member"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Sunrise Tours India"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="arl-mute">{"Billed"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,625.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Bill to agent"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7052289196"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-label="Contact person" data-m="">{"Anand Nathan (Reservations) · +91 7028434077"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Anand Nathan · Sunrise Tours India"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10215" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1031 eh-13 rt-GDLX gc-first-timer ag-self-booking fx al-no dd" style={{"--k0": "34", "--k1": "24", "--k2": "4", "--k3": "10", "--k4": "6", "--k5": "7", "--k6": "3", "--k7": "6", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "5", "--k13": "7", "--k14": "2", "--k15": "7", "--k16": "16", "--k17": "4", "--k18": "8", "--k19": "40", "--k20": "13", "--k21": "6", "--k22": "36", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10217" aria-label="Select Ms Noura Al Saud" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10217" data-leads-to="RS-07">{"FK-10217"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0268" data-leads-to="RS-18">{"Ms Noura Al Saud"}</a>
                          <span className="arl-mk" title="Foreign national – Form III required">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"SA"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10217" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 31 Oct"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Tue 3 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"13:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"First timer"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹18,877.46"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,799.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹10,383.00"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Payment link"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+966 729059763"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"WhatsApp · +966 729059763"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10217" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1103 eh-14 rt-DLXS gc-cip ag-periyar-infotech-solutio al-no" style={{"--k0": "25", "--k1": "30", "--k2": "3", "--k3": "10", "--k4": "7", "--k5": "8", "--k6": "3", "--k7": "8", "--k8": "2", "--k9": "1", "--k10": "7", "--k11": "2", "--k12": "4", "--k13": "6", "--k14": "2", "--k15": "1", "--k16": "17", "--k17": "17", "--k18": "2", "--k19": "37", "--k20": "4", "--k21": "4", "--k22": "4", "--k23": "9", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10171" aria-label="Select Mr Shibu Vijay" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10171" data-leads-to="RS-07">{"FK-10171"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0067" data-leads-to="RS-18">{"Mr Shibu Vijay"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10171" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 3 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Fri 6 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"14:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CORP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"CIP"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-m="">{"Periyar Infotech Solutions"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="arl-mute">{"Billed"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹12,760.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Bill to company"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9089287486"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"EK 530 · DXB → COK 03:15"}</td>
                        <td className="dt__td c-cp" data-label="Contact person" data-m="">{"Anand Ranjan (Travel desk) · +91 7086396491"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Anand Ranjan · Periyar Infotech Solutions"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Quiet room"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10171" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1103 eh-17 rt-DLXS gc-repeat-guest ag-self-booking si-transport si-any al-no" style={{"--k0": "10", "--k1": "22", "--k2": "3", "--k3": "10", "--k4": "7", "--k5": "8", "--k6": "3", "--k7": "13", "--k8": "2", "--k9": "1", "--k10": "5", "--k11": "3", "--k12": "6", "--k13": "7", "--k14": "2", "--k15": "27", "--k16": "18", "--k17": "13", "--k18": "4", "--k19": "32", "--k20": "7", "--k21": "6", "--k22": "7", "--k23": "12", "--k24": "2"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10054" aria-label="Select Ms Meera Rahman" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10054" data-leads-to="RS-07">{"FK-10054"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0102" data-leads-to="RS-18">{"Ms Meera Rahman"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10054" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 3 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Fri 6 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"17:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"EP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹12,902.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹45,673.08"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Corporate prepaid"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9066221541"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"IX 434 · SHJ → COK 07:55 · pickup booked"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"Aviv mobile app · self"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-label="Special instructions" data-w2="" data-m="">{"Airport pickup"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10054" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1103 eh-18 rt-PRMS gc-first-timer ag-self-booking fx al-no dd" style={{"--k0": "42", "--k1": "19", "--k2": "7", "--k3": "10", "--k4": "7", "--k5": "8", "--k6": "3", "--k7": "15", "--k8": "1", "--k9": "3", "--k10": "4", "--k11": "2", "--k12": "5", "--k13": "7", "--k14": "2", "--k15": "18", "--k16": "23", "--k17": "8", "--k18": "5", "--k19": "7", "--k20": "13", "--k21": "6", "--k22": "8", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10247" aria-label="Select Mr Liam Walker" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10247" data-leads-to="RS-07">{"FK-10247"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0121" data-leads-to="RS-18">{"Mr Liam Walker"}</a>
                          <span className="arl-mk" title="Foreign national – Form III required">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"AU"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PRMS"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10247" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 3 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Fri 6 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"18:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"First timer"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹56,640.00"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹24,000.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹28,320.00"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Credit / debit card"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+61 774837077"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"Aviv website · self"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10247" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1103 eh-19 rt-DLXS gc-first-timer ag-expedia fx al-no" style={{"--k0": "36", "--k1": "14", "--k2": "3", "--k3": "10", "--k4": "7", "--k5": "8", "--k6": "3", "--k7": "17", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "5", "--k13": "3", "--k14": "2", "--k15": "27", "--k16": "21", "--k17": "15", "--k18": "6", "--k19": "9", "--k20": "6", "--k21": "6", "--k22": "18", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10228" aria-label="Select Ms Irina Petrova" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10228" data-leads-to="RS-07">{"FK-10228"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0360" data-leads-to="RS-18">{"Ms Irina Petrova"}</a>
                          <span className="arl-mk" title="Foreign national – Form III required">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"RU"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10228" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 3 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Fri 6 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"19:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"First timer"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Expedia"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹14,500.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹59,590.00"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-m="">{"OTA prepaid / virtual card"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+7 769846043"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"IX 434 · SHJ → COK 07:55"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Expedia · ref EX-102872320"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10228" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1104 eh-16 rt-PDLX gc-aviv-club-silver ag-agoda fx al-no dd" style={{"--k0": "35", "--k1": "21", "--k2": "5", "--k3": "10", "--k4": "8", "--k5": "8", "--k6": "2", "--k7": "11", "--k8": "1", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "3", "--k13": "1", "--k14": "3", "--k15": "6", "--k16": "9", "--k17": "17", "--k18": "7", "--k19": "3", "--k20": "13", "--k21": "6", "--k22": "1", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10227" aria-label="Select Mr Marco Rossi" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10227" data-leads-to="RS-07">{"FK-10227"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0165" data-leads-to="RS-18">{"Mr Marco Rossi"}</a>
                          <span className="arl-mk" title="Foreign national – Form III required">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"IT"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10227" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 4 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Fri 6 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"16:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Aviv Club Silver"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Agoda"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Tentative"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹18,870.12"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,799.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+39 756785874"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"Agoda · ref AG-582665625"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10227" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1105 eh-15 rt-GDLX gc-repeat-guest ag-self-booking al-no dd" style={{"--k0": "1", "--k1": "17", "--k2": "4", "--k3": "10", "--k4": "9", "--k5": "9", "--k6": "6", "--k7": "10", "--k8": "2", "--k9": "1", "--k10": "1", "--k11": "2", "--k12": "6", "--k13": "7", "--k14": "1", "--k15": "19", "--k16": "3", "--k17": "17", "--k18": "7", "--k19": "21", "--k20": "11", "--k21": "6", "--k22": "24", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10005" aria-label="Select Dr Kavita Dhruv" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10005" data-leads-to="RS-07">{"FK-10005"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0373" data-leads-to="RS-18">{"Dr Kavita Dhruv"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10005" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 5 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Thu 12 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"7"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"15:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"ADV15"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Confirmed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹57,465.59"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹6,799.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7043786133"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Guest called · +91 7043786133"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10005" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1105 eh-18 rt-PDLX rt-GDLX gc-repeat-guest ag-booking-com fx al-no dd" style={{"--k0": "20", "--k1": "40", "--k2": "6", "--k3": "10", "--k4": "9", "--k5": "9", "--k6": "6", "--k7": "15", "--k8": "3", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "6", "--k13": "2", "--k14": "3", "--k15": "2", "--k16": "9", "--k17": "17", "--k18": "7", "--k19": "10", "--k20": "4", "--k21": "6", "--k22": "9", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10133" aria-label="Select Dr Yuki Tanaka" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10133" data-leads-to="RS-07">{"FK-10133"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0191" data-leads-to="RS-18">{"Dr Yuki Tanaka"}</a>
                          <span className="arl-mk" title="Foreign national – Form III required">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"JP"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX + GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10133" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 5 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Thu 12 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"7"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"18:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"3"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Tentative"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹1,39,931.48"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,799.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+81 796176487"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"EK 530 · DXB → COK 03:15"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Booking.com · ref BO-130641251"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10133" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1108 eh-14 rt-GDLX gc-repeat-guest ag-self-booking al-no dd" style={{"--k0": "30", "--k1": "34", "--k2": "4", "--k3": "10", "--k4": "10", "--k5": "10", "--k6": "5", "--k7": "7", "--k8": "1", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "6", "--k13": "7", "--k14": "2", "--k15": "13", "--k16": "14", "--k17": "3", "--k18": "8", "--k19": "35", "--k20": "11", "--k21": "6", "--k22": "25", "--k23": "11", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10206" aria-label="Select Mr Suresh George" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10206" data-leads-to="RS-07">{"FK-10206"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0027" data-leads-to="RS-18">{"Mr Suresh George"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <Link className="arl-assign" data-leads-to="RS-09" to={"/reservation/rs-09-room-assignment"}>
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </Link>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sun 8 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Fri 13 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"14:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹33,335.49"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,499.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹10,029.00"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Payment link"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9081372897"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"UK 879 · BOM → COK 13:20"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Guest called · +91 9081372897"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-m="">{"Vegetarian meals, Non-smoking"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10206" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1109 eh-13 rt-GDLX gc-aviv-club-silver ag-self-booking si-front-office si-spa si-any fx al-no dd" style={{"--k0": "26", "--k1": "7", "--k2": "4", "--k3": "10", "--k4": "11", "--k5": "9", "--k6": "3", "--k7": "6", "--k8": "2", "--k9": "1", "--k10": "6", "--k11": "2", "--k12": "3", "--k13": "7", "--k14": "1", "--k15": "11", "--k16": "13", "--k17": "17", "--k18": "7", "--k19": "1", "--k20": "1", "--k21": "6", "--k22": "7", "--k23": "8", "--k24": "4"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10174" aria-label="Select Mrs Claire Dubois" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10174" data-leads-to="RS-07">{"FK-10174"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0256" data-leads-to="RS-18">{"Mrs Claire Dubois"}</a>
                          <span className="arl-mk" title="Foreign national – Form III required">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"FR"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <Link className="arl-assign" data-leads-to="RS-09" to={"/reservation/rs-09-room-assignment"}>
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </Link>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 9 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Thu 12 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"13:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CLUB"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Aviv Club Silver"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Confirmed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹26,777.12"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,279.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+33 724782631"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"6E 2148 · MAA → COK 15:45"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"Aviv mobile app · self"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Non-smoking, Twin beds"}</td>
                        <td className="dt__td c-si" data-label="Special instructions" data-m="">{"Book Ayurveda session, Adjoining rooms"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10174" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1111 eh-15 rt-DLXS gc-repeat-guest ag-makemytrip-goibibo si-housekeeping si-spa si-any al-no" style={{"--k0": "41", "--k1": "15", "--k2": "3", "--k3": "10", "--k4": "12", "--k5": "10", "--k6": "2", "--k7": "10", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "6", "--k13": "5", "--k14": "2", "--k15": "27", "--k16": "21", "--k17": "10", "--k18": "6", "--k19": "28", "--k20": "2", "--k21": "6", "--k22": "30", "--k23": "12", "--k24": "5"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10240" aria-label="Select Mr Karthik Jatin" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10240" data-leads-to="RS-07">{"FK-10240"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0013" data-leads-to="RS-18">{"Mr Karthik Jatin"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"DLXS"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10240" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 11 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Fri 13 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"15:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹14,500.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹32,509.00"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-m="">{"OTA prepaid / virtual card"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8017357828"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"AI 681 · BOM → COK 19:30"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"MakeMyTrip / Goibibo · ref MM-425102875"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-label="Special instructions" data-m="">{"Book Ayurveda session, Honeymoon set-up"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10240" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1111 eh-17 rt-PRMS gc-first-timer ag-self-booking fx al-no" style={{"--k0": "13", "--k1": "21", "--k2": "7", "--k3": "10", "--k4": "12", "--k5": "11", "--k6": "3", "--k7": "13", "--k8": "1", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "5", "--k13": "7", "--k14": "2", "--k15": "27", "--k16": "22", "--k17": "16", "--k18": "4", "--k19": "2", "--k20": "13", "--k21": "6", "--k22": "7", "--k23": "1", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10086" aria-label="Select Mr Marco Rossi" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10086" data-leads-to="RS-07">{"FK-10086"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0383" data-leads-to="RS-18">{"Mr Marco Rossi"}</a>
                          <span className="arl-mk" title="Foreign national – Form III required">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"IT"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PRMS"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <Link className="arl-assign" data-leads-to="RS-09" to={"/reservation/rs-09-room-assignment"}>
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </Link>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 11 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Sat 14 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"17:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"First timer"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹22,099.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹80,826.46"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Corporate prepaid"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+39 751143945"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"Aviv mobile app · self"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Extra pillows"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10086" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1114 eh-13 rt-PDLX gc-first-timer ag-booking-com al-no" style={{"--k0": "23", "--k1": "2", "--k2": "5", "--k3": "10", "--k4": "13", "--k5": "12", "--k6": "1", "--k7": "5", "--k8": "1", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "5", "--k13": "2", "--k14": "2", "--k15": "27", "--k16": "15", "--k17": "6", "--k18": "6", "--k19": "24", "--k20": "4", "--k21": "6", "--k22": "10", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10147" aria-label="Select Mrs Anitha Rahman" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10147" data-leads-to="RS-07">{"FK-10147"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0250" data-leads-to="RS-18">{"Mrs Anitha Rahman"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <Link className="arl-assign" data-leads-to="RS-09" to={"/reservation/rs-09-room-assignment"}>
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </Link>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 14 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Sun 15 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"13:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"First timer"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,599.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹12,036.82"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-m="">{"OTA prepaid / virtual card"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7075344230"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"EK 530 · DXB → COK 03:15"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Booking.com · ref BO-231343580"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10147" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1114 eh-19 rt-GDLX gc-first-timer ag-booking-com si-front-office si-housekeeping si-any al-no dd" style={{"--k0": "21", "--k1": "6", "--k2": "4", "--k3": "10", "--k4": "13", "--k5": "15", "--k6": "5", "--k7": "17", "--k8": "3", "--k9": "1", "--k10": "5", "--k11": "3", "--k12": "5", "--k13": "2", "--k14": "3", "--k15": "17", "--k16": "6", "--k17": "17", "--k18": "7", "--k19": "15", "--k20": "13", "--k21": "6", "--k22": "12", "--k23": "12", "--k24": "6"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10139" aria-label="Select Mr Biju Joseph" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10139" data-leads-to="RS-07">{"FK-10139"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0201" data-leads-to="RS-18">{"Mr Biju Joseph"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10139" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sat 14 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Thu 19 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"5"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"19:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"3"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-EP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"EP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"First timer"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--tentative">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#clock" />
                            </svg>
                            {"Tentative"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹49,329.90"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,201.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6078556607"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Booking.com · ref BO-301831646"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-label="Special instructions" data-m="">{"Flowers in room, Early check-in"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10139" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1115 eh-12 rt-PDLX gc-repeat-guest ag-booking-com fx al-no" style={{"--k0": "18", "--k1": "39", "--k2": "5", "--k3": "10", "--k4": "14", "--k5": "14", "--k6": "3", "--k7": "3", "--k8": "2", "--k9": "3", "--k10": "4", "--k11": "2", "--k12": "6", "--k13": "2", "--k14": "2", "--k15": "27", "--k16": "14", "--k17": "9", "--k18": "6", "--k19": "8", "--k20": "13", "--k21": "6", "--k22": "13", "--k23": "9", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10100" aria-label="Select Mr Wei Tan" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10100" data-leads-to="RS-07">{"FK-10100"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0010" data-leads-to="RS-18">{"Mr Wei Tan"}</a>
                          <span className="arl-mk" title="Foreign national – Form III required">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"SG"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <Link className="arl-assign" data-leads-to="RS-09" to={"/reservation/rs-09-room-assignment"}>
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </Link>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Sun 15 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Wed 18 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"12:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Booking.com"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,499.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹30,086.46"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-m="">{"OTA prepaid / virtual card"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+65 760328823"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Booking.com · ref BO-413891889"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Quiet room"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10100" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1116 eh-21 rt-GDLX gc-repeat-guest ag-makemytrip-goibibo al-no" style={{"--k0": "12", "--k1": "1", "--k2": "4", "--k3": "10", "--k4": "15", "--k5": "13", "--k6": "1", "--k7": "18", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "6", "--k13": "5", "--k14": "2", "--k15": "27", "--k16": "11", "--k17": "5", "--k18": "6", "--k19": "13", "--k20": "9", "--k21": "6", "--k22": "28", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10085" aria-label="Select Mr Amit Chirag" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10085" data-leads-to="RS-07">{"FK-10085"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0262" data-leads-to="RS-18">{"Mr Amit Chirag"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <Link className="arl-assign" data-leads-to="RS-09" to={"/reservation/rs-09-room-assignment"}>
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </Link>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Mon 16 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Tue 17 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"21:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,999.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹11,728.02"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-m="">{"OTA prepaid / virtual card"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6050175895"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"QR 516 · DOH → COK 02:50 · pickup booked"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"MakeMyTrip / Goibibo · ref MM-407702858"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10085" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1117 eh-19 rt-PDLX gc-first-timer ag-makemytrip-goibibo al-no" style={{"--k0": "5", "--k1": "32", "--k2": "5", "--k3": "10", "--k4": "16", "--k5": "15", "--k6": "2", "--k7": "17", "--k8": "1", "--k9": "2", "--k10": "4", "--k11": "2", "--k12": "5", "--k13": "5", "--k14": "2", "--k15": "27", "--k16": "9", "--k17": "7", "--k18": "6", "--k19": "31", "--k20": "5", "--k21": "6", "--k22": "32", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10016" aria-label="Select Ms Sreelakshmi Krish" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10016" data-leads-to="RS-07">{"FK-10016"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0346" data-leads-to="RS-18">{"Ms Sreelakshmi Krish"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"PDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <Link className="arl-assign" data-leads-to="RS-09" to={"/reservation/rs-09-room-assignment"}>
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </Link>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Tue 17 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Thu 19 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"19:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"First timer"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"MakeMyTrip / Goibibo"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--ok">{"Paid ✓"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,799.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹22,984.04"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-m="">{"OTA prepaid / virtual card"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 9050900032"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"EK 530 · DXB → COK 03:15 · pickup booked"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"MakeMyTrip / Goibibo · ref MM-979838343"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10016" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1118 eh-18 rt-GDLX gc-repeat-guest ag-self-booking al-no dd" style={{"--k0": "37", "--k1": "37", "--k2": "4", "--k3": "10", "--k4": "17", "--k5": "18", "--k6": "4", "--k7": "15", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "6", "--k13": "7", "--k14": "1", "--k15": "16", "--k16": "11", "--k17": "17", "--k18": "7", "--k19": "23", "--k20": "4", "--k21": "6", "--k22": "35", "--k23": "5", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10229" aria-label="Select Mr Vishnu Dev" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10229" data-leads-to="RS-07">{"FK-10229"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0308" data-leads-to="RS-18">{"Mr Vishnu Dev"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <Link className="arl-assign" data-leads-to="RS-09" to={"/reservation/rs-09-room-assignment"}>
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </Link>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Wed 18 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Sun 22 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"4"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"18:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Confirmed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹39,643.28"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,999.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 7070611900"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"EK 530 · DXB → COK 03:15"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"WhatsApp · +91 7070611900"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-m="">{"Late check-out, Non-smoking"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10229" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1119 eh-12 rt-GDLX gc-repeat-guest ag-self-booking si-transport si-any al-no dd" style={{"--k0": "31", "--k1": "36", "--k2": "4", "--k3": "10", "--k4": "18", "--k5": "17", "--k6": "2", "--k7": "4", "--k8": "2", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "6", "--k13": "7", "--k14": "1", "--k15": "9", "--k16": "11", "--k17": "17", "--k18": "7", "--k19": "11", "--k20": "13", "--k21": "6", "--k22": "7", "--k23": "12", "--k24": "2"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10208" aria-label="Select Mr Unni Wilson" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10208" data-leads-to="RS-07">{"FK-10208"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0182" data-leads-to="RS-18">{"Mr Unni Wilson"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <Link className="arl-assign" data-leads-to="RS-09" to={"/reservation/rs-09-room-assignment"}>
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </Link>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 19 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Sat 21 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"12:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Repeat guest"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Confirmed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹19,821.64"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,999.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6014463340"}</td>
                        <td className="dt__td c-trv" data-e="">{"–"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"Aviv mobile app · self"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-label="Special instructions" data-w2="" data-m="">{"Airport pickup"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10208" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1119 eh-15 rt-GDLX gc-aviv-club-silver ag-spice-coast-journeys fx al-no" style={{"--k0": "24", "--k1": "10", "--k2": "4", "--k3": "10", "--k4": "18", "--k5": "16", "--k6": "1", "--k7": "10", "--k8": "2", "--k9": "1", "--k10": "2", "--k11": "2", "--k12": "3", "--k13": "9", "--k14": "2", "--k15": "1", "--k16": "2", "--k17": "17", "--k18": "1", "--k19": "5", "--k20": "10", "--k21": "3", "--k22": "5", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10149" aria-label="Select Ms Elsa Lindberg" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10149" data-leads-to="RS-07">{"FK-10149"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0114" data-leads-to="RS-18">{"Ms Elsa Lindberg"}</a>
                          <span className="arl-mk" title="Foreign national – Form III required">
                            <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#globe" />
                            </svg>
                            {"SE"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <Link className="arl-assign" data-leads-to="RS-09" to={"/reservation/rs-09-room-assignment"}>
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </Link>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Thu 19 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Fri 20 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"15:30"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"AGENT"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Aviv Club Silver"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Spice Coast Journeys"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="arl-mute">{"Billed"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹6,559.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Bill to agent"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+46 709160433"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"SG 3021 · HYD → COK 17:10"}</td>
                        <td className="dt__td c-cp" data-label="Contact person" data-m="">{"Anand Ranjan (Reservations) · +91 9096928202"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-m="">{"Anand Ranjan · Spice Coast Journeys"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10149" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1120 eh-13 rt-GDLX gc-first-timer ag-self-booking al-no dd" style={{"--k0": "17", "--k1": "3", "--k2": "4", "--k3": "10", "--k4": "19", "--k5": "18", "--k6": "2", "--k7": "5", "--k8": "1", "--k9": "1", "--k10": "4", "--k11": "2", "--k12": "5", "--k13": "7", "--k14": "2", "--k15": "25", "--k16": "12", "--k17": "1", "--k18": "9", "--k19": "18", "--k20": "2", "--k21": "6", "--k22": "33", "--k23": "12", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10098" aria-label="Select Mrs Aswathy Nirav" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10098" data-leads-to="RS-07">{"FK-10098"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0034" data-leads-to="RS-18">{"Mrs Aswathy Nirav"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <a className="arl-assign" href="/reservation/rs-09-room-assignment/#FK-10098" data-leads-to="RS-09">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </a>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Fri 20 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Sun 22 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"2"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"13:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"1"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"0"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"BAR-CP"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"First timer"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#shield-check" />
                            </svg>
                            {"Guaranteed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹9,556.64"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹8,099.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-label="Advance received" data-w2="" data-m="">{"₹9,557.00"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"UPI"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 6089195906"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-w2="" data-m="">{"AI 681 · BOM → COK 19:30"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"WhatsApp · +91 6089195906"}</td>
                        <td className="dt__td c-pref" data-e="">{"–"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10098" data-leads-to="RS-07">{"Open"}</a>
                        </td>
                      </tr>
                      <tr className="ad-1120 eh-16 rt-GDLX gc-aviv-club-member ag-self-booking al-no dd" style={{"--k0": "27", "--k1": "26", "--k2": "4", "--k3": "10", "--k4": "19", "--k5": "19", "--k6": "3", "--k7": "11", "--k8": "2", "--k9": "2", "--k10": "6", "--k11": "2", "--k12": "2", "--k13": "7", "--k14": "1", "--k15": "10", "--k16": "10", "--k17": "17", "--k18": "7", "--k19": "29", "--k20": "12", "--k21": "6", "--k22": "7", "--k23": "7", "--k24": "9"}}>
                        <td className="dt__td arl-bk" data-label="Booking no." data-w2="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <input className="fd-sel" type="checkbox" name="sel" value="FK-10175" aria-label="Select Mr Prakash Jacob" />
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10175" data-leads-to="RS-07">{"FK-10175"}</a>
                        </td>
                        <td className="dt__td arl-gn" data-label="Guest name" data-w2="">
                          <a className="fd-link" href="/reservation/rs-18-guest-profile/#GP-0323" data-leads-to="RS-18">{"Mr Prakash Jacob"}</a>
                        </td>
                        <td className="dt__td" data-label="Room type" data-w2="">{"GDLX"}</td>
                        <td className="dt__td" data-label="Room no." data-w2="">
                          <Link className="arl-assign" data-leads-to="RS-09" to={"/reservation/rs-09-room-assignment"}>
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#plus" />
                            </svg>
                            {"Assign"}
                          </Link>
                        </td>
                        <td className="dt__td" data-label="Arrival" data-w2="">{"Fri 20 Nov"}</td>
                        <td className="dt__td" data-label="Departure" data-w2="">{"Mon 23 Nov"}</td>
                        <td className="dt__td dt__td--right" data-label="Nights" data-m="">{"3"}</td>
                        <td className="dt__td" data-label="ETA" data-m="">{"16:00"}</td>
                        <td className="dt__td dt__td--right" data-label="Adults" data-m="">{"2"}</td>
                        <td className="dt__td dt__td--right" data-label="Child" data-m="">{"1"}</td>
                        <td className="dt__td" data-label="Rate plan" data-w2="" data-m="">{"CLUB"}</td>
                        <td className="dt__td" data-label="Meal" data-m="">{"CP"}</td>
                        <td className="dt__td" data-label="Guest class" data-w2="">{"Aviv Club Member"}</td>
                        <td className="dt__td arl-ag" data-label="Agent / corporate" data-w2="" data-m="">{"Self booking"}</td>
                        <td className="dt__td" data-label="Status" data-w2="" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Confirmed"}
                          </span>
                        </td>
                        <td className="dt__td" data-label="Payment" data-w2="" data-m="">
                          <span className="fd-money--due">{"Due ₹26,247.79"}</span>
                        </td>
                        <td className="dt__td dt__td--right c-tar" data-label="Room tariff" data-w2="" data-m="">
                          {"₹7,919.00 "}
                          <small>{"++"}</small>
                        </td>
                        <td className="dt__td dt__td--right c-adv" data-e="">{"–"}</td>
                        <td className="dt__td c-pm" data-label="Payment mode" data-w2="" data-m="">{"Pay at hotel"}</td>
                        <td className="dt__td c-mob" data-label="Mobile no." data-w2="" data-m="">{"+91 8017976268"}</td>
                        <td className="dt__td c-trv" data-label="Travel details" data-m="">{"Vande Bharat 20634 · TVC → Ernakulam Jn 12:35"}</td>
                        <td className="dt__td c-cp" data-e="">{"–"}</td>
                        <td className="dt__td c-cal" data-label="Caller information" data-w2="" data-m="">{"Aviv mobile app · self"}</td>
                        <td className="dt__td c-pref" data-label="Guest preferences" data-w2="" data-m="">{"Non-smoking, High floor"}</td>
                        <td className="dt__td c-si" data-e="">{"–"}</td>
                        <td className="dt__td arl-act" data-a="">
                          <a className="btn btn--xs" href="/reservation/rs-07-reservation-details/#FK-10175" data-leads-to="RS-07">{"Open"}</a>
                        </td>
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
                    {" for the arrival and ETA range, room allocation, agent / corporate, guest class, room type, special instructions and extra columns."}
                  </span>
                </p>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10006" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10006-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10006-t">{"Mr Ravi Kabir – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10006 · arrives today 09:15"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <span className="pill pill--vip">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#star" />
                        </svg>
                        {"Aviv Club Silver"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10006" data-leads-to="RS-07">{"FK-10006"}</a>
                          {" · Booking.com"}
                        </dd>
                        {" "}
                        <dt>{"Partner ref."}</dt>
                        {" "}
                        <dd className="num">
                          {"BO-446947201 "}
                          <span className="field__hint">{"Booking.com · from the channel manager"}</span>
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"4 nights · departs Mon 26 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>
                          {"1 × PDLX · "}
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"505"}</span>
                        </dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"1 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Best available rate – with breakfast · CP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹9,202.82 · received ₹43,277.68 · due ₹0"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"09:15"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"–"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+91 6087734078 · ravi.kabir289@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10006" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10006" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10006" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10006" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10091" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10091-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10091-t">{"Mr Srinivas Manav – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10091 · arrives today 09:35"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <span className="pill pill--vip">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#star" />
                        </svg>
                        {"Aviv Club Gold"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10091" data-leads-to="RS-07">{"FK-10091"}</a>
                          {" · Email"}
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"5 nights · departs Tue 27 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>
                          {"1 × GDLX · "}
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"305"}</span>
                        </dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"2 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Member rate · CP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹7,558.95 · received ₹0 · due ₹7,558.95"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"09:35"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"–"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+91 7088495156 · srinivas.manav359@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10091" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10091" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10091" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10091" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10216" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10216-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10216-t">{"Mrs Swathi Sahil – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10216 · arrives today 12:00"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <span className="pill pill--vip">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#star" />
                        </svg>
                        {"VIP"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07">{"FK-10216"}</a>
                          {" · Booking.com"}
                        </dd>
                        {" "}
                        <dt>{"Partner ref."}</dt>
                        {" "}
                        <dd className="num">
                          {"BO-293317163 "}
                          <span className="field__hint">{"Booking.com · from the channel manager"}</span>
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"1 night · departs Fri 23 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>{"1 × PDLX · to be assigned"}</dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"2 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Best available rate – with breakfast · CP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹10,028.82 · received ₹10,028.82 · due ₹0"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"12:00"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"Anniversary – flowers and a welcome cake in the room"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+91 9095851502 · swathi.sahil17@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10216" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10216" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10216" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10216" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10216" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10216" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10216-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10216" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10216-t">{"Add to queue – Mrs Swathi Sahil"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Mrs Swathi Sahil · FK-10216"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f2">{"Arrived at"}</label>
                        <input className="field__input num" id="f2" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"– · 1 × PDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f4">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f4" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f5">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f5" name="prio" required={true} defaultValue={"VIP"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f7">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f7" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f8">{"Note"}</label>
                        <input className="field__input" id="f8" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10013" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10013-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10013-t">{"Mrs Athira Nirav – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10013 · arrives today 12:30"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <span className="pill pill--vip">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#star" />
                        </svg>
                        {"Aviv Club Member"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07">{"FK-10013"}</a>
                          {" · Walk-in"}
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"4 nights · departs Mon 26 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>
                          {"1 × PRMS · "}
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"517"}</span>
                        </dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"2 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Best available rate – with breakfast · CP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹28,320 · received ₹0 · due ₹28,320"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"12:30"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"–"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+91 7033724972 · athira.nirav232@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10013" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10013" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10013" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10013" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10013" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10013" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10013-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10013" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10013-t">{"Add to queue – Mrs Athira Nirav"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Mrs Athira Nirav · FK-10013"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f10">{"Arrived at"}</label>
                        <input className="field__input num" id="f10" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"517 · 1 × PRMS"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f12">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f12" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f13">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f13" name="prio" required={true} defaultValue={"High"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f15">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f15" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f16">{"Note"}</label>
                        <input className="field__input" id="f16" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10015" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10015-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10015-t">{"Mr Dileep Kurian – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10015 · arrives today 13:00"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <span className="pill pill--vip">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#star" />
                        </svg>
                        {"Aviv Club Gold"}
                      </span>
                      {" "}
                      <span className="fd-flag fd-flag--group" title="Group GRP-0003">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#users" />
                        </svg>
                        {"GRP-0003"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07">{"FK-10015"}</a>
                          {" · Booking.com"}
                        </dd>
                        {" "}
                        <dt>{"Partner ref."}</dt>
                        {" "}
                        <dd className="num">
                          {"BO-523266015 "}
                          <span className="field__hint">{"Booking.com · from the channel manager"}</span>
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"2 nights · departs Sat 24 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>{"1 × GDLX · to be assigned"}</dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"2 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Best available rate – with breakfast · CP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹9,438.82 · received ₹0 · due ₹9,438.82"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"13:00"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"Adjoining rooms with the surveyors' party"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+91 8052147906 · dileep.kurian337@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10015" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10015" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10015" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10015" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10015" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10015" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10015-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10015" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10015-t">{"Add to queue – Mr Dileep Kurian"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Mr Dileep Kurian · FK-10015"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f18">{"Arrived at"}</label>
                        <input className="field__input num" id="f18" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"– · 1 × GDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f20">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f20" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f21">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f21" name="prio" required={true} defaultValue={"High"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f23">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f23" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f24">{"Note"}</label>
                        <input className="field__input" id="f24" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10022" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10022-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10022-t">{"Ms Lakshmi Mathew – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10022 · arrives today 13:30"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07">{"FK-10022"}</a>
                          {" · Email"}
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"5 nights · departs Tue 27 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>{"1 × PDLX · to be assigned"}</dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"2 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Advance purchase – 15% off · CP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹7,585.20 · received ₹41,409.04 · due ₹0"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"13:30"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"–"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+91 7075512688 · lakshmi.mathew52@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10022" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10022" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10022" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10022" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10022" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10022" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10022-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10022" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10022-t">{"Add to queue – Ms Lakshmi Mathew"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Ms Lakshmi Mathew · FK-10022"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f26">{"Arrived at"}</label>
                        <input className="field__input num" id="f26" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"– · 1 × PDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f28">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f28" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f29">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f29" name="prio" required={true} defaultValue={"High"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f31">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f31" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f32">{"Note"}</label>
                        <input className="field__input" id="f32" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10034" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10034-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10034-t">{"Ms Pooja Neil – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10034 · arrives today 14:00"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <span className="pill pill--vip">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#star" />
                        </svg>
                        {"Aviv Club Gold"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10034" data-leads-to="RS-07">{"FK-10034"}</a>
                          {" · Travel agent"}
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"5 nights · departs Tue 27 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>
                          {"1 × GDLX · "}
                          <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"106"}</span>
                        </dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"2 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Travel agent net rate · CP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Agent – Kerala Trails Travel Co"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹0 · received ₹0 · due ₹0"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"14:00"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"–"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+91 9078326259 · pooja.neil99@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10034" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10034" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10034" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10034" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10034" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10034" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10034-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10034" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10034-t">{"Add to queue – Ms Pooja Neil"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Ms Pooja Neil · FK-10034"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f34">{"Arrived at"}</label>
                        <input className="field__input num" id="f34" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"106 · 1 × GDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f36">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f36" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f37">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f37" name="prio" required={true} defaultValue={"High"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f39">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f39" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f40">{"Note"}</label>
                        <input className="field__input" id="f40" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10039" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10039-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10039-t">{"Mr Dileep Pranav – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10039 · arrives today 14:30"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07">{"FK-10039"}</a>
                          {" · Expedia"}
                        </dd>
                        {" "}
                        <dt>{"Partner ref."}</dt>
                        {" "}
                        <dd className="num">
                          {"EX-730809750 "}
                          <span className="field__hint">{"Expedia · from the channel manager"}</span>
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"1 night · departs Fri 23 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>{"3 × PDLX · to be assigned"}</dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"7 A · 2 C"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Best available rate – with breakfast · CP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹33,980.46 · received ₹0 · due ₹33,980.46"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"14:30"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"–"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+91 9086966722 · dileep.pranav347@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10039" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10039" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10039" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10039" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10039" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10039" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10039-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10039" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10039-t">{"Add to queue – Mr Dileep Pranav"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Mr Dileep Pranav · FK-10039"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f42">{"Arrived at"}</label>
                        <input className="field__input num" id="f42" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"– · 3 × PDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f44">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f44" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f45">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f45" name="prio" required={true} defaultValue={"High"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f47">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f47" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f48">{"Note"}</label>
                        <input className="field__input" id="f48" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10067" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10067-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10067-t">{"Mr Lukas Keller – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10067 · arrives today 15:00"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <span className="fd-flag" title="Foreign national – Form III required">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#globe" />
                        </svg>
                        {"Swiss"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10067" data-leads-to="RS-07">{"FK-10067"}</a>
                          {" · Phone"}
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"5 nights · departs Tue 27 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>
                          {"1 × PDLX · "}
                          <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"314"}</span>
                        </dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"2 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Best available rate – with breakfast · CP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹10,028.82 · received ₹0 · due ₹10,028.82"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"15:00"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"Honeymoon – quiet room, flowers"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+41 720811894 · lukas.keller210@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10067" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10067" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10067" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10067" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10067" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10067" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10067-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10067" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10067-t">{"Add to queue – Mr Lukas Keller"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Mr Lukas Keller · FK-10067"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f50">{"Arrived at"}</label>
                        <input className="field__input num" id="f50" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"314 · 1 × PDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f52">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f52" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f53">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f53" name="prio" required={true} defaultValue={"High"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f55">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f55" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f56">{"Note"}</label>
                        <input className="field__input" id="f56" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10089" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10089-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10089-t">{"Dr Shruti Manav – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10089 · arrives today 15:30"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <span className="pill pill--vip">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#star" />
                        </svg>
                        {"Aviv Club Silver"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07">{"FK-10089"}</a>
                          {" · MakeMyTrip / Goibibo"}
                        </dd>
                        {" "}
                        <dt>{"Partner ref."}</dt>
                        {" "}
                        <dd className="num">
                          {"MM-418649606 "}
                          <span className="field__hint">{"MakeMyTrip / Goibibo · from the channel manager"}</span>
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"4 nights · departs Mon 26 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>{"1 × PDLX · to be assigned"}</dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"2 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Best available rate – room only · EP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹7,246.05 · received ₹0 · due ₹7,246.05"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"15:30"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"–"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+91 7079600624 · shruti.manav353@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10089" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10089" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10089" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10089" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10089" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10089" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10089-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10089" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10089-t">{"Add to queue – Dr Shruti Manav"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Dr Shruti Manav · FK-10089"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f58">{"Arrived at"}</label>
                        <input className="field__input num" id="f58" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"– · 1 × PDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f60">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f60" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f61">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f61" name="prio" required={true} defaultValue={"High"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f63">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f63" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f64">{"Note"}</label>
                        <input className="field__input" id="f64" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10096" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10096-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10096-t">{"Mr Hans Mueller – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10096 · arrives today 16:00"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <span className="fd-flag" title="Foreign national – Form III required">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#globe" />
                        </svg>
                        {"German· OCI"}
                      </span>
                      {" "}
                      <span className="fd-flag fd-flag--group" title="Group GRP-0003">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#users" />
                        </svg>
                        {"GRP-0003"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10096" data-leads-to="RS-07">{"FK-10096"}</a>
                          {" · Phone"}
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"2 nights · departs Sat 24 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>
                          {"2 × GDLX · "}
                          <span className="fd-rms" title="Rooms 302, 111">
                            <span className="fd-rm fd-rm--VI" title="Vacant inspected">{"302"}</span>
                            <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"111"}</span>
                          </span>
                        </dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"4 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Best available rate – with breakfast · CP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹18,877.64 · received ₹0 · due ₹18,877.64"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"16:00"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"–"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+49 782572599 · hans.mueller108@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10096" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10096" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10096" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10096" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10096" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10096" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10096-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10096" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10096-t">{"Add to queue – Mr Hans Mueller"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Mr Hans Mueller · FK-10096"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f66">{"Arrived at"}</label>
                        <input className="field__input num" id="f66" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"302, 111 · 2 × GDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f68">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f68" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f69">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f69" name="prio" required={true} defaultValue={"High"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f71">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f71" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f72">{"Note"}</label>
                        <input className="field__input" id="f72" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10121" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10121-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10121-t">{"Ms Noura Al Saud – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10121 · arrives today 16:30"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <span className="fd-flag" title="Foreign national – Form III required">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#globe" />
                        </svg>
                        {"Saudi"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07">{"FK-10121"}</a>
                          {" · Phone"}
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"5 nights · departs Tue 27 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>{"1 × GDLX · to be assigned"}</dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"2 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Best available rate – room only · EP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹6,721.05 · received ₹0 · due ₹6,721.05"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"16:30"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"–"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+966 729059763 · noura.alsaud268@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10121" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10121" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10121" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10121" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10121" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10121" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10121-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10121" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10121-t">{"Add to queue – Ms Noura Al Saud"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Ms Noura Al Saud · FK-10121"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f74">{"Arrived at"}</label>
                        <input className="field__input num" id="f74" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"– · 1 × GDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f76">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f76" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f77">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f77" name="prio" required={true} defaultValue={"High"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f79">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f79" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f80">{"Note"}</label>
                        <input className="field__input" id="f80" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10146" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10146-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10146-t">{"Mr Ganesh Mihir – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10146 · arrives today 17:00"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07">{"FK-10146"}</a>
                          {" · Phone"}
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"3 nights · departs Sun 25 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>{"1 × PDLX · to be assigned"}</dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"2 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Best available rate – all meals · AP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹16,160.10 · received ₹0 · due ₹16,160.10"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"17:00"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"–"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+91 6046881212 · ganesh.mihir299@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10146" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10146" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10146" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10146" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10146" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10146" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10146-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10146" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10146-t">{"Add to queue – Mr Ganesh Mihir"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Mr Ganesh Mihir · FK-10146"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f82">{"Arrived at"}</label>
                        <input className="field__input num" id="f82" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"– · 1 × PDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f84">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f84" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f85">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f85" name="prio" required={true} defaultValue={"High"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f87">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f87" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f88">{"Note"}</label>
                        <input className="field__input" id="f88" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10201" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10201-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10201-t">{"Mr Karthik Jatin – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10201 · arrives today 17:30"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <span className="fd-flag fd-flag--group" title="Group GRP-0003">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#users" />
                        </svg>
                        {"GRP-0003"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10201" data-leads-to="RS-07">{"FK-10201"}</a>
                          {" · Aviv mobile app"}
                        </dd>
                        {" "}
                        <dt>{"Partner ref."}</dt>
                        {" "}
                        <dd className="num">
                          {"MR-84092234 "}
                          <span className="field__hint">{"Aviv mobile app · from the channel manager"}</span>
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"2 nights · departs Sat 24 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>
                          {"1 × PDLX · "}
                          <span className="fd-rm fd-rm--VD" title="Vacant dirty">{"512"}</span>
                        </dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"2 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Best available rate – with breakfast · CP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹10,028.82 · received ₹0 · due ₹10,028.82"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"17:30"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"Quiet room away from the lift"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+91 8017357828 · karthik.jatin13@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10201" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10201" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10201" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10201" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10201" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10201" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10201-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10201" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10201-t">{"Add to queue – Mr Karthik Jatin"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Mr Karthik Jatin · FK-10201"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f90">{"Arrived at"}</label>
                        <input className="field__input num" id="f90" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"512 · 1 × PDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f92">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f92" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f93">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f93" name="prio" required={true} defaultValue={"High"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f95">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f95" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f96">{"Note"}</label>
                        <input className="field__input" id="f96" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10233" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10233-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10233-t">{"Mr Imran Dhruv – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10233 · arrives today 18:00"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07">{"FK-10233"}</a>
                          {" · MakeMyTrip / Goibibo"}
                        </dd>
                        {" "}
                        <dt>{"Partner ref."}</dt>
                        {" "}
                        <dd className="num">
                          {"MM-930569184 "}
                          <span className="field__hint">{"MakeMyTrip / Goibibo · from the channel manager"}</span>
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"5 nights · departs Tue 27 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>{"1 × GDLX · to be assigned"}</dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"2 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Best available rate – with breakfast · CP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Guest"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹9,438.82 · received ₹49,082.10 · due ₹0"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"18:00"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"–"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+91 9079967739 · imran.dhruv247@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10233" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10233" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10233" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10233" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10233" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10233" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10233-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10233" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10233-t">{"Add to queue – Mr Imran Dhruv"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Mr Imran Dhruv · FK-10233"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f98">{"Arrived at"}</label>
                        <input className="field__input num" id="f98" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"– · 1 × GDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f100">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f100" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f101">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f101" name="prio" required={true} defaultValue={"High"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f103">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f103" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f104">{"Note"}</label>
                        <input className="field__input" id="f104" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="sum-FK-10239" data-code="FD-02" role="dialog" aria-modal="true" aria-labelledby="sum-FK-10239-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="sum-FK-10239-t">{"Mr Rahul George – booking summary"}</h2>
                      <p className="modal__desc">{"FK-10239 · arrives today 19:00"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="fd-summary">
                      <span className="pill pill--vip">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#star" />
                        </svg>
                        {"Aviv Club Gold"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Booking"}</dt>
                        <dd>
                          <a className="fd-link" href="/reservation/rs-07-reservation-details/#FK-10239" data-leads-to="RS-07">{"FK-10239"}</a>
                          {" · Travel agent"}
                        </dd>
                        <dt>{"Stay"}</dt>
                        <dd>{"3 nights · departs Sun 25 Oct"}</dd>
                        <dt>{"Room"}</dt>
                        <dd>
                          {"1 × GDLX · "}
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"205"}</span>
                        </dd>
                        <dt>{"Guests"}</dt>
                        <dd>{"2 A"}</dd>
                        <dt>{"Plan"}</dt>
                        <dd>{"Travel agent net rate · CP"}</dd>
                        <dt>{"Bill to"}</dt>
                        <dd>{"Agent – Southern Skies Travel"}</dd>
                        <dt>{"Deposit"}</dt>
                        <dd>{"Required ₹0 · received ₹0 · due ₹0"}</dd>
                        <dt>{"ETA"}</dt>
                        <dd>{"19:00"}</dd>
                        <dt>{"Requests"}</dt>
                        <dd>{"–"}</dd>
                        <dt>{"Contact"}</dt>
                        <dd>{"+91 6063768961 · rahul.george197@example.com"}</dd>
                      </dl>
                      <div className="row">
                        <a className="btn btn--primary" href="/front-desk/fd-03-check-in/#FK-10239" data-leads-to="FD-03">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#key" />
                          </svg>
                          {"Check-in"}
                        </a>
                        <a className="btn" href="/front-desk/fd-02-arrivals/#FD-P39-FK-10239" data-leads-to="FD-P39">{"Add to queue"}</a>
                        <a className="btn" href="/reservation/rs-09-room-assignment/#FK-10239" data-leads-to="RS-09">{"Assign room"}</a>
                        <a className="btn" href="/reservation/rs-07-reservation-details/#FK-10239" data-leads-to="RS-07">{"View booking"}</a>
                        {" "}
                        <a className="btn" href="/front-desk/fd-o01-registration-card/#FK-10239" data-leads-to="FD-O01" title="Open the Guest Registration Card to print">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#printer" />
                          </svg>
                          {"Print GRC"}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="FD-P39-FK-10239" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10239-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10239" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10239-t">{"Add to queue – Mr Rahul George"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Mr Rahul George · FK-10239"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f106">{"Arrived at"}</label>
                        <input className="field__input num" id="f106" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"205 · 1 × GDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f108">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f108" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f109">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f109" name="prio" required={true} defaultValue={"High"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f111">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f111" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f112">{"Note"}</label>
                        <input className="field__input" id="f112" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P39" data-code="FD-P39" role="dialog" aria-modal="true" aria-labelledby="FD-P39-FK-10216-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-02-arrivals/queue.html#q-FK-10216" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P39-FK-10216-t">{"Add to queue – Mrs Swathi Sahil"}</h2>
                      <p className="modal__desc">{"Guest has arrived and the room is not ready. Housekeeping is asked to clean the room first."}</p>
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
                        <span className="field__label">{"Guest / reservation"}</span>
                        <div className="fd-display">{"Mrs Swathi Sahil · FK-10216"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f114">{"Arrived at"}</label>
                        <input className="field__input num" id="f114" type="time" name="arrived" defaultValue={"09:42"} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Preferred room / type"}</span>
                        <div className="fd-display">{"– · 1 × PDLX"}</div>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f116">
                          {"Promised ready time "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input num" id="f116" type="time" name="promised" required={true} defaultValue={"10:12"} />
                        <span className="field__hint">{"Now + 30 minutes"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f117">
                          {"Priority to housekeeping "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f117" name="prio" required={true} defaultValue={"VIP"}>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="VIP">{"VIP"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Notify guest when ready"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="SMS" />
                            <span className="check__box" />
                            {"SMS"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="notify" value="WhatsApp" defaultChecked={true} />
                            <span className="check__box" />
                            {"WhatsApp"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f119">{"Guest waiting at"}</label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f119" name="where" defaultValue={"Lobby"}>
                            <option value="Lobby">{"Lobby"}</option>
                            <option value="Restaurant">{"Restaurant"}</option>
                            <option value="Pool">{"Pool"}</option>
                            <option value="Out">{"Out"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f120">{"Note"}</label>
                        <input className="field__input" id="f120" type="text" name="note" maxLength="120" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Add to queue"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P49" data-code="FD-P49" role="dialog" aria-modal="true" aria-labelledby="FD-P49-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o01-registration-card/" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P49-t">{"Pre-registration / print registration cards"}</h2>
                      <p className="modal__desc">{"Print registration cards in advance for the selected arrivals."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <p>
                      <strong>{"5 arrivals selected:"}</strong>
                      {" Mr Ravi Kabir, Mr Srinivas Manav, Mrs Swathi Sahil, Mrs Athira Nirav, Mr Dileep Kurian."}
                    </p>
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">{"Include"}</legend>
                        <div className="row fd-multi">
                          <label className="check">
                            <input className="check__input" type="checkbox" name="include" value="Registration card" defaultChecked={true} />
                            <span className="check__box" />
                            {"Registration card"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="include" value="Welcome letter" />
                            <span className="check__box" />
                            {"Welcome letter"}
                          </label>
                          <label className="check">
                            <input className="check__input" type="checkbox" name="include" value="Key envelope" />
                            <span className="check__box" />
                            {"Key envelope"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f122">
                          <input id="f122" type="checkbox" role="switch" name="assign" />
                          <span className="sw__track" />
                          {"Assign rooms first"}
                        </label>
                        <span className="field__hint">{"Auto-assign ready rooms before printing"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Print"}</button>
                  </div>
                </form>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"FD-02"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Today's expected guests, queue, pre-registration, room-ready filter; start check-in"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/front-desk/fd-01-front-desk-home"}>{"FD-01"}</Link>
                    {", sidebar"}
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <Link to={"/front-desk/fd-03-check-in"}>{"FD-03"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-05-group-check-in"}>{"FD-05"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-04-walk-in-check-in"}>{"FD-04"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-07-reservation-details"}>{"RS-07"}</Link>
                    {", "}
                    <Link to={"/reservation/rs-09-room-assignment"}>{"RS-09"}</Link>
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
