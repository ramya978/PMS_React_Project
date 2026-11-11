// GENERATED from public/front-desk/fd-13-paid-outs/index.html by scripts/convert_legacy.py.
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
    "href": "/front-desk/fd-13-paid-outs/fd-13-paid-outs.css",
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

export default function FrontDeskFd13PaidOuts() {
  return (
    <ScreenShell title="Paid-outs" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FD-13" data-code="FD-13" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="FD-07" title="In-house Guests" to={"/front-desk/fd-07-in-house-guests"}>
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
            <main className="app__content" id="main" data-code="FD-13" tabIndex="-1">
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
                        <Link to={"/front-desk/fd-07-in-house-guests"}>{"In-house"}</Link>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Paid-outs"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Paid-outs"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FD-13"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <label className="hfilter__btn" htmlFor="fd-13-f" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="fd-13-f" aria-label="Show filters" />
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
                            <span className="hf-f__l">{"Paid-out type"}</span>
                            <select className="hf-f__c" name="paid-out-type">
                              <option>{"All"}</option>
                              <option>{"Guest request"}</option>
                              <option>{"Taxi"}</option>
                              <option>{"Cash advance"}</option>
                              <option>{"Other"}</option>
                            </select>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"Counter"}</span>
                            <select className="hf-f__c" name="counter">
                              <option>{"All"}</option>
                              <option>{"Front desk counter 1"}</option>
                              <option>{"Front desk counter 2"}</option>
                              <option>{"Front Desk 2 (night)"}</option>
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
                    <a className="btn ph-ic" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R08" data-leads-to="FD-R08">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#printer" />
                      </svg>
                      {"Paid-outs report"}
                    </a>
                    <a className="btn btn--primary" href="#FD-P23-new">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"New paid-out"}
                    </a>
                  </div>
                </div>
              </header>
              <section className="st-tiles" data-n="4" aria-label="Summary">
                <div className="st-tile" title="all posted to folios">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#banknote" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Paid-outs today"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"5"}</b>
                  </span>
                </div>
                <div className="st-tile">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#banknote" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Cash paid out"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"₹5,120"}</b>
                    <small className="st-tile__u">{"shift SH-0422-M"}</small>
                  </span>
                </div>
                <div className="st-tile" title="Sneha Joseph · Counter 1">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#clock" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Open shift"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"1"}</b>
                  </span>
                </div>
                <div className="st-tile" title="Taxi, Medicine; Courier ₹2,000">
                  <span className="st-tile__ic">
                    <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <use href="/assets/icons/sprite.svg#bar-chart" />
                    </svg>
                  </span>
                  <span className="st-tile__l">{"Desk limit per transaction"}</span>
                  <span className="st-tile__v">
                    <b className="st-tile__n">{"₹5,000"}</b>
                  </span>
                </div>
              </section>
              <div className="pgw">
                <div className="s-scroll">
                  <table className="srt dt__table dt--hug" data-code="FD-13-list" style={{"--srt-cols": "auto auto auto auto auto auto auto auto max-content"}} data-mc="">
                    <caption className="sr-only">{"Paid-outs of today"}</caption>
                    <thead>
                      <tr>
                        <th scope="col">
                          <input className="srt-i srt-a0" type="radio" name="stfd130" id="stfd130-0a" aria-label="Sort by Voucher · time, lowest or A first" />
                          <input className="srt-i srt-d0" type="radio" name="stfd130" id="stfd130-0d" aria-label="Sort by Voucher · time, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd130-0a">{"Voucher · time"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd130-0d" aria-hidden="true">{"Voucher · time"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a1" type="radio" name="stfd130" id="stfd130-1a" aria-label="Sort by Room · guest, lowest or A first" />
                          <input className="srt-i srt-d1" type="radio" name="stfd130" id="stfd130-1d" aria-label="Sort by Room · guest, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd130-1a">{"Room · guest"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd130-1d" aria-hidden="true">{"Room · guest"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a2" type="radio" name="stfd130" id="stfd130-2a" aria-label="Sort by Paid-out type, lowest or A first" />
                          <input className="srt-i srt-d2" type="radio" name="stfd130" id="stfd130-2d" aria-label="Sort by Paid-out type, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd130-2a">{"Paid-out type"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd130-2d" aria-hidden="true">{"Paid-out type"}</label>
                        </th>
                        <th scope="col">
                          <input className="srt-i srt-a3" type="radio" name="stfd130" id="stfd130-3a" aria-label="Sort by Paid to · receipt, lowest or A first" />
                          <input className="srt-i srt-d3" type="radio" name="stfd130" id="stfd130-3d" aria-label="Sort by Paid to · receipt, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd130-3a">{"Paid to · receipt"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd130-3d" aria-hidden="true">{"Paid to · receipt"}</label>
                        </th>
                        <th scope="col" className="dt__th--right">
                          <input className="srt-i srt-a4" type="radio" name="stfd130" id="stfd130-4a" aria-label="Sort by Amount, lowest or A first" />
                          <input className="srt-i srt-d4" type="radio" name="stfd130" id="stfd130-4d" aria-label="Sort by Amount, highest or Z first" />
                          <label className="srt-l srt-l--a" htmlFor="stfd130-4a">{"Amount"}</label>
                          <label className="srt-l srt-l--d" htmlFor="stfd130-4d" aria-hidden="true">{"Amount"}</label>
                        </th>
                        <th scope="col">{"Win."}</th>
                        <th scope="col">{"User · shift"}</th>
                        <th scope="col">{"Status"}</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{"--k0": "1", "--k1": "2", "--k2": "1", "--k3": "1", "--k4": "3"}}>
                        <td className="dt__td nw" data-label="Voucher · time" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <strong>{"POV-26-27-000041"}</strong>
                          <span className="fd-sub">{"22 Oct 07:55"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room · guest" data-w2="">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"104"}</span>
                          <span className="fd-sub">
                            <a className="fd-link" href="/front-desk/fd-08-guest-folio/#FK-10058" data-leads-to="FD-08">{"Mr Shibu Krish"}</a>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Paid-out type" data-w2="">
                          {"Courier"}
                          <span className="fd-sub">{"code COUR"}</span>
                        </td>
                        <td className="dt__td" data-label="Paid to · receipt">
                          {"Blue Dart, Willingdon Island"}
                          <span className="fd-sub">{"Receipt BD-4412087"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Amount">{"₹600.00"}</td>
                        <td className="dt__td dt__td--center" data-label="Win.">{"2"}</td>
                        <td className="dt__td nw" data-label="User · shift" data-w2="" data-m="">
                          {"Sneha Joseph"}
                          <span className="fd-sub">{"SH-0422-M"}</span>
                        </td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Posted"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="/front-desk/fd-o06-paid-out-voucher/#POV-26-27-000041" data-leads-to="FD-O06">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#printer" />
                            </svg>
                            {"Voucher"}
                          </a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "2", "--k1": "4", "--k2": "4", "--k3": "2", "--k4": "4"}}>
                        <td className="dt__td nw" data-label="Voucher · time" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <strong>{"POV-26-27-000042"}</strong>
                          <span className="fd-sub">{"22 Oct 08:20"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room · guest" data-w2="">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"415"}</span>
                          <span className="fd-sub">
                            <a className="fd-link" href="/front-desk/fd-08-guest-folio/#FK-10172" data-leads-to="FD-08">{"Ms Shruti Siddharth"}</a>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Paid-out type" data-w2="">
                          {"Taxi fare"}
                          <span className="fd-sub">{"code TAXI"}</span>
                        </td>
                        <td className="dt__td" data-label="Paid to · receipt">
                          {"Kochi Cabs"}
                          <span className="fd-sub">{"Receipt KC-90471"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹1,100.00"}</td>
                        <td className="dt__td dt__td--center" data-label="Win.">{"2"}</td>
                        <td className="dt__td nw" data-label="User · shift" data-w2="" data-m="">
                          {"Sneha Joseph"}
                          <span className="fd-sub">{"SH-0422-M"}</span>
                        </td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Posted"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="/front-desk/fd-o06-paid-out-voucher/#POV-26-27-000042" data-leads-to="FD-O06">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#printer" />
                            </svg>
                            {"Voucher"}
                          </a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "3", "--k1": "1", "--k2": "3", "--k3": "3", "--k4": "1"}}>
                        <td className="dt__td nw" data-label="Voucher · time" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <strong>{"POV-26-27-000043"}</strong>
                          <span className="fd-sub">{"22 Oct 08:45"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room · guest" data-w2="">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"101"}</span>
                          <span className="fd-sub">
                            <a className="fd-link" href="/front-desk/fd-08-guest-folio/#FK-10082" data-leads-to="FD-08">{"Mr Rohit Neil"}</a>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Paid-out type" data-w2="">
                          {"Medicine"}
                          <span className="fd-sub">{"code MEDI"}</span>
                        </td>
                        <td className="dt__td" data-label="Paid to · receipt">
                          {"Lakeshore Pharmacy"}
                          <span className="fd-sub">{"Receipt LP-77120"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Amount">{"₹420.00"}</td>
                        <td className="dt__td dt__td--center" data-label="Win.">{"2"}</td>
                        <td className="dt__td nw" data-label="User · shift" data-w2="" data-m="">
                          {"Sneha Joseph"}
                          <span className="fd-sub">{"SH-0422-M"}</span>
                        </td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Posted"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="/front-desk/fd-o06-paid-out-voucher/#POV-26-27-000043" data-leads-to="FD-O06">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#printer" />
                            </svg>
                            {"Voucher"}
                          </a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "4", "--k1": "5", "--k2": "2", "--k3": "4", "--k4": "5"}}>
                        <td className="dt__td nw" data-label="Voucher · time" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <strong>{"POV-26-27-000044"}</strong>
                          <span className="fd-sub">{"22 Oct 09:05"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room · guest" data-w2="">
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"506"}</span>
                          <span className="fd-sub">
                            <a className="fd-link" href="/front-desk/fd-08-guest-folio/#FK-10159" data-leads-to="FD-08">{"Dr Ayesha Chirag"}</a>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Paid-out type" data-w2="">
                          {"Florist"}
                          <span className="fd-sub">{"code FLOR"}</span>
                        </td>
                        <td className="dt__td" data-label="Paid to · receipt">
                          {"Marine Drive Flowers"}
                          <span className="fd-sub">{"Receipt MF-3318"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Amount" data-w2="">{"₹2,500.00"}</td>
                        <td className="dt__td dt__td--center" data-label="Win.">{"2"}</td>
                        <td className="dt__td nw" data-label="User · shift" data-w2="" data-m="">
                          {"Sneha Joseph"}
                          <span className="fd-sub">{"SH-0422-M"}</span>
                        </td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Posted"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="/front-desk/fd-o06-paid-out-voucher/#POV-26-27-000044" data-leads-to="FD-O06">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#printer" />
                            </svg>
                            {"Voucher"}
                          </a>
                        </td>
                      </tr>
                      <tr style={{"--k0": "5", "--k1": "3", "--k2": "5", "--k3": "5", "--k4": "2"}}>
                        <td className="dt__td nw" data-label="Voucher · time" data-w="" data-t="">
                          <input className="mc-more" type="checkbox" aria-label="Show all details" />
                          <strong>{"POV-26-27-000045"}</strong>
                          <span className="fd-sub">{"22 Oct 09:25"}</span>
                        </td>
                        <td className="dt__td nw" data-label="Room · guest" data-w2="">
                          <span className="fd-rm fd-rm--OD" title="Occupied dirty">{"110"}</span>
                          <span className="fd-sub">
                            <a className="fd-link" href="/front-desk/fd-08-guest-folio/#FK-10035" data-leads-to="FD-08">{"Mrs Priya Kabir"}</a>
                          </span>
                        </td>
                        <td className="dt__td" data-label="Paid-out type" data-w2="">
                          {"Tips"}
                          <span className="fd-sub">{"code TIPS"}</span>
                        </td>
                        <td className="dt__td" data-label="Paid to · receipt">
                          {"Porter and driver (guest request)"}
                          <span className="fd-sub">{"Receipt No receipt"}</span>
                        </td>
                        <td className="dt__td dt__td--right num" data-label="Amount">{"₹500.00"}</td>
                        <td className="dt__td dt__td--center" data-label="Win.">{"2"}</td>
                        <td className="dt__td nw" data-label="User · shift" data-w2="" data-m="">
                          {"Sneha Joseph"}
                          <span className="fd-sub">{"SH-0422-M"}</span>
                        </td>
                        <td className="dt__td" data-label="Status" data-s="">
                          <span className="pill pill--ready">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#check-circle" />
                            </svg>
                            {"Posted"}
                          </span>
                        </td>
                        <td className="dt__td nw" data-a="">
                          <a className="btn" href="/front-desk/fd-o06-paid-out-voucher/#POV-26-27-000045" data-leads-to="FD-O06">
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#printer" />
                            </svg>
                            {"Voucher"}
                          </a>
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
                        <b>{"1–5"}</b>
                        {" of 5"}
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
                        <b>{"1–5"}</b>
                        {" of 5"}
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
                        <b>{"1–5"}</b>
                        {" of 5"}
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
                        <b>{"1–5"}</b>
                        {" of 5"}
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
                        <b>{"1–5"}</b>
                        {" of 5"}
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
                <span>{"A paid-out is cash the hotel pays for a guest (taxi, courier, medicine …). It is added to the folio without GST and the cash leaves the shift (FD-X23). Reasons for correcting one are on FD-08 (void / allowance)."}</span>
              </div>
              <div className="modal modal--lg" id="FD-P23-new" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10008" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-new-t">{"New paid-out"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <label className="field__label" htmlFor="f1">
                          {"Room / guest "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f1" name="guest" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Room 101 – Mr Rohit Neil (FK-10082)">{"Room 101 – Mr Rohit Neil (FK-10082)"}</option>
                            <option value="Room 104 – Mr Shibu Krish (FK-10058)">{"Room 104 – Mr Shibu Krish (FK-10058)"}</option>
                            <option value="Room 105 – Ms Noura Al Saud (FK-10056)">{"Room 105 – Ms Noura Al Saud (FK-10056)"}</option>
                            <option value="Room 107 – Mrs Jyoti Jatin (FK-10002)">{"Room 107 – Mrs Jyoti Jatin (FK-10002)"}</option>
                            <option value="Room 108 – Mrs Shruti Shaan (FK-10074)">{"Room 108 – Mrs Shruti Shaan (FK-10074)"}</option>
                            <option value="Room 110 – Mrs Priya Kabir (FK-10035)">{"Room 110 – Mrs Priya Kabir (FK-10035)"}</option>
                            <option value="Room 113 – Mrs Isha Vihaan (FK-10165)">{"Room 113 – Mrs Isha Vihaan (FK-10165)"}</option>
                            <option value="Room 114 – Mrs Fatima Al Mansoori (FK-10050)">{"Room 114 – Mrs Fatima Al Mansoori (FK-10050)"}</option>
                            <option value="Room 115 – Ms Isha Dhruv (FK-10118)">{"Room 115 – Ms Isha Dhruv (FK-10118)"}</option>
                            <option value="Room 116 – Mr Amit Bijoy (FK-10011)">{"Room 116 – Mr Amit Bijoy (FK-10011)"}</option>
                            <option value="Room 201 – Ms Kavita Siddharth (FK-10101)">{"Room 201 – Ms Kavita Siddharth (FK-10101)"}</option>
                            <option value="Room 202 – Dr Aswathy Vijay (FK-10084)">{"Room 202 – Dr Aswathy Vijay (FK-10084)"}</option>
                            <option value="Room 205 – Ms Anna Schneider (FK-10108)">{"Room 205 – Ms Anna Schneider (FK-10108)"}</option>
                            <option value="Room 207 – Mr Amit Chirag (FK-10104)">{"Room 207 – Mr Amit Chirag (FK-10104)"}</option>
                            <option value="Room 208 – Ms Elsa Lindberg (FK-10033)">{"Room 208 – Ms Elsa Lindberg (FK-10033)"}</option>
                            <option value="Room 211 – Mr Marco Rossi (FK-10170)">{"Room 211 – Mr Marco Rossi (FK-10170)"}</option>
                            <option value="Room 212 – Mr Ethan Anderson (FK-10162)">{"Room 212 – Mr Ethan Anderson (FK-10162)"}</option>
                            <option value="Room 213 – Mr Omar Al Farsi (FK-10140)">{"Room 213 – Mr Omar Al Farsi (FK-10140)"}</option>
                            <option value="Room 216 – Mrs Sindhu Wilson (FK-10193)">{"Room 216 – Mrs Sindhu Wilson (FK-10193)"}</option>
                            <option value="Room 218 – Dr Anjali Rahman (FK-10205)">{"Room 218 – Dr Anjali Rahman (FK-10205)"}</option>
                            <option value="Room 219 – Mr Ajay Jatin (FK-10008)">{"Room 219 – Mr Ajay Jatin (FK-10008)"}</option>
                            <option value="Room 301 – Mr Biju George (FK-10069)">{"Room 301 – Mr Biju George (FK-10069)"}</option>
                            <option value="Room 303 – Ms Charlotte Fraser (FK-10031)">{"Room 303 – Ms Charlotte Fraser (FK-10031)"}</option>
                            <option value="Room 304 – Mr Oliver Hughes (FK-10143)">{"Room 304 – Mr Oliver Hughes (FK-10143)"}</option>
                            <option value="Room 306 – Ms Jyoti Kabir (FK-10105)">{"Room 306 – Ms Jyoti Kabir (FK-10105)"}</option>
                            <option value="Room 309 – Ms Nandini Rishi (FK-10061)">{"Room 309 – Ms Nandini Rishi (FK-10061)"}</option>
                            <option value="Room 310 – Mr Prasad Pavan (FK-10103)">{"Room 310 – Mr Prasad Pavan (FK-10103)"}</option>
                            <option value="Room 313 – Ms Nandini Jatin (FK-10106)">{"Room 313 – Ms Nandini Jatin (FK-10106)"}</option>
                            <option value="Room 319 – Ms Remya Kurian (FK-10102)">{"Room 319 – Ms Remya Kurian (FK-10102)"}</option>
                            <option value="Room 401 – Mr Rahul Philip (FK-10197)">{"Room 401 – Mr Rahul Philip (FK-10197)"}</option>
                            <option value="Room 402 – Mrs Kavita Siddharth (FK-10048)">{"Room 402 – Mrs Kavita Siddharth (FK-10048)"}</option>
                            <option value="Room 403 – Mr Luc Moreau (FK-10180)">{"Room 403 – Mr Luc Moreau (FK-10180)"}</option>
                            <option value="Room 406 – Mrs Kavita Ranjan (FK-10187)">{"Room 406 – Mrs Kavita Ranjan (FK-10187)"}</option>
                            <option value="Room 407 – Ms Ayesha Sahil (FK-10120)">{"Room 407 – Ms Ayesha Sahil (FK-10120)"}</option>
                            <option value="Room 408 – Ms Lakshmi Mathew (FK-10161)">{"Room 408 – Ms Lakshmi Mathew (FK-10161)"}</option>
                            <option value="Room 409 – Mr Oliver Hughes (FK-10200)">{"Room 409 – Mr Oliver Hughes (FK-10200)"}</option>
                            <option value="Room 415 – Ms Shruti Siddharth (FK-10172)">{"Room 415 – Ms Shruti Siddharth (FK-10172)"}</option>
                            <option value="Room 416 – Mrs Isha Neil (FK-10123)">{"Room 416 – Mrs Isha Neil (FK-10123)"}</option>
                            <option value="Room 417 – Mrs Kavita Siddharth (FK-10203)">{"Room 417 – Mrs Kavita Siddharth (FK-10203)"}</option>
                            <option value="Room 501 – Mr Prasad Manav (FK-10178)">{"Room 501 – Mr Prasad Manav (FK-10178)"}</option>
                            <option value="Room 504 – Dr Claire Dubois (FK-10027)">{"Room 504 – Dr Claire Dubois (FK-10027)"}</option>
                            <option value="Room 506 – Dr Ayesha Chirag (FK-10159)">{"Room 506 – Dr Ayesha Chirag (FK-10159)"}</option>
                            <option value="Room 507 – Mrs Pooja Kunal (FK-10010)">{"Room 507 – Mrs Pooja Kunal (FK-10010)"}</option>
                            <option value="Room 508 – Ms Sindhu Rahman (FK-10097)">{"Room 508 – Ms Sindhu Rahman (FK-10097)"}</option>
                            <option value="Room 510 – Ms Sheela Nathan (FK-10145)">{"Room 510 – Ms Sheela Nathan (FK-10145)"}</option>
                            <option value="Room 511 – Mr Naveen Chirag (FK-10109)">{"Room 511 – Mr Naveen Chirag (FK-10109)"}</option>
                            <option value="Room 514 – Mr Jithin Mathew (FK-10232)">{"Room 514 – Mr Jithin Mathew (FK-10232)"}</option>
                            <option value="Room 515 – Mrs Rekha Krish (FK-10029)">{"Room 515 – Mrs Rekha Krish (FK-10029)"}</option>
                            <option value="Room 516 – Ms Nandini Jatin (FK-10042)">{"Room 516 – Ms Nandini Jatin (FK-10042)"}</option>
                            <option value="Room 517 – Mrs Maya Mohan (FK-10142)">{"Room 517 – Mrs Maya Mohan (FK-10142)"}</option>
                            <option value="Room 204 – Ms Anjali Mohan (FK-10250)">{"Room 204 – Ms Anjali Mohan (FK-10250)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"In-house guests only"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f2">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f2" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f3">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f3" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f4">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f4" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f5">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f5" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f6">{"Receipt photo"}</label>
                        <input className="field__input" id="f6" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f7">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f7" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f8">
                          <input id="f8" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10082" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10082-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10082" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10082-t">{"Paid-out – Mr Rohit Neil"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 101 – Mr Rohit Neil (FK-10082)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f11">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f11" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f12">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f12" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f13">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f13" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f14">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f14" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f15">{"Receipt photo"}</label>
                        <input className="field__input" id="f15" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f16">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f16" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f17">
                          <input id="f17" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10058" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10058-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10058" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10058-t">{"Paid-out – Mr Shibu Krish"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 104 – Mr Shibu Krish (FK-10058)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f20">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f20" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f21">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f21" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f22">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f22" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f23">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f23" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f24">{"Receipt photo"}</label>
                        <input className="field__input" id="f24" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f25">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f25" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f26">
                          <input id="f26" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10056" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10056-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10056" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10056-t">{"Paid-out – Ms Noura Al Saud"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 105 – Ms Noura Al Saud (FK-10056)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f29">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f29" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f30">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f30" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f31">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f31" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f32">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f32" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f33">{"Receipt photo"}</label>
                        <input className="field__input" id="f33" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f34">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f34" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f35">
                          <input id="f35" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10002" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10002-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10002" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10002-t">{"Paid-out – Mrs Jyoti Jatin"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 107 – Mrs Jyoti Jatin (FK-10002)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f38">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f38" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f39">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f39" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f40">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f40" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f41">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f41" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f42">{"Receipt photo"}</label>
                        <input className="field__input" id="f42" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f43">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f43" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f44">
                          <input id="f44" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10074" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10074-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10074" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10074-t">{"Paid-out – Mrs Shruti Shaan"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 108 – Mrs Shruti Shaan (FK-10074)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f47">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f47" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f48">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f48" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f49">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f49" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f50">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f50" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f51">{"Receipt photo"}</label>
                        <input className="field__input" id="f51" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f52">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f52" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f53">
                          <input id="f53" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10035" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10035-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10035" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10035-t">{"Paid-out – Mrs Priya Kabir"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 110, 119, 109 – Mrs Priya Kabir (FK-10035)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f56">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f56" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f57">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f57" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f58">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f58" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f59">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f59" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f60">{"Receipt photo"}</label>
                        <input className="field__input" id="f60" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f61">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f61" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f62">
                          <input id="f62" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10165" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10165-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10165" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10165-t">{"Paid-out – Mrs Isha Vihaan"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 113 – Mrs Isha Vihaan (FK-10165)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f65">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f65" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f66">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f66" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f67">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f67" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f68">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f68" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f69">{"Receipt photo"}</label>
                        <input className="field__input" id="f69" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f70">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f70" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f71">
                          <input id="f71" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10050" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10050-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10050" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10050-t">{"Paid-out – Mrs Fatima Al Mansoori"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 114 – Mrs Fatima Al Mansoori (FK-10050)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f74">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f74" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f75">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f75" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f76">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f76" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f77">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f77" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f78">{"Receipt photo"}</label>
                        <input className="field__input" id="f78" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f79">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f79" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f80">
                          <input id="f80" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10118" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10118-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10118" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10118-t">{"Paid-out – Ms Isha Dhruv"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 115 – Ms Isha Dhruv (FK-10118)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f83">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f83" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f84">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f84" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f85">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f85" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f86">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f86" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f87">{"Receipt photo"}</label>
                        <input className="field__input" id="f87" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f88">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f88" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f89">
                          <input id="f89" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10011" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10011-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10011" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10011-t">{"Paid-out – Mr Amit Bijoy"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 116 – Mr Amit Bijoy (FK-10011)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f92">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f92" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f93">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f93" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f94">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f94" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f95">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f95" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f96">{"Receipt photo"}</label>
                        <input className="field__input" id="f96" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f97">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f97" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f98">
                          <input id="f98" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10101" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10101" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10101-t">{"Paid-out – Ms Kavita Siddharth"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 201 – Ms Kavita Siddharth (FK-10101)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f101">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f101" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f102">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f102" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f103">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f103" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f104">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f104" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f105">{"Receipt photo"}</label>
                        <input className="field__input" id="f105" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f106">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f106" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f107">
                          <input id="f107" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10084" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10084-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10084" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10084-t">{"Paid-out – Dr Aswathy Vijay"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 202 – Dr Aswathy Vijay (FK-10084)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f110">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f110" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f111">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f111" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f112">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f112" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f113">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f113" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f114">{"Receipt photo"}</label>
                        <input className="field__input" id="f114" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f115">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f115" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f116">
                          <input id="f116" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10108" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10108-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10108" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10108-t">{"Paid-out – Ms Anna Schneider"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 205 – Ms Anna Schneider (FK-10108)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f119">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f119" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f120">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f120" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f121">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f121" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f122">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f122" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f123">{"Receipt photo"}</label>
                        <input className="field__input" id="f123" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f124">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f124" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f125">
                          <input id="f125" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10104" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10104-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10104" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10104-t">{"Paid-out – Mr Amit Chirag"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 207 – Mr Amit Chirag (FK-10104)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f128">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f128" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f129">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f129" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f130">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f130" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f131">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f131" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f132">{"Receipt photo"}</label>
                        <input className="field__input" id="f132" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f133">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f133" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f134">
                          <input id="f134" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10033" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10033-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10033" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10033-t">{"Paid-out – Ms Elsa Lindberg"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 208 – Ms Elsa Lindberg (FK-10033)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f137">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f137" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f138">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f138" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f139">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f139" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f140">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f140" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f141">{"Receipt photo"}</label>
                        <input className="field__input" id="f141" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f142">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f142" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f143">
                          <input id="f143" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10170" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10170-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10170" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10170-t">{"Paid-out – Mr Marco Rossi"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 211 – Mr Marco Rossi (FK-10170)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f146">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f146" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f147">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f147" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f148">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f148" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f149">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f149" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f150">{"Receipt photo"}</label>
                        <input className="field__input" id="f150" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f151">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f151" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f152">
                          <input id="f152" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10162" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10162-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10162" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10162-t">{"Paid-out – Mr Ethan Anderson"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 212 – Mr Ethan Anderson (FK-10162)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f155">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f155" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f156">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f156" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f157">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f157" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f158">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f158" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f159">{"Receipt photo"}</label>
                        <input className="field__input" id="f159" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f160">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f160" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f161">
                          <input id="f161" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10140" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10140-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10140" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10140-t">{"Paid-out – Mr Omar Al Farsi"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 213 – Mr Omar Al Farsi (FK-10140)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f164">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f164" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f165">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f165" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f166">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f166" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f167">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f167" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f168">{"Receipt photo"}</label>
                        <input className="field__input" id="f168" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f169">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f169" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f170">
                          <input id="f170" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10193" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10193-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10193" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10193-t">{"Paid-out – Mrs Sindhu Wilson"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 216, 305 – Mrs Sindhu Wilson (FK-10193)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f173">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f173" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f174">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f174" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f175">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f175" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f176">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f176" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f177">{"Receipt photo"}</label>
                        <input className="field__input" id="f177" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f178">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f178" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f179">
                          <input id="f179" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10205" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10205-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10205" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10205-t">{"Paid-out – Dr Anjali Rahman"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 218 – Dr Anjali Rahman (FK-10205)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f182">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f182" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f183">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f183" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f184">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f184" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f185">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f185" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f186">{"Receipt photo"}</label>
                        <input className="field__input" id="f186" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f187">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f187" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f188">
                          <input id="f188" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10008" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-t">{"Paid-out – Mr Ajay Jatin"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 219, 112, 103 – Mr Ajay Jatin (FK-10008)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f191">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f191" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f192">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f192" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f193">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f193" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f194">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f194" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f195">{"Receipt photo"}</label>
                        <input className="field__input" id="f195" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f196">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f196" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f197">
                          <input id="f197" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10069" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10069-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10069" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10069-t">{"Paid-out – Mr Biju George"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 301 – Mr Biju George (FK-10069)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f200">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f200" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f201">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f201" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f202">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f202" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f203">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f203" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f204">{"Receipt photo"}</label>
                        <input className="field__input" id="f204" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f205">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f205" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f206">
                          <input id="f206" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10031" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10031-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10031" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10031-t">{"Paid-out – Ms Charlotte Fraser"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 303 – Ms Charlotte Fraser (FK-10031)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f209">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f209" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f210">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f210" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f211">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f211" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f212">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f212" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f213">{"Receipt photo"}</label>
                        <input className="field__input" id="f213" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f214">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f214" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f215">
                          <input id="f215" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10143" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10143-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10143" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10143-t">{"Paid-out – Mr Oliver Hughes"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 304 – Mr Oliver Hughes (FK-10143)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f218">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f218" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f219">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f219" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f220">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f220" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f221">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f221" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f222">{"Receipt photo"}</label>
                        <input className="field__input" id="f222" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f223">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f223" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f224">
                          <input id="f224" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10105" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10105-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10105" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10105-t">{"Paid-out – Ms Jyoti Kabir"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 306 – Ms Jyoti Kabir (FK-10105)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f227">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f227" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f228">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f228" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f229">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f229" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f230">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f230" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f231">{"Receipt photo"}</label>
                        <input className="field__input" id="f231" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f232">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f232" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f233">
                          <input id="f233" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10061" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10061-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10061" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10061-t">{"Paid-out – Ms Nandini Rishi"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 309 – Ms Nandini Rishi (FK-10061)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f236">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f236" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f237">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f237" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f238">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f238" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f239">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f239" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f240">{"Receipt photo"}</label>
                        <input className="field__input" id="f240" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f241">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f241" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f242">
                          <input id="f242" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10103" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10103-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10103" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10103-t">{"Paid-out – Mr Prasad Pavan"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 310 – Mr Prasad Pavan (FK-10103)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f245">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f245" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f246">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f246" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f247">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f247" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f248">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f248" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f249">{"Receipt photo"}</label>
                        <input className="field__input" id="f249" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f250">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f250" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f251">
                          <input id="f251" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10106" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10106-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10106" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10106-t">{"Paid-out – Ms Nandini Jatin"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 313 – Ms Nandini Jatin (FK-10106)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f254">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f254" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f255">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f255" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f256">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f256" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f257">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f257" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f258">{"Receipt photo"}</label>
                        <input className="field__input" id="f258" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f259">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f259" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f260">
                          <input id="f260" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10102" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10102-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10102" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10102-t">{"Paid-out – Ms Remya Kurian"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 319 – Ms Remya Kurian (FK-10102)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f263">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f263" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f264">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f264" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f265">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f265" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f266">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f266" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f267">{"Receipt photo"}</label>
                        <input className="field__input" id="f267" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f268">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f268" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f269">
                          <input id="f269" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10197" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10197-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10197" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10197-t">{"Paid-out – Mr Rahul Philip"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 401 – Mr Rahul Philip (FK-10197)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f272">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f272" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f273">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f273" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f274">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f274" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f275">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f275" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f276">{"Receipt photo"}</label>
                        <input className="field__input" id="f276" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f277">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f277" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f278">
                          <input id="f278" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10048" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10048-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10048" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10048-t">{"Paid-out – Mrs Kavita Siddharth"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 402 – Mrs Kavita Siddharth (FK-10048)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f281">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f281" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f282">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f282" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f283">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f283" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f284">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f284" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f285">{"Receipt photo"}</label>
                        <input className="field__input" id="f285" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f286">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f286" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f287">
                          <input id="f287" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10180" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10180-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10180" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10180-t">{"Paid-out – Mr Luc Moreau"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 403, 509 – Mr Luc Moreau (FK-10180)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f290">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f290" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f291">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f291" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f292">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f292" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f293">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f293" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f294">{"Receipt photo"}</label>
                        <input className="field__input" id="f294" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f295">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f295" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f296">
                          <input id="f296" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10187" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10187-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10187" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10187-t">{"Paid-out – Mrs Kavita Ranjan"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 406, 503, 404 – Mrs Kavita Ranjan (FK-10187)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f299">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f299" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f300">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f300" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f301">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f301" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f302">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f302" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f303">{"Receipt photo"}</label>
                        <input className="field__input" id="f303" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f304">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f304" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f305">
                          <input id="f305" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10120" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10120-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10120" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10120-t">{"Paid-out – Ms Ayesha Sahil"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 407 – Ms Ayesha Sahil (FK-10120)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f308">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f308" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f309">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f309" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f310">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f310" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f311">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f311" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f312">{"Receipt photo"}</label>
                        <input className="field__input" id="f312" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f313">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f313" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f314">
                          <input id="f314" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10161" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10161-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10161" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10161-t">{"Paid-out – Ms Lakshmi Mathew"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 408 – Ms Lakshmi Mathew (FK-10161)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f317">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f317" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f318">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f318" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f319">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f319" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f320">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f320" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f321">{"Receipt photo"}</label>
                        <input className="field__input" id="f321" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f322">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f322" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f323">
                          <input id="f323" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10200" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10200-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10200" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10200-t">{"Paid-out – Mr Oliver Hughes"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 409 – Mr Oliver Hughes (FK-10200)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f326">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f326" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f327">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f327" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f328">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f328" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f329">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f329" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f330">{"Receipt photo"}</label>
                        <input className="field__input" id="f330" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f331">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f331" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f332">
                          <input id="f332" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10172" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10172-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10172" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10172-t">{"Paid-out – Ms Shruti Siddharth"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 415, 316 – Ms Shruti Siddharth (FK-10172)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f335">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f335" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f336">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f336" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f337">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f337" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f338">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f338" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f339">{"Receipt photo"}</label>
                        <input className="field__input" id="f339" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f340">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f340" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f341">
                          <input id="f341" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10123" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10123-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10123" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10123-t">{"Paid-out – Mrs Isha Neil"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 416, 505 – Mrs Isha Neil (FK-10123)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f344">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f344" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f345">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f345" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f346">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f346" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f347">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f347" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f348">{"Receipt photo"}</label>
                        <input className="field__input" id="f348" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f349">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f349" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f350">
                          <input id="f350" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10203" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10203-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10203" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10203-t">{"Paid-out – Mrs Kavita Siddharth"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 417 – Mrs Kavita Siddharth (FK-10203)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f353">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f353" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f354">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f354" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f355">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f355" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f356">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f356" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f357">{"Receipt photo"}</label>
                        <input className="field__input" id="f357" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f358">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f358" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f359">
                          <input id="f359" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10178" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10178-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10178" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10178-t">{"Paid-out – Mr Prasad Manav"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 501 – Mr Prasad Manav (FK-10178)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f362">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f362" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f363">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f363" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f364">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f364" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f365">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f365" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f366">{"Receipt photo"}</label>
                        <input className="field__input" id="f366" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f367">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f367" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f368">
                          <input id="f368" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10027" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10027-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10027" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10027-t">{"Paid-out – Dr Claire Dubois"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 504 – Dr Claire Dubois (FK-10027)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f371">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f371" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f372">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f372" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f373">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f373" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f374">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f374" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f375">{"Receipt photo"}</label>
                        <input className="field__input" id="f375" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f376">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f376" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f377">
                          <input id="f377" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10159" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10159-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10159" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10159-t">{"Paid-out – Dr Ayesha Chirag"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 506, 318 – Dr Ayesha Chirag (FK-10159)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f380">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f380" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f381">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f381" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f382">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f382" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f383">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f383" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f384">{"Receipt photo"}</label>
                        <input className="field__input" id="f384" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f385">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f385" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f386">
                          <input id="f386" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10010" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10010-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10010" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10010-t">{"Paid-out – Mrs Pooja Kunal"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 507 – Mrs Pooja Kunal (FK-10010)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f389">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f389" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f390">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f390" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f391">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f391" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f392">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f392" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f393">{"Receipt photo"}</label>
                        <input className="field__input" id="f393" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f394">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f394" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f395">
                          <input id="f395" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10097" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10097-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10097" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10097-t">{"Paid-out – Ms Sindhu Rahman"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 508, 217 – Ms Sindhu Rahman (FK-10097)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f398">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f398" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f399">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f399" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f400">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f400" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f401">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f401" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f402">{"Receipt photo"}</label>
                        <input className="field__input" id="f402" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f403">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f403" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f404">
                          <input id="f404" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10145" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10145-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10145" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10145-t">{"Paid-out – Ms Sheela Nathan"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 510 – Ms Sheela Nathan (FK-10145)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f407">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f407" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f408">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f408" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f409">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f409" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f410">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f410" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f411">{"Receipt photo"}</label>
                        <input className="field__input" id="f411" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f412">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f412" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f413">
                          <input id="f413" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10109" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10109-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10109" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10109-t">{"Paid-out – Mr Naveen Chirag"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 511, 410 – Mr Naveen Chirag (FK-10109)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f416">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f416" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f417">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f417" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f418">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f418" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f419">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f419" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f420">{"Receipt photo"}</label>
                        <input className="field__input" id="f420" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f421">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f421" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f422">
                          <input id="f422" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10232" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10232-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10232" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10232-t">{"Paid-out – Mr Jithin Mathew"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 514 – Mr Jithin Mathew (FK-10232)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f425">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f425" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f426">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f426" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f427">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f427" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f428">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f428" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f429">{"Receipt photo"}</label>
                        <input className="field__input" id="f429" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f430">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f430" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f431">
                          <input id="f431" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10029" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10029-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10029" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10029-t">{"Paid-out – Mrs Rekha Krish"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 515 – Mrs Rekha Krish (FK-10029)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f434">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f434" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f435">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f435" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f436">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f436" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f437">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f437" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f438">{"Receipt photo"}</label>
                        <input className="field__input" id="f438" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f439">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f439" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f440">
                          <input id="f440" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10042" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10042-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10042" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10042-t">{"Paid-out – Ms Nandini Jatin"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 516 – Ms Nandini Jatin (FK-10042)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f443">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f443" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f444">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f444" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f445">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f445" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f446">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f446" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f447">{"Receipt photo"}</label>
                        <input className="field__input" id="f447" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f448">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f448" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f449">
                          <input id="f449" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10142" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10142-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10142" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10142-t">{"Paid-out – Mrs Maya Mohan"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 517 – Mrs Maya Mohan (FK-10142)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f452">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f452" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f453">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f453" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f454">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f454" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f455">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f455" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f456">{"Receipt photo"}</label>
                        <input className="field__input" id="f456" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f457">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f457" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f458">
                          <input id="f458" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P23-FK-10250" data-code="FD-P23" role="dialog" aria-modal="true" aria-labelledby="FD-P23-FK-10250-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-o06-paid-out-voucher/#new-FK-10250" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P23-FK-10250-t">{"Paid-out – Ms Anjali Mohan"}</h2>
                      <p className="modal__desc">{"Posts the amount to the guest's folio (not taxable) and takes the cash out of the shift. A paid-out is never taxed – it is a reimbursement."}</p>
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
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 204 – Ms Anjali Mohan (FK-10250)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f461">
                          {"Paid-out code "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f461" name="code" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="TAXI – Taxi fare (up to ₹5,000 per transaction)">{"TAXI – Taxi fare (up to ₹5,000 per transaction)"}</option>
                            <option value="COUR – Courier (up to ₹2,000 per transaction)">{"COUR – Courier (up to ₹2,000 per transaction)"}</option>
                            <option value="MEDI – Medicine (up to ₹5,000 per transaction)">{"MEDI – Medicine (up to ₹5,000 per transaction)"}</option>
                            <option value="FLOR – Florist (up to ₹3,000 per transaction)">{"FLOR – Florist (up to ₹3,000 per transaction)"}</option>
                            <option value="TIPS – Tips (up to ₹1,000 per transaction)">{"TIPS – Tips (up to ₹1,000 per transaction)"}</option>
                            <option value="TKTS – Tickets (up to ₹10,000 per transaction)">{"TKTS – Tickets (up to ₹10,000 per transaction)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"FDS-09"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f462">
                          {"Amount "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap field__wrap--money">
                          <span className="field__prefix">{"₹"}</span>
                          <input className="field__input num" id="f462" type="number" inputMode="decimal" name="amount" required={true} min="0.01" step="0.01" defaultValue={""} />
                        </div>
                        <span className="field__hint">{"Up to the limit of the code – above it the request goes to approval (CM-P04)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f463">
                          {"Paid to "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <input className="field__input" id="f463" type="text" name="paidto" required={true} maxLength="60" placeholder="Vendor or person" defaultValue={""} />
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f464">{"Vendor receipt no."}</label>
                        <input className="field__input" id="f464" type="text" name="receipt" maxLength="30" defaultValue={""} />
                        <span className="field__hint">{"Required when the code needs a receipt (all codes except Tips)"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f465">{"Receipt photo"}</label>
                        <input className="field__input" id="f465" type="file" name="photo" />
                        <span className="field__hint">{"Photo of the vendor receipt"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f466">
                          {"Window "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f466" name="win" required={true} defaultValue={"2 – Extras"}>
                            <option value="1 – Room & tax">{"1 – Room & tax"}</option>
                            <option value="2 – Extras">{"2 – Extras"}</option>
                            <option value="3 – Company / agent">{"3 – Company / agent"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f467">
                          <input id="f467" type="checkbox" role="switch" name="signed" />
                          <span className="sw__track" />
                          {"Guest signed the voucher"}
                        </label>
                        <span className="field__hint">{"Optional – the guest signs the printed voucher or the tablet"}</span>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Shift"}</span>
                        <div className="fd-display">{"SH-0422-M · Sneha Joseph · open (cash paid out needs an open shift – FD-X23)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#cm-p04-po">{"Request approval"}</a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit" aria-label="Save & print voucher">
                      {"Save & print"}
                      <span className="ph-x">{" voucher"}</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="cm-p04-po" data-code="CM-P04" role="dialog" aria-modal="true" aria-labelledby="cm-p04-po-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/reservation/rs-20-approvals/" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="cm-p04-po-t">{"Request approval"}</h2>
                      <p className="modal__desc">{"This action is above your limit. The next approver is asked on screen; the request appears in Approvals (RS-20)."}</p>
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
                        <span className="field__label">{"Action"}</span>
                        <div className="fd-display">{"Paid-out above the code limit"}</div>
                      </div>
                      <div className="field">
                        <span className="field__label">{"Value"}</span>
                        <div className="fd-display">{"Amount above the limit of the code"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f471">
                          {"Reason "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f471" name="reason" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="SERVREC – Service recovery">{"SERVREC – Service recovery"}</option>
                            <option value="POSTERR – Posting error">{"POSTERR – Posting error"}</option>
                            <option value="GOODWILL – Goodwill gesture">{"GOODWILL – Goodwill gesture"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f472">{"Note"}</label>
                        <textarea className="field__input field__input--area" id="f472" name="note" maxLength="240" defaultValue={""} />
                      </div>
                      <div className="field">
                        <span className="field__label">{"Goes to"}</span>
                        <div className="fd-display">{"Front Office Manager (limits from FDS-22; escalates after 30 minutes)"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Send request"}</button>
                  </div>
                </form>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"FD-13"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Cash paid on behalf of a guest and added to the bill"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/front-desk/fd-07-in-house-guests"}>{"FD-07"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-08-guest-folio"}>{"FD-08"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-18-cashier-shift"}>{"FD-18"}</Link>
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <a href="/front-desk/fd-13-paid-outs/#FD-P23">{"FD-P23"}</a>
                    {", "}
                    <Link to={"/front-desk/fd-08-guest-folio"}>{"FD-08"}</Link>
                  </dd>
                  <dt>{"Note"}</dt>
                  <dd>{"Static screen (HTML and CSS only): it shows the layout, fields and sample data. Saving and live data come when the backend is connected."}</dd>
                </dl>
              </details>
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
