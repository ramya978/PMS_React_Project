// GENERATED from public/front-desk/fd-o16-advance-receipt/index.html by scripts/convert_legacy.py.
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
    "href": "/front-desk/fd-o16-advance-receipt/fd-o16-advance-receipt.css",
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

export default function FrontDeskFdO16AdvanceReceipt() {
  return (
    <ScreenShell title="Advance receipt (with GST on advance)" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FD-O16" data-code="FD-O16" data-static="1" data-print="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="FD-O16" tabIndex="-1">
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
                        <span aria-current="page">{"Advance receipt (with GST on advance)"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Advance receipt (with GST on advance)"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FD-O16"}</span>
                  <div className="page-header__actions" />
                </div>
              </header>
              <div className="variants">
                <span className="va" id="a--9808" />
                <span className="va" id="a--9807" />
                <span className="va" id="a-00124" />
                <span className="va" id="a-00123" />
                <span className="va" id="a-00122" />
                <span className="va" id="a-00121" />
                <span className="va" id="a-00120" />
                <span className="va" id="a-00119" />
                <span className="va" id="a-00116" />
                <span className="va" id="a-90193" />
                <span className="va" id="a-90142" />
                <span className="va" id="a-00115" />
                <span className="va" id="a-00114" />
                <span className="va" id="a-00113" />
                <span className="va" id="a-00110" />
                <span className="va" id="a-00109" />
                <span className="va" id="a-00108" />
                <span className="va" id="a-00107" />
                <span className="va" id="a-00106" />
                <span className="va" id="a-00105" />
                <span className="va" id="a-00102" />
                <span className="va" id="a-00101" />
                <span className="va" id="a-00100" />
                <span className="va" id="a-00097" />
                <span className="va" id="a-00094" />
                <span className="va" id="a-00093" />
                <span className="va" id="a-00092" />
                <span className="va" id="a-00091" />
                <span className="va" id="a-00090" />
                <span className="va" id="a-00089" />
                <span className="va" id="a-00088" />
                <span className="va" id="a-00087" />
                <span className="va" id="a-00086" />
                <span className="va" id="a-00085" />
                <span className="va" id="a-00084" />
                <span className="va" id="a-00082" />
                <span className="va" id="a-00081" />
                <span className="va" id="a-00077" />
                <span className="va" id="a-00076" />
                <span className="va" id="a-00075" />
                <span className="va" id="a-00074" />
                <span className="va" id="a-00073" />
                <span className="va" id="a-00072" />
                <span className="va" id="a-00064" />
                <span className="va" id="a-00063" />
                <span className="va" id="a-00062" />
                <span className="va" id="a-00059" />
                <span className="va" id="a-00052" />
                <span className="va" id="a-00050" />
                <span className="va" id="a-00049" />
                <span className="va" id="a-00048" />
                <span className="va" id="a-00040" />
                <span className="va" id="a-00039" />
                <span className="va" id="a-00038" />
                <span className="va" id="a-00037" />
                <span className="va" id="a-00036" />
                <span className="va" id="a-00034" />
                <span className="va" id="a-00031" />
                <span className="va" id="a-00027" />
                <span className="va" id="a-00026" />
                <span className="va" id="a-00025" />
                <span className="va" id="a-00024" />
                <span className="va" id="a-00021" />
                <span className="va" id="a-00020" />
                <span className="va" id="a-00019" />
                <span className="va" id="a-00018" />
                <span className="va" id="a-00017" />
                <span className="va" id="a-00016" />
                <span className="va" id="a-00015" />
                <span className="va" id="a-00014" />
                <span className="va" id="a-00013" />
                <span className="va" id="a-00012" />
                <span className="va" id="a-00011" />
                <span className="va" id="a-00010" />
                <span className="va" id="a-00009" />
                <span className="va" id="a-00008" />
                <span className="va" id="a-00007" />
                <span className="va" id="a-00006" />
                <span className="va" id="a-00005" />
                <span className="va" id="a-00004" />
                <span className="va" id="a-00003" />
                <span className="va" id="a-00002" />
                <span className="va" id="a-00001" />
                <span className="va" id="a-new" />
                <div className="variant v-a--9808 is-default">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-9808"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Shruti Shaan"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10074 · arrival 22 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Credit / debit card · Visa ending 6190 · approval 330418"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹7,558.95"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,199.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹359.95 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Seven thousand five hundred and fifty-eight and ninety-five paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Sneha Joseph · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a--9807">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-9807"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Rahul Philip"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10197 · arrival 22 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI5520917731"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹9,202.82"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,799.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,403.82 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Nine thousand two hundred and two and eighty-two paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Sneha Joseph · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00124">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00124"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Liam Walker"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10247 · arrival 3 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Credit / debit card · TXN291044591"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹28,320.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹24,000.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹4,320.00 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Twenty-eight thousand three hundred and twenty only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00123">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00123"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Swathi Dhruv"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10246 · arrival 30 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL837429611"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹30,086.46"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹25,497.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹4,589.46 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Thirty thousand eighty-six and forty-six paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00122">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00122"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Elsa Lindberg"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10245 · arrival 17 Jan 2027"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Corporate prepaid · PL465586527"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹17,007.90"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹16,198.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹809.90 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Seventeen thousand seven and ninety paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00121">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00121"}</strong>
                        <br />
                        {"Date 21 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Karthik Jatin"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10240 · arrival 11 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL857612369"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹32,509.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹27,550.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹4,959.00 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Thirty-two thousand five hundred and nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00120">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00120"}</strong>
                        <br />
                        {"Date 21 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Imran Shaan"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10235 · arrival 6 Dec 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL456334746"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹9,438.82"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,999.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,439.82 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Nine thousand four hundred and thirty-eight and eighty-two paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00119">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00119"}</strong>
                        <br />
                        {"Date 21 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Imran Dhruv"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10233 · arrival 22 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL563468279"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹49,082.10"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹41,595.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹7,487.10 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Forty-nine thousand eighty-two and ten paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00116">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00116"}</strong>
                        <br />
                        {"Date 21 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Priya Neil"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10221 · arrival 7 Dec 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI555152491"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹10,029.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹8,499.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,529.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Ten thousand twenty-nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Anita Mohan · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-90193">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-90193"}</strong>
                        <br />
                        {"Date 20 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Sindhu Wilson"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10193 · arrival 21 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI6293018845"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹13,442.10"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹12,802.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹640.10 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Thirteen thousand four hundred and forty-two and ten paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Sneha Joseph · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-90142">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-90142"}</strong>
                        <br />
                        {"Date 20 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Maya Mohan"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10142 · arrival 19 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Credit / debit card · CC884213"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹78,230.46"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹66,297.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹11,933.46 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Seventy-eight thousand two hundred and thirty and forty-six paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Sneha Joseph · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00115">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00115"}</strong>
                        <br />
                        {"Date 20 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Jithin Mathew"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10232 · arrival 21 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL983867696"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹34,220.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹29,000.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹5,220.00 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Thirty-four thousand two hundred and twenty only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00114">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00114"}</strong>
                        <br />
                        {"Date 20 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Irina Petrova"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10228 · arrival 3 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL427677454"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹59,590.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹50,500.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹9,090.00 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Fifty-nine thousand five hundred and ninety only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00113">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00113"}</strong>
                        <br />
                        {"Date 20 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Noura Al Saud"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10217 · arrival 31 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL191951011"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹10,383.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹8,799.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,583.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Ten thousand three hundred and eighty-three only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Anita Mohan · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00110">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00110"}</strong>
                        <br />
                        {"Date 20 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Dr Fatima Al Mansoori"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10212 · arrival 18 Dec 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI283513506"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹9,204.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,800.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,404.00 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Nine thousand two hundred and four only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Sneha Joseph · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00109">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00109"}</strong>
                        <br />
                        {"Date 20 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Elsa Lindberg"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10219 · arrival 2 Jan 2027"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI312682570"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹13,687.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹11,599.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,087.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Thirteen thousand six hundred and eighty-seven only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Anita Mohan · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00108">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00108"}</strong>
                        <br />
                        {"Date 19 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Dr Swathi Manav"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10211 · arrival 28 Dec 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL420557605"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹23,127.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹19,599.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹3,527.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Twenty-three thousand one hundred and twenty-seven only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Rahul Vijay · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00107">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00107"}</strong>
                        <br />
                        {"Date 19 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Dr Ayesha Chirag"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10210 · arrival 5 Dec 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Bank transfer (NEFT / RTGS) · NEFT299452990"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹10,383.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹8,799.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,583.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Ten thousand three hundred and eighty-three only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00106">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00106"}</strong>
                        <br />
                        {"Date 19 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Suresh George"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10206 · arrival 8 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL454324854"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹10,029.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹8,499.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,529.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Ten thousand twenty-nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Rahul Vijay · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00105">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00105"}</strong>
                        <br />
                        {"Date 19 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Swathi Sahil"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10216 · arrival 22 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL347102733"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹10,028.82"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹8,499.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,529.82 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Ten thousand twenty-eight and eighty-two paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00102">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00102"}</strong>
                        <br />
                        {"Date 18 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Sheela Philip"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10202 · arrival 20 Jan 2027"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Corporate prepaid · PL230777984"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹27,845.64"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹23,598.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹4,247.64 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Twenty-seven thousand eight hundred and forty-five and sixty-four paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00101">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00101"}</strong>
                        <br />
                        {"Date 18 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Rohit Sahil"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10191 · arrival 27 Dec 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI526280404"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹13,569.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹11,499.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,069.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Thirteen thousand five hundred and sixty-nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Anita Mohan · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00100">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00100"}</strong>
                        <br />
                        {"Date 18 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Anitha Rahman"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10199 · arrival 7 Jan 2027"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Corporate prepaid · PL909862972"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹19,821.64"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹16,798.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹3,023.64 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Nineteen thousand eight hundred and twenty-one and sixty-four paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00097">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00097"}</strong>
                        <br />
                        {"Date 18 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Neha Neil"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10186 · arrival 5 Jan 2027"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI544377354"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹14,751.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹12,500.85"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,250.15 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Fourteen thousand seven hundred and fifty-one only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00094">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00094"}</strong>
                        <br />
                        {"Date 17 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Divya Thomas"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10181 · arrival 25 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Bank transfer (NEFT / RTGS) · NEFT796094809"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹13,330.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹11,296.61"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,033.39 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Thirteen thousand three hundred and thirty only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Sneha Joseph · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00093">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00093"}</strong>
                        <br />
                        {"Date 16 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Luc Moreau"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10180 · arrival 18 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL771543559"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹1,21,647.62"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹1,15,854.88"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹5,792.74 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees One lakh twenty-one thousand six hundred and forty-seven and sixty-two paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00092">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00092"}</strong>
                        <br />
                        {"Date 15 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Shruti Siddharth"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10172 · arrival 18 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI144597979"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹12,037.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹10,200.85"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,836.15 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Twelve thousand thirty-seven only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00091">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00091"}</strong>
                        <br />
                        {"Date 15 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Swathi Dhruv"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10169 · arrival 29 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Credit / debit card · TXN352222391"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹9,203.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,799.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,403.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Nine thousand two hundred and three only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Anita Mohan · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00090">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00090"}</strong>
                        <br />
                        {"Date 15 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Claire Dubois"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10152 · arrival 12 Dec 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI375447728"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹10,973.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹9,299.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,673.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Ten thousand nine hundred and seventy-three only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Sneha Joseph · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00089">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00089"}</strong>
                        <br />
                        {"Date 15 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Prakash Nathan"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10160 · arrival 4 Jan 2027"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Cash"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹11,681.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹9,899.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,781.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Eleven thousand six hundred and eighty-one only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Sneha Joseph · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00088">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00088"}</strong>
                        <br />
                        {"Date 14 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Karthik Siddharth"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10163 · arrival 16 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI803977259"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹10,973.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹9,299.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,673.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Ten thousand nine hundred and seventy-three only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00087">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00087"}</strong>
                        <br />
                        {"Date 14 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Ethan Anderson"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10162 · arrival 17 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL145440283"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹46,200.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹44,000.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,200.00 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Forty-six thousand two hundred only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00086">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00086"}</strong>
                        <br />
                        {"Date 14 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Remya Jacob"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10154 · arrival 9 Dec 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI568004667"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹13,330.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹11,296.61"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,033.39 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Thirteen thousand three hundred and thirty only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Sneha Joseph · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00085">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00085"}</strong>
                        <br />
                        {"Date 14 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Nimal Perera"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10150 · arrival 1 Dec 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI977249526"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹13,923.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹11,799.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,123.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Thirteen thousand nine hundred and twenty-three only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00084">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00084"}</strong>
                        <br />
                        {"Date 13 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Anitha Rahman"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10147 · arrival 14 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL138714096"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹12,036.82"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹10,200.69"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,836.13 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Twelve thousand thirty-six and eighty-two paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00082">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00082"}</strong>
                        <br />
                        {"Date 12 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Omar Al Farsi"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10140 · arrival 19 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL358607316"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹49,980.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹47,600.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,380.00 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Forty-nine thousand nine hundred and eighty only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00081">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00081"}</strong>
                        <br />
                        {"Date 12 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Sheela Nathan"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10136 · arrival 10 Dec 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL240007859"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹16,333.23"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹15,555.46"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹777.77 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Sixteen thousand three hundred and thirty-three and twenty-three paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00077">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00077"}</strong>
                        <br />
                        {"Date 12 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Rakesh Shaan"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10129 · arrival 25 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Bank transfer (NEFT / RTGS) · NEFT466780866"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹9,439.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,999.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,439.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Nine thousand four hundred and thirty-nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00076">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00076"}</strong>
                        <br />
                        {"Date 12 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Jyoti Sagar"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10131 · arrival 12 Dec 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Credit / debit card · TXN448540338"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹10,383.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹8,799.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,583.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Ten thousand three hundred and eighty-three only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00075">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00075"}</strong>
                        <br />
                        {"Date 11 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Vishnu George"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10111 · arrival 9 Jan 2027"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI782559323"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹10,383.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹8,799.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,583.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Ten thousand three hundred and eighty-three only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00074">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00074"}</strong>
                        <br />
                        {"Date 11 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Fatima Al Mansoori"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10125 · arrival 5 Dec 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL396798325"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹11,376.38"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹9,641.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,735.38 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Eleven thousand three hundred and seventy-six and thirty-eight paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00073">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00073"}</strong>
                        <br />
                        {"Date 10 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Ayesha Sahil"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10120 · arrival 19 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL976995438"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹9,026.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,649.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,376.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Nine thousand twenty-six only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Rahul Vijay · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00072">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00072"}</strong>
                        <br />
                        {"Date 9 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Dr Sophie de Vries"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10110 · arrival 17 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Credit / debit card · TXN882056363"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹17,104.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹14,494.92"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,609.08 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Seventeen thousand one hundred and four only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Rahul Vijay · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00064">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00064"}</strong>
                        <br />
                        {"Date 6 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Kavita Siddharth"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10101 · arrival 18 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL158708610"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹46,200.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹44,000.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,200.00 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Forty-six thousand two hundred only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00063">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00063"}</strong>
                        <br />
                        {"Date 6 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Aswathy Nirav"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10098 · arrival 20 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI725543154"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹9,557.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹8,099.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,457.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Nine thousand five hundred and fifty-seven only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00062">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00062"}</strong>
                        <br />
                        {"Date 6 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Wei Tan"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10100 · arrival 15 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL281236336"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹30,086.46"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹25,497.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹4,589.46 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Thirty thousand eighty-six and forty-six paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00059">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00059"}</strong>
                        <br />
                        {"Date 5 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Sindhu Rahman"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10097 · arrival 18 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Credit / debit card · TXN467901312"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹10,029.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹8,499.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,529.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Ten thousand twenty-nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00052">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00052"}</strong>
                        <br />
                        {"Date 3 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Rohit Neil"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10092 · arrival 4 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL355476094"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹12,740.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹10,796.61"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,943.39 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Twelve thousand seven hundred and forty only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Anita Mohan · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00050">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00050"}</strong>
                        <br />
                        {"Date 3 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Biju Joseph"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10087 · arrival 3 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI650059656"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹10,973.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹9,299.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,673.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Ten thousand nine hundred and seventy-three only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Anita Mohan · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00049">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00049"}</strong>
                        <br />
                        {"Date 2 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Marco Rossi"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10086 · arrival 11 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Corporate prepaid · PL616907261"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹80,826.46"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹68,497.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹12,329.46 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Eighty thousand eight hundred and twenty-six and forty-six paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00048">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00048"}</strong>
                        <br />
                        {"Date 2 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Amit Chirag"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10085 · arrival 16 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL937044805"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹11,728.02"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹9,939.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,789.02 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Eleven thousand seven hundred and twenty-eight and two paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00040">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00040"}</strong>
                        <br />
                        {"Date 28 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Claire Dubois"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10079 · arrival 8 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Credit / debit card · TXN786329835"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹7,769.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,399.05"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹369.95 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Seven thousand seven hundred and sixty-nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00039">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00039"}</strong>
                        <br />
                        {"Date 28 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Swathi Dhruv"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10076 · arrival 23 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL173294549"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹7,246.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹6,900.95"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹345.05 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Seven thousand two hundred and forty-six only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00038">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00038"}</strong>
                        <br />
                        {"Date 27 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Harikrishnan Rahman"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10078 · arrival 28 Sep 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI434349996"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹5,461.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹5,200.95"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹260.05 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Five thousand four hundred and sixty-one only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Anita Mohan · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00037">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00037"}</strong>
                        <br />
                        {"Date 27 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Vikas Harsh"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10077 · arrival 30 Sep 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL910933498"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹7,139.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹6,799.05"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹339.95 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Seven thousand one hundred and thirty-nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00036">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00036"}</strong>
                        <br />
                        {"Date 27 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Neethu Krish"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10075 · arrival 29 Sep 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL214344731"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹11,796.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹9,996.61"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,799.39 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Eleven thousand seven hundred and ninety-six only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00034">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00034"}</strong>
                        <br />
                        {"Date 26 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Remya Kurian"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10073 · arrival 1 Jan 2027"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL126227429"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹14,040.82"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹11,899.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,141.82 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Fourteen thousand forty and eighty-two paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00031">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00031"}</strong>
                        <br />
                        {"Date 25 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Lukas Keller"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10070 · arrival 16 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Credit / debit card · TXN152249547"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹10,973.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹9,299.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,673.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Ten thousand nine hundred and seventy-three only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Rahul Vijay · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00027">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00027"}</strong>
                        <br />
                        {"Date 23 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Suresh Wilson"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10062 · arrival 1 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI809166867"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹9,226.51"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,819.08"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,407.43 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Nine thousand two hundred and twenty-six and fifty-one paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Sneha Joseph · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00026">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00026"}</strong>
                        <br />
                        {"Date 23 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Arun Krish"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10063 · arrival 1 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI111053784"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹7,559.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,199.05"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹359.95 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Seven thousand five hundred and fifty-nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00025">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00025"}</strong>
                        <br />
                        {"Date 22 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Nandini Rishi"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10061 · arrival 18 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Credit / debit card · TXN143324336"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹35,306.45"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹33,625.19"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,681.26 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Thirty-five thousand three hundred and six and forty-five paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Anita Mohan · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00024">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00024"}</strong>
                        <br />
                        {"Date 21 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Neha Jatin"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10059 · arrival 23 Sep 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Credit / debit card · TXN230627775"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹7,559.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,199.05"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹359.95 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Seven thousand five hundred and fifty-nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00021">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00021"}</strong>
                        <br />
                        {"Date 20 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Shibu Krish"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10058 · arrival 19 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL557266404"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹46,584.70"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹44,366.38"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,218.32 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Forty-six thousand five hundred and eighty-four and seventy paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00020">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00020"}</strong>
                        <br />
                        {"Date 20 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Vishnu Dev"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10057 · arrival 24 Sep 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL264986734"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹6,090.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹5,800.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹290.00 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Six thousand ninety only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00019">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00019"}</strong>
                        <br />
                        {"Date 19 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Dr Neethu Nathan"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10055 · arrival 3 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL625945843"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹12,507.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹10,599.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,907.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Twelve thousand five hundred and seven only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00018">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00018"}</strong>
                        <br />
                        {"Date 19 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Meera Rahman"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10054 · arrival 3 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Corporate prepaid · PL879278645"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹45,673.08"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹38,706.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹6,967.08 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Forty-five thousand six hundred and seventy-three and eight paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00017">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00017"}</strong>
                        <br />
                        {"Date 18 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Fatima Al Mansoori"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10050 · arrival 20 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL300666463"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹9,439.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,999.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,439.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Nine thousand four hundred and thirty-nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Anita Mohan · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00016">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00016"}</strong>
                        <br />
                        {"Date 17 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mrs Kavita Siddharth"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10048 · arrival 17 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL602910451"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹83,062.56"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹70,392.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹12,670.56 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Eighty-three thousand sixty-two and fifty-six paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00015">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00015"}</strong>
                        <br />
                        {"Date 16 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Dileep Pranav"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10046 · arrival 24 Dec 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL687053647"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹49,957.66"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹42,337.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹7,620.66 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Forty-nine thousand nine hundred and fifty-seven and sixty-six paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00014">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00014"}</strong>
                        <br />
                        {"Date 14 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Jayan Rahman"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10044 · arrival 3 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Credit / debit card · TXN562717194"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹9,344.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,918.64"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,425.36 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Nine thousand three hundred and forty-four only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00013">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00013"}</strong>
                        <br />
                        {"Date 10 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Srinivas Siddharth"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10038 · arrival 30 Sep 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI332892238"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹7,139.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹6,799.05"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹339.95 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Seven thousand one hundred and thirty-nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Rahul Vijay · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00012">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00012"}</strong>
                        <br />
                        {"Date 10 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Unni Wilson"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10036 · arrival 3 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Bank transfer (NEFT / RTGS) · NEFT677172489"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹31,151.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹26,399.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹4,751.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Thirty-one thousand one hundred and fifty-one only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00011">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00011"}</strong>
                        <br />
                        {"Date 7 Sep 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Elsa Lindberg"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10033 · arrival 19 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL119249456"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹53,761.05"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹51,201.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,560.05 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Fifty-three thousand seven hundred and sixty-one and five paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00010">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00010"}</strong>
                        <br />
                        {"Date 22 Aug 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Lakshmi Mathew"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10022 · arrival 22 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Credit / debit card · TXN680270750"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹41,409.04"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹39,437.18"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,971.86 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Forty-one thousand four hundred and nine and four paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Anita Mohan · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00009">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00009"}</strong>
                        <br />
                        {"Date 22 Aug 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Isha Dhruv"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10023 · arrival 20 Sep 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL540933031"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹7,559.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,199.05"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹359.95 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Seven thousand five hundred and fifty-nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00008">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00008"}</strong>
                        <br />
                        {"Date 17 Aug 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Liam Walker"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10020 · arrival 20 Sep 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI309816774"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹7,181.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹6,839.05"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹341.95 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Seven thousand one hundred and eighty-one only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00007">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00007"}</strong>
                        <br />
                        {"Date 15 Aug 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Sanjay Joseph"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10018 · arrival 18 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI300494525"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹17,224.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹14,596.61"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹2,627.39 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Seventeen thousand two hundred and twenty-four only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Sneha Joseph · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00006">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00006"}</strong>
                        <br />
                        {"Date 9 Aug 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Ms Sreelakshmi Krish"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10016 · arrival 17 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL508842409"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹22,984.04"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹19,478.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹3,506.04 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Twenty-two thousand nine hundred and eighty-four and four paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00005">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00005"}</strong>
                        <br />
                        {"Date 4 Aug 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Dr Anna Schneider"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10012 · arrival 15 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL597134689"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹9,203.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,799.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,403.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Nine thousand two hundred and three only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00004">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00004"}</strong>
                        <br />
                        {"Date 27 Jul 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Dr Sophie de Vries"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10009 · arrival 13 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI926171713"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹6,721.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹6,400.95"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹320.05 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Six thousand seven hundred and twenty-one only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Anita Mohan · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00003">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00003"}</strong>
                        <br />
                        {"Date 21 Jul 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Ajay Jatin"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10008 · arrival 18 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Bank transfer (NEFT / RTGS) · NEFT104886500"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹6,385.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹6,080.95"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹304.05 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Six thousand three hundred and eighty-five only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Thomas Kurian · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00002">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00002"}</strong>
                        <br />
                        {"Date 20 Jul 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Ravi Kabir"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10006 · arrival 22 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"OTA prepaid / virtual card · PL495609783"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹43,277.68"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹36,676.00"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹6,601.68 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Forty-three thousand two hundred and seventy-seven and sixty-eight paise only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-00001">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00001"}</strong>
                        <br />
                        {"Date 1 Jul 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Ethan Anderson"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10001 · arrival 15 Oct 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"Payment link · PL783935874"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹9,439.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹7,999.15"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,439.85 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Nine thousand four hundred and thirty-nine only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Aviv PMS (automatic) · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
                <div className="variant v-a-new">
                  <div className="paper-bar no-print">
                    <Link className="btn pb-back" data-leads-to="FD-35" to={"/front-desk/fd-35-advance-deposit-ledger"}>{"← Back to advance deposits"}</Link>
                    <span className="fd-muted">{"Print with Ctrl+P · A5"}</span>
                  </div>
                  <article className="paper paper--a5" data-code="FD-O16">
                    <header className="paper__head">
                      <div>
                        <div className="paper__brand">{"The Aviv Kochi"}</div>
                        <div>
                          {"Bristow Road, Willingdon Island, Kochi 682 003, Kerala"}
                          <br />
                          {"GSTIN 32AACCE1226H1Z9 · State Kerala (32) · PAN AACCE1226H"}
                          <br />
                          {"+91 4842668888 · reservations@avivkochi.example"}
                        </div>
                      </div>
                      <div className="paper__meta">
                        <strong>{"ADVANCE RECEIPT VOUCHER"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"RC-26-27-00481"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                      </div>
                    </header>
                    <table>
                      <tbody>
                        <tr>
                          <th>{"Received from"}</th>
                          <td>{"Mr Liam Walker"}</td>
                        </tr>
                        <tr>
                          <th>{"Booking / folio"}</th>
                          <td>{"FK-10247 · arrival 3 Nov 2026"}</td>
                        </tr>
                        <tr>
                          <th>{"Mode"}</th>
                          <td>{"UPI · UPI 602290114455"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount"}</th>
                          <td>
                            <strong>{"₹25,000.00"}</strong>
                          </td>
                        </tr>
                        <tr>
                          <th>{"Taxable value (advance)"}</th>
                          <td>{"₹23,809.52"}</td>
                        </tr>
                        <tr>
                          <th>{"CGST 2.5% + SGST 2.5%"}</th>
                          <td>{"₹1,190.48 (GST on advance, Section 13 CGST Act)"}</td>
                        </tr>
                        <tr>
                          <th>{"Amount in words"}</th>
                          <td>{"Rupees Twenty-five thousand only"}</td>
                        </tr>
                        <tr>
                          <th>{"Received by"}</th>
                          <td>{"Sneha Joseph · Counter 1 · shift SH-0422-M"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"Cashier"}</div>
                    </div>
                    <footer className="paper__foot">{"Card numbers are never stored; only the last 4 digits appear on receipts."}</footer>
                  </article>
                </div>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"FD-O16"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd />
                  <dt>{"Opened from"}</dt>
                  <dd>{"–"}</dd>
                  <dt>{"Leads to"}</dt>
                  <dd>{"–"}</dd>
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
