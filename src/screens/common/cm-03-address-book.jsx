// GENERATED from public/common/cm-03-address-book/index.html by scripts/convert_legacy.py.
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
    "href": "/common/cm-03-address-book/cm-03-address-book.css",
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

export default function CommonCm03AddressBook() {
  return (
    <ScreenShell title="Address Book" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="CM-03" data-code="CM-03" data-static="1" className="legacy-body">
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
              <details className="nav__sub" data-group="tools" open={true}>
                <summary className="nav__item nav__group">
                  {"Tools"}
                  <svg className="icon nav__chev" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#chevron-down" />
                  </svg>
                </summary>
                <div className="nav__list">
                  <Link className="nav__item is-active" data-nav="CM-03" aria-current="page" title="Address Book" to={"/common/cm-03-address-book"}>
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
            <main className="app__content" id="main" data-code="CM-03" tabIndex="-1">
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
                        <span>{"Tools"}</span>
                      </li>
                      <li>
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-right" />
                        </svg>
                        <span aria-current="page">{"Address Book"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Address Book"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"CM-03"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hs1" type="search" name="q" placeholder="Name, company, phone, email or extension" aria-label="Name, company, phone, email or extension" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hs1" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="page-header__actions" />
                </div>
              </header>
              <div className="ab" data-code="CM-03-list">
                <span className="va" id="t-all" />
                <span className="va" id="t-guest" />
                <span className="va" id="t-company" />
                <span className="va" id="t-agent" />
                <span className="va" id="t-vendor" />
                <span className="va" id="t-staff" />
                <div className="rb-row ih-chips">
                  <a className="rb-chip ab-chip--t-all" href="#t-all">
                    {"All"}
                    <span className="ltabs__n">{"89"}</span>
                  </a>
                  <a className="rb-chip ab-chip--t-guest" href="#t-guest">
                    {"Guests"}
                    <span className="ltabs__n">{"36"}</span>
                  </a>
                  <a className="rb-chip ab-chip--t-company" href="#t-company">
                    {"Company"}
                    <span className="ltabs__n">{"17"}</span>
                  </a>
                  <a className="rb-chip ab-chip--t-agent" href="#t-agent">
                    {"Travel agent"}
                    <span className="ltabs__n">{"13"}</span>
                  </a>
                  <a className="rb-chip ab-chip--t-vendor" href="#t-vendor">
                    {"Vendor"}
                    <span className="ltabs__n">{"7"}</span>
                  </a>
                  <a className="rb-chip ab-chip--t-staff" href="#t-staff">
                    {"Staff"}
                    <span className="ltabs__n">{"16"}</span>
                  </a>
                </div>
                <div className="pgw">
                  <div className="s-scroll s-scroll--tall">
                    <table className="srt dt__table" data-code="CM-03-table" style={{"--srt-cols": "auto auto auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Address book"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <input className="srt-i srt-a0" type="radio" name="stcm030" id="stcm030-0a" aria-label="Sort by Name, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="stcm030" id="stcm030-0d" aria-label="Sort by Name, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stcm030-0a">{"Name"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stcm030-0d" aria-hidden="true">{"Name"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="stcm030" id="stcm030-1a" aria-label="Sort by Type, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="stcm030" id="stcm030-1d" aria-label="Sort by Type, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stcm030-1a">{"Type"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stcm030-1d" aria-hidden="true">{"Type"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="stcm030" id="stcm030-2a" aria-label="Sort by Company, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="stcm030" id="stcm030-2d" aria-label="Sort by Company, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stcm030-2a">{"Company"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stcm030-2d" aria-hidden="true">{"Company"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a3" type="radio" name="stcm030" id="stcm030-3a" aria-label="Sort by Phone, lowest or A first" />
                            <input className="srt-i srt-d3" type="radio" name="stcm030" id="stcm030-3d" aria-label="Sort by Phone, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stcm030-3a">{"Phone"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stcm030-3d" aria-hidden="true">{"Phone"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a4" type="radio" name="stcm030" id="stcm030-4a" aria-label="Sort by Email, lowest or A first" />
                            <input className="srt-i srt-d4" type="radio" name="stcm030" id="stcm030-4d" aria-label="Sort by Email, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stcm030-4a">{"Email"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stcm030-4d" aria-hidden="true">{"Email"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a5" type="radio" name="stcm030" id="stcm030-5a" aria-label="Sort by Ext., lowest or A first" />
                            <input className="srt-i srt-d5" type="radio" name="stcm030" id="stcm030-5d" aria-label="Sort by Ext., highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stcm030-5a">{"Ext."}</label>
                            <label className="srt-l srt-l--d" htmlFor="stcm030-5d" aria-hidden="true">{"Ext."}</label>
                          </th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="ab-r r-guest" style={{"--k0": "47", "--k1": "2", "--k2": "39", "--k3": "44", "--k4": "62", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10">
                              <strong>{"Ms Meera Abraham"}</strong>
                            </a>
                            <span className="fd-sub">{"Aviv Club Silver"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 8058713075"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"meera.abraham126@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+918058713075" aria-label="Call Ms Meera Abraham" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "79", "--k1": "2", "--k2": "39", "--k3": "29", "--k4": "89", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0167">
                              <strong>{"Mr Vishnu Abraham"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7065309363"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"vishnu.abraham167@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917065309363" aria-label="Call Mr Vishnu Abraham" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0167" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "6", "--k1": "2", "--k2": "39", "--k3": "14", "--k4": "5", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0212">
                              <strong>{"Mr Arun Abraham"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 6060710106"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"arun.abraham212@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+916060710106" aria-label="Call Mr Arun Abraham" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0212" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "64", "--k1": "2", "--k2": "39", "--k3": "37", "--k4": "81", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0218">
                              <strong>{"Mr Sanjay Abraham"}</strong>
                            </a>
                            <span className="fd-sub">{"Aviv Club Member"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7095317983"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"sanjay.abraham218@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917095317983" aria-label="Call Mr Sanjay Abraham" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0218" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "52", "--k1": "2", "--k2": "39", "--k3": "40", "--k4": "65", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0351">
                              <strong>{"Mr Nikhil Abraham"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 8027717448"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"nikhil.abraham351@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+918027717448" aria-label="Call Mr Nikhil Abraham" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0351" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "55", "--k1": "2", "--k2": "39", "--k3": "79", "--k4": "70", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0030">
                              <strong>{"Mr Omar Al Farsi"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+971 752519234"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"omar.alfarsi30@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+971752519234" aria-label="Call Mr Omar Al Farsi" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0030" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "55", "--k1": "2", "--k2": "39", "--k3": "80", "--k4": "72", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0086">
                              <strong>{"Mr Omar Al Farsi"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+971 760705120"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"omar.alfarsi86@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+971760705120" aria-label="Call Mr Omar Al Farsi" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0086" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "55", "--k1": "2", "--k2": "39", "--k3": "82", "--k4": "69", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0194">
                              <strong>{"Mr Omar Al Farsi"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+971 795465813"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"omar.alfarsi194@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+971795465813" aria-label="Call Mr Omar Al Farsi" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0194" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "55", "--k1": "2", "--k2": "39", "--k3": "76", "--k4": "71", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0355">
                              <strong>{"Mr Omar Al Farsi"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+971 710382233"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"omar.alfarsi355@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+971710382233" aria-label="Call Mr Omar Al Farsi" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0355" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "23", "--k1": "2", "--k2": "39", "--k3": "78", "--k4": "49", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0066">
                              <strong>{"Ms Fatima Al Mansoori"}</strong>
                            </a>
                            <span className="fd-sub">{"Aviv Club Silver"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+971 738562996"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"fatima.almansoori66@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+971738562996" aria-label="Call Ms Fatima Al Mansoori" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0066" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "24", "--k1": "2", "--k2": "39", "--k3": "77", "--k4": "46", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0101">
                              <strong>{"Ms Fatima Al Mansoori"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+971 715835911"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"fatima.almansoori101@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+971715835911" aria-label="Call Ms Fatima Al Mansoori" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0101" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "24", "--k1": "2", "--k2": "39", "--k3": "75", "--k4": "47", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0132">
                              <strong>{"Mrs Fatima Al Mansoori"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+971 705478355"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"fatima.almansoori132@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+971705478355" aria-label="Call Mrs Fatima Al Mansoori" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0132" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "24", "--k1": "2", "--k2": "39", "--k3": "81", "--k4": "48", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0266">
                              <strong>{"Dr Fatima Al Mansoori"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+971 778757866"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"fatima.almansoori266@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+971778757866" aria-label="Call Dr Fatima Al Mansoori" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0266" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "54", "--k1": "2", "--k2": "39", "--k3": "74", "--k4": "66", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0234">
                              <strong>{"Ms Noura Al Saud"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+966 765835597"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"noura.alsaud234@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+966765835597" aria-label="Call Ms Noura Al Saud" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0234" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "54", "--k1": "2", "--k2": "39", "--k3": "73", "--k4": "67", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0268">
                              <strong>{"Ms Noura Al Saud"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+966 729059763"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"noura.alsaud268@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+966729059763" aria-label="Call Ms Noura Al Saud" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0268" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "53", "--k1": "2", "--k2": "39", "--k3": "72", "--k4": "68", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0374">
                              <strong>{"Ms Noura Al Saud"}</strong>
                            </a>
                            <span className="fd-sub">{"Aviv Club Platinum"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+966 704043704"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"noura.alsaud374@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+966704043704" aria-label="Call Ms Noura Al Saud" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0374" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "41", "--k1": "2", "--k2": "39", "--k3": "84", "--k4": "60", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0041">
                              <strong>{"Mr Khalid Al Thani"}</strong>
                            </a>
                            <span className="fd-sub">{"Aviv Club Silver"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+974 762043925"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"khalid.althani41@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+974762043925" aria-label="Call Mr Khalid Al Thani" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0041" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "42", "--k1": "2", "--k2": "39", "--k3": "83", "--k4": "59", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0113">
                              <strong>{"Mr Khalid Al Thani"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+974 741566850"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"khalid.althani113@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+974741566850" aria-label="Call Mr Khalid Al Thani" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0113" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "20", "--k1": "2", "--k2": "39", "--k3": "1", "--k4": "42", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0176">
                              <strong>{"Mr Ethan Anderson"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+1 743994985"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"ethan.anderson176@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+1743994985" aria-label="Call Mr Ethan Anderson" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0176" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "20", "--k1": "2", "--k2": "39", "--k3": "4", "--k4": "43", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0384">
                              <strong>{"Mr Ethan Anderson"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+1 784882037"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"ethan.anderson384@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+1784882037" aria-label="Call Mr Ethan Anderson" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0384" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "21", "--k1": "2", "--k2": "39", "--k3": "43", "--k4": "44", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0274">
                              <strong>{"Mrs Farah Bijoy"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 8040601770"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"farah.bijoy274@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+918040601770" aria-label="Call Mrs Farah Bijoy" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0274" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "1", "--k1": "2", "--k2": "39", "--k3": "48", "--k4": "1", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0293">
                              <strong>{"Mr Amit Bijoy"}</strong>
                            </a>
                            <span className="fd-sub">{"Aviv Club Platinum"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 8079085485"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"amit.bijoy293@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+918079085485" aria-label="Call Mr Amit Bijoy" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0293" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "58", "--k1": "2", "--k2": "39", "--k3": "27", "--k4": "74", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0341">
                              <strong>{"Mr Prasad Bijoy"}</strong>
                            </a>
                            <span className="fd-sub">{"Aviv Club Member"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7047366892"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"prasad.bijoy341@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917047366892" aria-label="Call Mr Prasad Bijoy" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0341" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "17", "--k1": "2", "--k2": "39", "--k3": "5", "--k4": "40", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0077">
                              <strong>{"Mrs Emily Brooks"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+1 797029700"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"emily.brooks77@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+1797029700" aria-label="Call Mrs Emily Brooks" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0077" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "36", "--k1": "2", "--k2": "39", "--k3": "3", "--k4": "57", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0271">
                              <strong>{"Mr James Carter"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+1 767445554"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"james.carter271@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+1767445554" aria-label="Call Mr James Carter" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0271" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "36", "--k1": "2", "--k2": "39", "--k3": "2", "--k4": "58", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0396">
                              <strong>{"Mr James Carter"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+1 748129287"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"james.carter396@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+1748129287" aria-label="Call Mr James Carter" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0396" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "35", "--k1": "2", "--k2": "39", "--k3": "32", "--k4": "56", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0048">
                              <strong>{"Ms Isha Chirag"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7068165209"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"isha.chirag48@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917068165209" aria-label="Call Ms Isha Chirag" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0048" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "34", "--k1": "2", "--k2": "39", "--k3": "58", "--k4": "55", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0070">
                              <strong>{"Mr Imran Chirag"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9067458485"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"imran.chirag70@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919067458485" aria-label="Call Mr Imran Chirag" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0070" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "61", "--k1": "2", "--k2": "39", "--k3": "42", "--k4": "78", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0147">
                              <strong>{"Dr Ritu Chirag"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 8040461565"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"ritu.chirag147@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+918040461565" aria-label="Call Dr Ritu Chirag" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0147" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "51", "--k1": "2", "--k2": "39", "--k3": "17", "--k4": "64", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0175">
                              <strong>{"Mr Naveen Chirag"}</strong>
                            </a>
                            <span className="fd-sub">{"Aviv Club Silver"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 6098282168"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"naveen.chirag175@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+916098282168" aria-label="Call Mr Naveen Chirag" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0175" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "59", "--k1": "2", "--k2": "39", "--k3": "57", "--k4": "75", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0189">
                              <strong>{"Mr Prasad Chirag"}</strong>
                            </a>
                            <span className="fd-sub">{"Aviv Club Silver"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9054426995"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"prasad.chirag189@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919054426995" aria-label="Call Mr Prasad Chirag" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0189" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "72", "--k1": "2", "--k2": "39", "--k3": "56", "--k4": "84", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0208">
                              <strong>{"Ms Swathi Chirag"}</strong>
                            </a>
                            <span className="fd-sub">{"Aviv Club Member"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9045572697"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"swathi.chirag208@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919045572697" aria-label="Call Ms Swathi Chirag" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0208" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "27", "--k1": "2", "--k2": "39", "--k3": "46", "--k4": "51", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0243">
                              <strong>{"Mr Ganesh Chirag"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 8065506042"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"ganesh.chirag243@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+918065506042" aria-label="Call Mr Ganesh Chirag" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0243" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "2", "--k1": "2", "--k2": "39", "--k3": "13", "--k4": "2", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0262">
                              <strong>{"Mr Amit Chirag"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 6050175895"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"amit.chirag262@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+916050175895" aria-label="Call Mr Amit Chirag" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0262" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "62", "--k1": "2", "--k2": "39", "--k3": "36", "--k4": "79", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0290">
                              <strong>{"Mr Rohit Chirag"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7087285635"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"rohit.chirag290@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917087285635" aria-label="Call Mr Rohit Chirag" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0290" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-guest" style={{"--k0": "7", "--k1": "2", "--k2": "39", "--k3": "24", "--k4": "6", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-GP-0321">
                              <strong>{"Dr Ayesha Chirag"}</strong>
                            </a>
                            <span className="fd-sub">{"Guest profile"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#user" />
                              </svg>
                              {"Guest"}
                            </span>
                          </td>
                          <td className="dt__td" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7042582560"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"ayesha.chirag321@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917042582560" aria-label="Call Dr Ayesha Chirag" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-GP-0321" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "45", "--k1": "1", "--k2": "22", "--k3": "53", "--k4": "17", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-001">
                              <strong>{"Malabar Spice Exports Pvt Ltd"}</strong>
                            </a>
                            <span className="fd-sub">{"Kabir Ranjan · Travel desk · GSTIN 32UGFFM1273U1ZY"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company">{"Malabar Spice Exports Pvt Ltd"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9033125171"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings1@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919033125171" aria-label="Call Malabar Spice Exports Pvt Ltd" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-001" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "13", "--k1": "1", "--k2": "7", "--k3": "34", "--k4": "28", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-002">
                              <strong>{"Cochin Marine Services Ltd"}</strong>
                            </a>
                            <span className="fd-sub">{"Preethi Thomas · Travel desk · GSTIN 32DMCFC1243F1ZG"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company">{"Cochin Marine Services Ltd"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7085193988"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings2@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917085193988" aria-label="Call Cochin Marine Services Ltd" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-002" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "56", "--k1": "1", "--k2": "26", "--k3": "35", "--k4": "30", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-003">
                              <strong>{"Periyar Infotech Solutions"}</strong>
                            </a>
                            <span className="fd-sub">{"Anand Ranjan · Travel desk · GSTIN 32VHBFP8919P1ZR"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company">{"Periyar Infotech Solutions"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7086396491"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings3@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917086396491" aria-label="Call Periyar Infotech Solutions" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-003" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "81", "--k1": "1", "--k2": "38", "--k3": "19", "--k4": "31", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-004">
                              <strong>{"Willingdon Logistics LLP"}</strong>
                            </a>
                            <span className="fd-sub">{"Suma Thomas · Travel desk · GSTIN 32VJPCW7788C1ZP"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Willingdon Logistics LLP"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7027567673"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings4@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917027567673" aria-label="Call Willingdon Logistics LLP" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-004" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "8", "--k1": "1", "--k2": "2", "--k3": "54", "--k4": "32", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-005">
                              <strong>{"Backwater Analytics Pvt Ltd"}</strong>
                            </a>
                            <span className="fd-sub">{"Ravi Vijay · Travel desk · GSTIN 32AWJCB2780J1ZE"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company">{"Backwater Analytics Pvt Ltd"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9034072540"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings5@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919034072540" aria-label="Call Backwater Analytics Pvt Ltd" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-005" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "38", "--k1": "1", "--k2": "17", "--k3": "45", "--k4": "33", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-006">
                              <strong>{"Kerala Heritage Foods Ltd"}</strong>
                            </a>
                            <span className="fd-sub">{"Anand Nathan · Travel desk · GSTIN 32RVMCK4591S1Z0"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Kerala Heritage Foods Ltd"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 8062808145"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings6@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+918062808145" aria-label="Call Kerala Heritage Foods Ltd" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-006" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "19", "--k1": "1", "--k2": "10", "--k3": "31", "--k4": "34", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-007">
                              <strong>{"Ernakulam Pharma Distributors"}</strong>
                            </a>
                            <span className="fd-sub">{"Joseph Thomas · Travel desk · GSTIN 32GLECE3002C1ZU"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company">{"Ernakulam Pharma Distributors"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7067553639"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings7@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917067553639" aria-label="Call Ernakulam Pharma Distributors" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-007" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "4", "--k1": "1", "--k2": "1", "--k3": "28", "--k4": "35", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-008">
                              <strong>{"Arabian Sea Shipping Agency"}</strong>
                            </a>
                            <span className="fd-sub">{"Joseph Vijay · Travel desk · GSTIN 32BVRFA8573D1Z4"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company">{"Arabian Sea Shipping Agency"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7062966492"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings8@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917062966492" aria-label="Call Arabian Sea Shipping Agency" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-008" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "70", "--k1": "1", "--k2": "32", "--k3": "49", "--k4": "36", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-009">
                              <strong>{"Spice Route Hospitality Consultants"}</strong>
                            </a>
                            <span className="fd-sub">{"Ravi Vijay · Travel desk · GSTIN 29VMTCS3855J1Z7"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company">{"Spice Route Hospitality Consultants"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 8081251059"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings9@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+918081251059" aria-label="Call Spice Route Hospitality Consultants" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-009" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "74", "--k1": "1", "--k2": "34", "--k3": "21", "--k4": "7", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-010">
                              <strong>{"TechPark Kochi Systems"}</strong>
                            </a>
                            <span className="fd-sub">{"Anand Nathan · Travel desk · GSTIN 32ARVCT4798U1ZU"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"TechPark Kochi Systems"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7029772251"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings10@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917029772251" aria-label="Call TechPark Kochi Systems" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-010" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "63", "--k1": "1", "--k2": "28", "--k3": "51", "--k4": "8", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-011">
                              <strong>{"Sahyadri Textiles Ltd"}</strong>
                            </a>
                            <span className="fd-sub">{"Ravi Vijay · Travel desk · GSTIN 29CGBFS5830V1ZW"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Sahyadri Textiles Ltd"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9017778098"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings11@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919017778098" aria-label="Call Sahyadri Textiles Ltd" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-011" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "14", "--k1": "1", "--k2": "8", "--k3": "22", "--k4": "9", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-012">
                              <strong>{"Coir Craft Industries"}</strong>
                            </a>
                            <span className="fd-sub">{"Joseph Ishaan · Travel desk · GSTIN 32AFSCC5923B1ZL"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Coir Craft Industries"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7030882242"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings12@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917030882242" aria-label="Call Coir Craft Industries" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-012" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "80", "--k1": "1", "--k2": "37", "--k3": "23", "--k4": "10", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-013">
                              <strong>{"Vypin Engineering Works"}</strong>
                            </a>
                            <span className="fd-sub">{"Anand Mohan · Travel desk · GSTIN 33HDRCV6149B1ZU"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Vypin Engineering Works"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7039770844"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings13@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917039770844" aria-label="Call Vypin Engineering Works" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-013" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "75", "--k1": "1", "--k2": "36", "--k3": "52", "--k4": "11", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-014">
                              <strong>{"Thevara Motors Pvt Ltd"}</strong>
                            </a>
                            <span className="fd-sub">{"Ravi Thomas · Travel desk · GSTIN 32HBMFT9191H1ZH"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Thevara Motors Pvt Ltd"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9027610007"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings14@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919027610007" aria-label="Call Thevara Motors Pvt Ltd" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-014" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "16", "--k1": "1", "--k2": "9", "--k3": "39", "--k4": "12", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-015">
                              <strong>{"Deccan Capital Advisors"}</strong>
                            </a>
                            <span className="fd-sub">{"Preethi Ranjan · Travel desk · GSTIN 27TETCD3589L1ZY"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Deccan Capital Advisors"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 8024491082"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings15@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+918024491082" aria-label="Call Deccan Capital Advisors" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-015" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-agent" style={{"--k0": "57", "--k1": "4", "--k2": "27", "--k3": "25", "--k4": "13", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-016">
                              <strong>{"Periyar Tours & Travels"}</strong>
                            </a>
                            <span className="fd-sub">{"Preethi Vijay · Reservations · GSTIN 32NPAFP1982W1ZC"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Travel agent"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Periyar Tours & Travels"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7043782171"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings16@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917043782171" aria-label="Call Periyar Tours & Travels" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-016" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-agent" style={{"--k0": "9", "--k1": "4", "--k2": "3", "--k3": "55", "--k4": "14", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-017">
                              <strong>{"Backwater Holidays"}</strong>
                            </a>
                            <span className="fd-sub">{"Joseph Mohan · Reservations · GSTIN 32RPNCB7136N1ZZ"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Travel agent"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Backwater Holidays"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9044750444"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings17@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919044750444" aria-label="Call Backwater Holidays" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-017" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-agent" style={{"--k0": "40", "--k1": "4", "--k2": "19", "--k3": "47", "--k4": "15", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-018">
                              <strong>{"Kerala Trails Travel Co"}</strong>
                            </a>
                            <span className="fd-sub">{"Anand Mohan · Reservations · GSTIN 32BJTCK7024M1ZJ"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Travel agent"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Kerala Trails Travel Co"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 8067524975"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings18@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+918067524975" aria-label="Call Kerala Trails Travel Co" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-018" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-agent" style={{"--k0": "69", "--k1": "4", "--k2": "31", "--k3": "59", "--k4": "16", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-019">
                              <strong>{"Spice Coast Journeys"}</strong>
                            </a>
                            <span className="fd-sub">{"Anand Ranjan · Reservations · GSTIN 32GPRCS4502L1Z5"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Travel agent"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Spice Coast Journeys"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9096928202"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings19@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919096928202" aria-label="Call Spice Coast Journeys" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-019" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-agent" style={{"--k0": "32", "--k1": "4", "--k2": "15", "--k3": "16", "--k4": "18", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-020">
                              <strong>{"Heritage Routes Travel"}</strong>
                            </a>
                            <span className="fd-sub">{"Anand Vijay · Reservations · GSTIN 29SCTFH8736W1Z4"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Travel agent"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Heritage Routes Travel"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 6087508486"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings20@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+916087508486" aria-label="Call Heritage Routes Travel" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-020" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-agent" style={{"--k0": "12", "--k1": "4", "--k2": "6", "--k3": "30", "--k4": "19", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-021">
                              <strong>{"Bluewave Travel Mart"}</strong>
                            </a>
                            <span className="fd-sub">{"Kabir Thomas · Reservations · GSTIN 33TKKCB8679F1Z7"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Travel agent"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Bluewave Travel Mart"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7066850448"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings21@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917066850448" aria-label="Call Bluewave Travel Mart" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-021" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-agent" style={{"--k0": "50", "--k1": "4", "--k2": "25", "--k3": "18", "--k4": "20", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-022">
                              <strong>{"Munnar Mist Holidays"}</strong>
                            </a>
                            <span className="fd-sub">{"Kabir Thomas · Reservations · GSTIN 32EMKFM9160R1ZS"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Travel agent"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Munnar Mist Holidays"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7014416907"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings22@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917014416907" aria-label="Call Munnar Mist Holidays" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-022" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-agent" style={{"--k0": "28", "--k1": "4", "--k2": "12", "--k3": "15", "--k4": "21", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-023">
                              <strong>{"Gateway Kochi Travels"}</strong>
                            </a>
                            <span className="fd-sub">{"Ravi Thomas · Reservations · GSTIN 32JKACG7920M1ZR"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Travel agent"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Gateway Kochi Travels"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 6078889321"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings23@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+916078889321" aria-label="Call Gateway Kochi Travels" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-023" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-agent" style={{"--k0": "71", "--k1": "4", "--k2": "33", "--k3": "20", "--k4": "22", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-024">
                              <strong>{"Sunrise Tours India"}</strong>
                            </a>
                            <span className="fd-sub">{"Anand Nathan · Reservations · GSTIN 07LNNCS4728J1ZT"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Travel agent"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Sunrise Tours India"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7028434077"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings24@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917028434077" aria-label="Call Sunrise Tours India" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-024" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-agent" style={{"--k0": "25", "--k1": "4", "--k2": "11", "--k3": "50", "--k4": "23", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-025">
                              <strong>{"Fort Kochi Experiences"}</strong>
                            </a>
                            <span className="fd-sub">{"Preethi Vijay · Reservations · GSTIN 32JCLCF5562W1ZC"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Travel agent"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Fort Kochi Experiences"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9013445968"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings25@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919013445968" aria-label="Call Fort Kochi Experiences" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-025" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-agent" style={{"--k0": "30", "--k1": "4", "--k2": "13", "--k3": "38", "--k4": "24", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-026">
                              <strong>{"Global Pathways DMC"}</strong>
                            </a>
                            <span className="fd-sub">{"Anand Thomas · Reservations · GSTIN 27TRWFG7648R1ZJ"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Travel agent"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Global Pathways DMC"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 8024197985"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings26@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+918024197985" aria-label="Call Global Pathways DMC" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-026" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-agent" style={{"--k0": "68", "--k1": "4", "--k2": "30", "--k3": "41", "--k4": "25", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-027">
                              <strong>{"Southern Skies Travel"}</strong>
                            </a>
                            <span className="fd-sub">{"Kabir Vijay · Reservations · GSTIN 36TGNCS8610L1ZY"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Travel agent"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Southern Skies Travel"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 8028815203"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings27@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+918028815203" aria-label="Call Southern Skies Travel" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-027" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "39", "--k1": "1", "--k2": "18", "--k3": "33", "--k4": "26", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-028">
                              <strong>{"Kerala State Delegation Office"}</strong>
                            </a>
                            <span className="fd-sub">{"Joseph Nathan · Travel desk · GSTIN 32CREGK7260N1Z1"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company">{"Kerala State Delegation Office"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7069457937"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings28@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917069457937" aria-label="Call Kerala State Delegation Office" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-028" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-company" style={{"--k0": "66", "--k1": "1", "--k2": "29", "--k3": "12", "--k4": "27", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-029">
                              <strong>{"Skyline Airways Crew Desk"}</strong>
                            </a>
                            <span className="fd-sub">{"Ravi Mohan · Travel desk · GSTIN 32VMCFS2817E1ZE"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Company"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Skyline Airways Crew Desk"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 6018191253"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings29@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+916018191253" aria-label="Call Skyline Airways Crew Desk" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-029" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-agent" style={{"--k0": "49", "--k1": "4", "--k2": "24", "--k3": "26", "--k4": "29", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-AC-030">
                              <strong>{"Monsoon Escapes Travel"}</strong>
                            </a>
                            <span className="fd-sub">{"Leena Vijay · Reservations · GSTIN 32NTUCM2174L1ZL"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Travel agent"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Monsoon Escapes Travel"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 7044329924"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings30@example.com"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+917044329924" aria-label="Call Monsoon Escapes Travel" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-AC-030" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-vendor" style={{"--k0": "43", "--k1": "5", "--k2": "20", "--k3": "61", "--k4": "39", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-V-001">
                              <strong>{"Kochi Cabs"}</strong>
                            </a>
                            <span className="fd-sub">{"Taxi and airport transfers"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Vendor"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Kochi Cabs"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 98470 31200"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"dispatch@kochicabs.example"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919847031200" aria-label="Call Kochi Cabs" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-V-001" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-vendor" style={{"--k0": "10", "--k1": "5", "--k2": "4", "--k3": "60", "--k4": "37", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-V-002">
                              <strong>{"Backwater Travels"}</strong>
                            </a>
                            <span className="fd-sub">{"Tours, tempo traveller and bus"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Vendor"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Backwater Travels"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 94470 55120"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"bookings@backwatertravels.example"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919447055120" aria-label="Call Backwater Travels" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-V-002" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-vendor" style={{"--k0": "11", "--k1": "5", "--k2": "5", "--k3": "9", "--k4": "61", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-V-003">
                              <strong>{"Blue Dart, Willingdon Island"}</strong>
                            </a>
                            <span className="fd-sub">{"Courier"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Vendor"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company">{"Blue Dart, Willingdon Island"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 484 266 0412"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"kochi.wi@bluedart.example"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+914842660412" aria-label="Call Blue Dart, Willingdon Island" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-V-003" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-vendor" style={{"--k0": "44", "--k1": "5", "--k2": "21", "--k3": "6", "--k4": "73", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-V-004">
                              <strong>{"Lakeshore Pharmacy"}</strong>
                            </a>
                            <span className="fd-sub">{"Medicines delivery"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Vendor"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Lakeshore Pharmacy"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 484 235 1177"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"orders@lakeshorepharmacy.example"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+914842351177" aria-label="Call Lakeshore Pharmacy" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-V-004" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-vendor" style={{"--k0": "46", "--k1": "5", "--k2": "23", "--k3": "8", "--k4": "53", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-V-005">
                              <strong>{"Marine Drive Flowers"}</strong>
                            </a>
                            <span className="fd-sub">{"Flowers and gifts"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Vendor"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Marine Drive Flowers"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 484 238 8120"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"hello@marinedriveflowers.example"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+914842388120" aria-label="Call Marine Drive Flowers" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-V-005" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-vendor" style={{"--k0": "31", "--k1": "5", "--k2": "14", "--k3": "7", "--k4": "77", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-V-006">
                              <strong>{"Grand Bay Hotel, Marine Drive"}</strong>
                            </a>
                            <span className="fd-sub">{"Partner hotel for walk guests"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Vendor"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company">{"Grand Bay Hotel, Marine Drive"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 484 236 5001"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"reservations@grandbay.example"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+914842365001" aria-label="Call Grand Bay Hotel, Marine Drive" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-V-006" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-vendor" style={{"--k0": "37", "--k1": "5", "--k2": "16", "--k3": "11", "--k4": "80", "--k5": "17"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-V-007">
                              <strong>{"Kerala Ayurveda Supplies"}</strong>
                            </a>
                            <span className="fd-sub">{"Spa products"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#package" />
                              </svg>
                              {"Vendor"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"Kerala Ayurveda Supplies"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 484 270 4410"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"sales@keralaayurveda.example"}</td>
                          <td className="dt__td nw" data-e="">{"–"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+914842704410" aria-label="Call Kerala Ayurveda Supplies" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-V-007" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "78", "--k1": "3", "--k2": "35", "--k3": "62", "--k4": "88", "--k5": "7"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-u-gm">
                              <strong>{"Vikram Nathan"}</strong>
                            </a>
                            <span className="fd-sub">{"General Manager"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9847011001"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"vikram.nathan@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"211"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919847011001" aria-label="Call Vikram Nathan" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-u-gm" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "48", "--k1": "3", "--k2": "35", "--k3": "63", "--k4": "63", "--k5": "8"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-u-fom">
                              <strong>{"Meera Prem"}</strong>
                            </a>
                            <span className="fd-sub">{"Front Office Manager"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9847011002"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"meera.prem@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"212"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919847011002" aria-label="Call Meera Prem" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-u-fom" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "3", "--k1": "3", "--k2": "35", "--k3": "64", "--k4": "3", "--k5": "9"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-u-anita">
                              <strong>{"Anita Mohan"}</strong>
                            </a>
                            <span className="fd-sub">{"Reservation Manager"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9847011003"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"anita.mohan@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"213"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919847011003" aria-label="Call Anita Mohan" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-u-anita" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "60", "--k1": "3", "--k2": "35", "--k3": "65", "--k4": "76", "--k5": "10"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-u-rahul">
                              <strong>{"Rahul Vijay"}</strong>
                            </a>
                            <span className="fd-sub">{"Reservation Agent"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9847011004"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"rahul.vijay@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"214"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919847011004" aria-label="Call Rahul Vijay" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-u-rahul" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "67", "--k1": "3", "--k2": "35", "--k3": "66", "--k4": "83", "--k5": "11"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-u-sneha">
                              <strong>{"Sneha Joseph"}</strong>
                            </a>
                            <span className="fd-sub">{"Reservation Agent"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9847011005"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"sneha.joseph@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"215"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919847011005" aria-label="Call Sneha Joseph" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-u-sneha" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "76", "--k1": "3", "--k2": "35", "--k3": "67", "--k4": "86", "--k5": "12"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-u-thomas">
                              <strong>{"Thomas Kurian"}</strong>
                            </a>
                            <span className="fd-sub">{"Reservation Agent"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9847011006"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"thomas.kurian@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"216"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919847011006" aria-label="Call Thomas Kurian" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-u-thomas" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "5", "--k1": "3", "--k2": "35", "--k3": "68", "--k4": "4", "--k5": "13"}}>
                          <td className="dt__td" data-label="Name" data-w2="" data-t="">
                            <a className="fd-link" href="#CM-P10-u-arjun">
                              <strong>{"Arjun Dev"}</strong>
                            </a>
                            <span className="fd-sub">{"Revenue Manager"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9847011007"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"arjun.dev@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"217"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919847011007" aria-label="Call Arjun Dev" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-u-arjun" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "22", "--k1": "3", "--k2": "35", "--k3": "69", "--k4": "45", "--k5": "14"}}>
                          <td className="dt__td" data-label="Name" data-w2="" data-t="">
                            <a className="fd-link" href="#CM-P10-u-farah">
                              <strong>{"Farah Khan"}</strong>
                            </a>
                            <span className="fd-sub">{"Sales Manager"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9847011008"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"farah.khan@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"218"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919847011008" aria-label="Call Farah Khan" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-u-farah" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "29", "--k1": "3", "--k2": "35", "--k3": "70", "--k4": "52", "--k5": "15"}}>
                          <td className="dt__td" data-label="Name" data-w2="" data-t="">
                            <a className="fd-link" href="#CM-P10-u-george">
                              <strong>{"George Mathew"}</strong>
                            </a>
                            <span className="fd-sub">{"Accounts"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9847011009"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"george.mathew@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"219"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919847011009" aria-label="Call George Mathew" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-u-george" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "73", "--k1": "3", "--k2": "35", "--k3": "71", "--k4": "85", "--k5": "16"}}>
                          <td className="dt__td" data-label="Name" data-w2="" data-t="">
                            <a className="fd-link" href="#CM-P10-u-admin">
                              <strong>{"System Admin"}</strong>
                            </a>
                            <span className="fd-sub">{"Admin"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 9847011010"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"system.admin@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"220"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+919847011010" aria-label="Call System Admin" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-u-admin" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "26", "--k1": "3", "--k2": "35", "--k3": "10", "--k4": "50", "--k5": "1"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-X-100">
                              <strong>{"Front desk"}</strong>
                            </a>
                            <span className="fd-sub">{"Department extension"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 484 266 8888"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"front.desk@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"100"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+914842668888" aria-label="Call Front desk" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-X-100" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "33", "--k1": "3", "--k2": "35", "--k3": "10", "--k4": "54", "--k5": "2"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-X-120">
                              <strong>{"Housekeeping"}</strong>
                            </a>
                            <span className="fd-sub">{"Department extension"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 484 266 8888"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"housekeeping@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"120"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+914842668888" aria-label="Call Housekeeping" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-X-120" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "18", "--k1": "3", "--k2": "35", "--k3": "10", "--k4": "41", "--k5": "4"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-X-140">
                              <strong>{"Engineering"}</strong>
                            </a>
                            <span className="fd-sub">{"Department extension"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 484 266 8888"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"engineering@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"140"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+914842668888" aria-label="Call Engineering" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-X-140" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "77", "--k1": "3", "--k2": "35", "--k3": "10", "--k4": "87", "--k5": "5"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-X-150">
                              <strong>{"Travancore Restaurant"}</strong>
                            </a>
                            <span className="fd-sub">{"Department extension"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 484 266 8888"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"travancore@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"150"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+914842668888" aria-label="Call Travancore Restaurant" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-X-150" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "65", "--k1": "3", "--k2": "35", "--k3": "10", "--k4": "82", "--k5": "6"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-X-199">
                              <strong>{"Security"}</strong>
                            </a>
                            <span className="fd-sub">{"Department extension"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 484 266 8888"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"security@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"199"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+914842668888" aria-label="Call Security" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-X-199" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr className="ab-r r-staff" style={{"--k0": "15", "--k1": "3", "--k2": "35", "--k3": "10", "--k4": "38", "--k5": "3"}}>
                          <td className="dt__td" data-label="Name" data-w="" data-t="">
                            <a className="fd-link" href="#CM-P10-X-130">
                              <strong>{"Concierge"}</strong>
                            </a>
                            <span className="fd-sub">{"Department extension"}</span>
                          </td>
                          <td className="dt__td" data-label="Type" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#id-card" />
                              </svg>
                              {"Staff"}
                            </span>
                          </td>
                          <td className="dt__td" data-label="Company" data-w2="">{"The Aviv Kochi"}</td>
                          <td className="dt__td nw" data-label="Phone" data-w2="">{"+91 484 266 8888"}</td>
                          <td className="dt__td" data-label="Email" data-w="">{"concierge@avivkochi.example"}</td>
                          <td className="dt__td nw" data-label="Ext.">{"130"}</td>
                          <td className="dt__td nw" data-a="">
                            <div className="fo-act">
                              <a className="btn btn--ghost" href="tel:+914842668888" aria-label="Call Concierge" title="Call">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#phone" />
                                </svg>
                              </a>
                              <a className="btn btn--ghost" href="#CM-P10-X-130" aria-label="Open the contact card" title="Contact card (CM-P10)">
                                <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                  <use href="/assets/icons/sprite.svg#user" />
                                </svg>
                              </a>
                            </div>
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
                      <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p4" />
                      <label className="pg-n" htmlFor="pg1r10p4" aria-label="Page 4">{"4"}</label>
                      <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p5" />
                      <label className="pg-n" htmlFor="pg1r10p5" aria-label="Page 5">{"5"}</label>
                      <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p6" />
                      <label className="pg-n" htmlFor="pg1r10p6" aria-label="Page 6">{"6"}</label>
                      <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p7" />
                      <label className="pg-n" htmlFor="pg1r10p7" aria-label="Page 7">{"7"}</label>
                      <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p8" />
                      <label className="pg-n" htmlFor="pg1r10p8" aria-label="Page 8">{"8"}</label>
                      <input className="pg-in" type="radio" name="pg1r10" id="pg1r10p9" />
                      <label className="pg-n" htmlFor="pg1r10p9" aria-label="Page 9">{"9"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–10"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"11–20"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"21–30"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"31–40"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"41–50"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"51–60"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"61–70"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"71–80"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"81–89"}</b>
                          {" of 89"}
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
                        <label className="pg-arr" htmlFor="pg1r10p3" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r10p4" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r10p5" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r10p6" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r10p7" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r10p8" title="Previous page">
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
                        <label className="pg-arr" htmlFor="pg1r10p4" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r10p5" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r10p6" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r10p7" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r10p8" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r10p9" title="Next page">
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
                      <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p3" />
                      <label className="pg-n" htmlFor="pg1r15p3" aria-label="Page 3">{"3"}</label>
                      <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p4" />
                      <label className="pg-n" htmlFor="pg1r15p4" aria-label="Page 4">{"4"}</label>
                      <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p5" />
                      <label className="pg-n" htmlFor="pg1r15p5" aria-label="Page 5">{"5"}</label>
                      <input className="pg-in" type="radio" name="pg1r15" id="pg1r15p6" />
                      <label className="pg-n" htmlFor="pg1r15p6" aria-label="Page 6">{"6"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–15"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"16–30"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"31–45"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"46–60"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"61–75"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"76–89"}</b>
                          {" of 89"}
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
                        <label className="pg-arr" htmlFor="pg1r15p2" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r15p3" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r15p4" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r15p5" title="Previous page">
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
                        <label className="pg-arr" htmlFor="pg1r15p3" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r15p4" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r15p5" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r15p6" title="Next page">
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
                      <input className="pg-in" type="radio" name="pg1r20" id="pg1r20p3" />
                      <label className="pg-n" htmlFor="pg1r20p3" aria-label="Page 3">{"3"}</label>
                      <input className="pg-in" type="radio" name="pg1r20" id="pg1r20p4" />
                      <label className="pg-n" htmlFor="pg1r20p4" aria-label="Page 4">{"4"}</label>
                      <input className="pg-in" type="radio" name="pg1r20" id="pg1r20p5" />
                      <label className="pg-n" htmlFor="pg1r20p5" aria-label="Page 5">{"5"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–20"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"21–40"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"41–60"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"61–80"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"81–89"}</b>
                          {" of 89"}
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
                        <label className="pg-arr" htmlFor="pg1r20p2" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r20p3" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r20p4" title="Previous page">
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
                        <label className="pg-arr" htmlFor="pg1r20p3" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r20p4" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r20p5" title="Next page">
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
                      <input className="pg-in" type="radio" name="pg1r25" id="pg1r25p2" />
                      <label className="pg-n" htmlFor="pg1r25p2" aria-label="Page 2">{"2"}</label>
                      <input className="pg-in" type="radio" name="pg1r25" id="pg1r25p3" />
                      <label className="pg-n" htmlFor="pg1r25p3" aria-label="Page 3">{"3"}</label>
                      <input className="pg-in" type="radio" name="pg1r25" id="pg1r25p4" />
                      <label className="pg-n" htmlFor="pg1r25p4" aria-label="Page 4">{"4"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–25"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"26–50"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"51–75"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"76–89"}</b>
                          {" of 89"}
                        </span>
                      </span>
                      <span className="pg-prev">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </span>
                        <label className="pg-arr" htmlFor="pg1r25p1" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r25p2" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r25p3" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                      </span>
                      <span className="pg-next">
                        <label className="pg-arr" htmlFor="pg1r25p2" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r25p3" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r25p4" title="Next page">
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
                    <div className="pg-set pg-set--30">
                      <input className="pg-in" type="radio" name="pg1r30" id="pg1r30p1" defaultChecked={true} />
                      <label className="pg-n" htmlFor="pg1r30p1" aria-label="Page 1">{"1"}</label>
                      <input className="pg-in" type="radio" name="pg1r30" id="pg1r30p2" />
                      <label className="pg-n" htmlFor="pg1r30p2" aria-label="Page 2">{"2"}</label>
                      <input className="pg-in" type="radio" name="pg1r30" id="pg1r30p3" />
                      <label className="pg-n" htmlFor="pg1r30p3" aria-label="Page 3">{"3"}</label>
                      <span className="pg-info">
                        <span>
                          {"Showing "}
                          <b>{"1–30"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"31–60"}</b>
                          {" of 89"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"61–89"}</b>
                          {" of 89"}
                        </span>
                      </span>
                      <span className="pg-prev">
                        <span className="pg-arr is-off">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </span>
                        <label className="pg-arr" htmlFor="pg1r30p1" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r30p2" title="Previous page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-left" />
                          </svg>
                        </label>
                      </span>
                      <span className="pg-next">
                        <label className="pg-arr" htmlFor="pg1r30p2" title="Next page">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#chevron-right" />
                          </svg>
                        </label>
                        <label className="pg-arr" htmlFor="pg1r30p3" title="Next page">
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
                  </nav>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-t">{"Contact – Ms Meera Abraham"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Ms Meera Abraham"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 8058713075"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"meera.abraham126@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Aviv Club Silver"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+918058713075">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/918058713075" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:meera.abraham126@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0167" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0167-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0167-t">{"Contact – Mr Vishnu Abraham"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Vishnu Abraham"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7065309363"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"vishnu.abraham167@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917065309363">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917065309363" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:vishnu.abraham167@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0212" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0212-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0212-t">{"Contact – Mr Arun Abraham"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Arun Abraham"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 6060710106"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"arun.abraham212@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+916060710106">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/916060710106" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:arun.abraham212@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0218" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0218-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0218-t">{"Contact – Mr Sanjay Abraham"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Sanjay Abraham"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7095317983"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"sanjay.abraham218@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Aviv Club Member"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917095317983">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917095317983" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:sanjay.abraham218@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0218" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0351" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0351-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0351-t">{"Contact – Mr Nikhil Abraham"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Nikhil Abraham"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 8027717448"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"nikhil.abraham351@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+918027717448">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/918027717448" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:nikhil.abraham351@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0030" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0030-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0030-t">{"Contact – Mr Omar Al Farsi"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Omar Al Farsi"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+971 752519234"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"omar.alfarsi30@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+971752519234">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/971752519234" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:omar.alfarsi30@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0086" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0086-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0086-t">{"Contact – Mr Omar Al Farsi"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Omar Al Farsi"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+971 760705120"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"omar.alfarsi86@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+971760705120">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/971760705120" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:omar.alfarsi86@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0086" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0194" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0194-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0194-t">{"Contact – Mr Omar Al Farsi"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Omar Al Farsi"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+971 795465813"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"omar.alfarsi194@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+971795465813">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/971795465813" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:omar.alfarsi194@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0355" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0355-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0355-t">{"Contact – Mr Omar Al Farsi"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Omar Al Farsi"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+971 710382233"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"omar.alfarsi355@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+971710382233">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/971710382233" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:omar.alfarsi355@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0066" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0066-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0066-t">{"Contact – Ms Fatima Al Mansoori"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Ms Fatima Al Mansoori"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+971 738562996"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"fatima.almansoori66@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Aviv Club Silver"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+971738562996">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/971738562996" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:fatima.almansoori66@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0066" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0101" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0101-t">{"Contact – Ms Fatima Al Mansoori"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Ms Fatima Al Mansoori"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+971 715835911"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"fatima.almansoori101@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+971715835911">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/971715835911" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:fatima.almansoori101@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0132" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0132-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0132-t">{"Contact – Mrs Fatima Al Mansoori"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mrs Fatima Al Mansoori"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+971 705478355"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"fatima.almansoori132@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+971705478355">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/971705478355" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:fatima.almansoori132@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0132" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0266" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0266-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0266-t">{"Contact – Dr Fatima Al Mansoori"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Dr Fatima Al Mansoori"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+971 778757866"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"fatima.almansoori266@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+971778757866">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/971778757866" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:fatima.almansoori266@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0266" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0234" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0234-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0234-t">{"Contact – Ms Noura Al Saud"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Ms Noura Al Saud"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+966 765835597"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"noura.alsaud234@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+966765835597">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/966765835597" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:noura.alsaud234@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0234" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0268" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0268-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0268-t">{"Contact – Ms Noura Al Saud"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Ms Noura Al Saud"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+966 729059763"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"noura.alsaud268@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+966729059763">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/966729059763" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:noura.alsaud268@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0268" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0374" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0374-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0374-t">{"Contact – Ms Noura Al Saud"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Ms Noura Al Saud"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+966 704043704"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"noura.alsaud374@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Aviv Club Platinum"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+966704043704">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/966704043704" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:noura.alsaud374@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0041" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0041-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0041-t">{"Contact – Mr Khalid Al Thani"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Khalid Al Thani"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+974 762043925"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"khalid.althani41@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Aviv Club Silver"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+974762043925">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/974762043925" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:khalid.althani41@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0113" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0113-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0113-t">{"Contact – Mr Khalid Al Thani"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Khalid Al Thani"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+974 741566850"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"khalid.althani113@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+974741566850">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/974741566850" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:khalid.althani113@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0176" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0176-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0176-t">{"Contact – Mr Ethan Anderson"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Ethan Anderson"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+1 743994985"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"ethan.anderson176@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+1743994985">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/1743994985" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:ethan.anderson176@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0384" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0384-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0384-t">{"Contact – Mr Ethan Anderson"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Ethan Anderson"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+1 784882037"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"ethan.anderson384@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+1784882037">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/1784882037" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:ethan.anderson384@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0384" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0274" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0274-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0274-t">{"Contact – Mrs Farah Bijoy"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mrs Farah Bijoy"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 8040601770"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"farah.bijoy274@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+918040601770">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/918040601770" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:farah.bijoy274@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0293" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0293-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0293-t">{"Contact – Mr Amit Bijoy"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Amit Bijoy"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 8079085485"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"amit.bijoy293@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Aviv Club Platinum"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+918079085485">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/918079085485" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:amit.bijoy293@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0293" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0341" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0341-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0341-t">{"Contact – Mr Prasad Bijoy"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Prasad Bijoy"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7047366892"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"prasad.bijoy341@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Aviv Club Member"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917047366892">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917047366892" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:prasad.bijoy341@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0077" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0077-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0077-t">{"Contact – Mrs Emily Brooks"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mrs Emily Brooks"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+1 797029700"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"emily.brooks77@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+1797029700">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/1797029700" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:emily.brooks77@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0077" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0271" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0271-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0271-t">{"Contact – Mr James Carter"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr James Carter"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+1 767445554"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"james.carter271@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+1767445554">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/1767445554" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:james.carter271@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0396" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0396-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0396-t">{"Contact – Mr James Carter"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr James Carter"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+1 748129287"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"james.carter396@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+1748129287">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/1748129287" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:james.carter396@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0048" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0048-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0048-t">{"Contact – Ms Isha Chirag"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Ms Isha Chirag"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7068165209"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"isha.chirag48@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917068165209">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917068165209" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:isha.chirag48@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0070" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0070-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0070-t">{"Contact – Mr Imran Chirag"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Imran Chirag"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9067458485"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"imran.chirag70@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919067458485">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919067458485" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:imran.chirag70@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0147" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0147-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0147-t">{"Contact – Dr Ritu Chirag"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Dr Ritu Chirag"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 8040461565"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"ritu.chirag147@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+918040461565">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/918040461565" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:ritu.chirag147@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0147" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0175" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0175-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0175-t">{"Contact – Mr Naveen Chirag"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Naveen Chirag"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 6098282168"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"naveen.chirag175@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Aviv Club Silver"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+916098282168">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/916098282168" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:naveen.chirag175@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0189" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0189-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0189-t">{"Contact – Mr Prasad Chirag"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Prasad Chirag"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9054426995"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"prasad.chirag189@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Aviv Club Silver"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919054426995">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919054426995" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:prasad.chirag189@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0208" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0208-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0208-t">{"Contact – Ms Swathi Chirag"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Ms Swathi Chirag"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9045572697"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"swathi.chirag208@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Aviv Club Member"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919045572697">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919045572697" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:swathi.chirag208@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0208" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0243" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0243-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0243-t">{"Contact – Mr Ganesh Chirag"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Ganesh Chirag"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 8065506042"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"ganesh.chirag243@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+918065506042">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/918065506042" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:ganesh.chirag243@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0262" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0262-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0262-t">{"Contact – Mr Amit Chirag"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Amit Chirag"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 6050175895"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"amit.chirag262@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+916050175895">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/916050175895" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:amit.chirag262@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0262" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0290" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0290-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0290-t">{"Contact – Mr Rohit Chirag"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Mr Rohit Chirag"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7087285635"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"rohit.chirag290@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917087285635">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917087285635" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:rohit.chirag290@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <Link className="btn" data-leads-to="RS-18" to={"/reservation/rs-18-guest-profile"}>
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </Link>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-GP-0321" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-GP-0321-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-GP-0321-t">{"Contact – Dr Ayesha Chirag"}</h2>
                      <p className="modal__desc">{"Guest · –"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Dr Ayesha Chirag"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Guest"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7042582560"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"ayesha.chirag321@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Guest profile"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917042582560">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917042582560" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:ayesha.chirag321@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-18-guest-profile/#GP-0321" data-leads-to="RS-18">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#user" />
                        </svg>
                        {"Open profile (RS-18)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-001" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-001-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-001-t">{"Contact – Malabar Spice Exports Pvt Ltd"}</h2>
                      <p className="modal__desc">{"Company · Malabar Spice Exports Pvt Ltd"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Malabar Spice Exports Pvt Ltd"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Malabar Spice Exports Pvt Ltd"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9033125171"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings1@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Kabir Ranjan · Travel desk · GSTIN 32UGFFM1273U1ZY"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919033125171">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919033125171" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings1@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-001" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-002" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-002-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-002-t">{"Contact – Cochin Marine Services Ltd"}</h2>
                      <p className="modal__desc">{"Company · Cochin Marine Services Ltd"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Cochin Marine Services Ltd"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Cochin Marine Services Ltd"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7085193988"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings2@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Preethi Thomas · Travel desk · GSTIN 32DMCFC1243F1ZG"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917085193988">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917085193988" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings2@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-002" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-003" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-003-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-003-t">{"Contact – Periyar Infotech Solutions"}</h2>
                      <p className="modal__desc">{"Company · Periyar Infotech Solutions"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Periyar Infotech Solutions"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Periyar Infotech Solutions"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7086396491"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings3@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Anand Ranjan · Travel desk · GSTIN 32VHBFP8919P1ZR"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917086396491">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917086396491" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings3@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-003" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-004" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-004-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-004-t">{"Contact – Willingdon Logistics LLP"}</h2>
                      <p className="modal__desc">{"Company · Willingdon Logistics LLP"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Willingdon Logistics LLP"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Willingdon Logistics LLP"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7027567673"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings4@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Suma Thomas · Travel desk · GSTIN 32VJPCW7788C1ZP"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917027567673">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917027567673" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings4@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-004" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-005" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-005-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-005-t">{"Contact – Backwater Analytics Pvt Ltd"}</h2>
                      <p className="modal__desc">{"Company · Backwater Analytics Pvt Ltd"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Backwater Analytics Pvt Ltd"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Backwater Analytics Pvt Ltd"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9034072540"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings5@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Ravi Vijay · Travel desk · GSTIN 32AWJCB2780J1ZE"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919034072540">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919034072540" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings5@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-005" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-006" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-006-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-006-t">{"Contact – Kerala Heritage Foods Ltd"}</h2>
                      <p className="modal__desc">{"Company · Kerala Heritage Foods Ltd"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Kerala Heritage Foods Ltd"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Kerala Heritage Foods Ltd"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 8062808145"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings6@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Anand Nathan · Travel desk · GSTIN 32RVMCK4591S1Z0"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+918062808145">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/918062808145" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings6@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-006" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-007" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-007-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-007-t">{"Contact – Ernakulam Pharma Distributors"}</h2>
                      <p className="modal__desc">{"Company · Ernakulam Pharma Distributors"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Ernakulam Pharma Distributors"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Ernakulam Pharma Distributors"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7067553639"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings7@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Joseph Thomas · Travel desk · GSTIN 32GLECE3002C1ZU"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917067553639">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917067553639" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings7@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-007" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-008" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-008-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-008-t">{"Contact – Arabian Sea Shipping Agency"}</h2>
                      <p className="modal__desc">{"Company · Arabian Sea Shipping Agency"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Arabian Sea Shipping Agency"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Arabian Sea Shipping Agency"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7062966492"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings8@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Joseph Vijay · Travel desk · GSTIN 32BVRFA8573D1Z4"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917062966492">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917062966492" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings8@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-008" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-009" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-009-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-009-t">{"Contact – Spice Route Hospitality Consultants"}</h2>
                      <p className="modal__desc">{"Company · Spice Route Hospitality Consultants"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Spice Route Hospitality Consultants"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Spice Route Hospitality Consultants"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 8081251059"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings9@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Ravi Vijay · Travel desk · GSTIN 29VMTCS3855J1Z7"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+918081251059">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/918081251059" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings9@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-009" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-010" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-010-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-010-t">{"Contact – TechPark Kochi Systems"}</h2>
                      <p className="modal__desc">{"Company · TechPark Kochi Systems"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"TechPark Kochi Systems"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"TechPark Kochi Systems"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7029772251"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings10@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Anand Nathan · Travel desk · GSTIN 32ARVCT4798U1ZU"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917029772251">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917029772251" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings10@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-010" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-011" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-011-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-011-t">{"Contact – Sahyadri Textiles Ltd"}</h2>
                      <p className="modal__desc">{"Company · Sahyadri Textiles Ltd"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Sahyadri Textiles Ltd"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Sahyadri Textiles Ltd"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9017778098"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings11@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Ravi Vijay · Travel desk · GSTIN 29CGBFS5830V1ZW"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919017778098">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919017778098" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings11@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-011" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-012" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-012-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-012-t">{"Contact – Coir Craft Industries"}</h2>
                      <p className="modal__desc">{"Company · Coir Craft Industries"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Coir Craft Industries"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Coir Craft Industries"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7030882242"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings12@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Joseph Ishaan · Travel desk · GSTIN 32AFSCC5923B1ZL"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917030882242">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917030882242" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings12@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-012" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-013" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-013-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-013-t">{"Contact – Vypin Engineering Works"}</h2>
                      <p className="modal__desc">{"Company · Vypin Engineering Works"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Vypin Engineering Works"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Vypin Engineering Works"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7039770844"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings13@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Anand Mohan · Travel desk · GSTIN 33HDRCV6149B1ZU"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917039770844">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917039770844" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings13@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-013" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-014" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-014-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-014-t">{"Contact – Thevara Motors Pvt Ltd"}</h2>
                      <p className="modal__desc">{"Company · Thevara Motors Pvt Ltd"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Thevara Motors Pvt Ltd"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Thevara Motors Pvt Ltd"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9027610007"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings14@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Ravi Thomas · Travel desk · GSTIN 32HBMFT9191H1ZH"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919027610007">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919027610007" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings14@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-014" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-015" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-015-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-015-t">{"Contact – Deccan Capital Advisors"}</h2>
                      <p className="modal__desc">{"Company · Deccan Capital Advisors"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Deccan Capital Advisors"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Deccan Capital Advisors"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 8024491082"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings15@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Preethi Ranjan · Travel desk · GSTIN 27TETCD3589L1ZY"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+918024491082">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/918024491082" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings15@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-015" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-016" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-016-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-016-t">{"Contact – Periyar Tours & Travels"}</h2>
                      <p className="modal__desc">{"Travel agent · Periyar Tours & Travels"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Periyar Tours & Travels"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Travel agent"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Periyar Tours & Travels"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7043782171"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings16@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Preethi Vijay · Reservations · GSTIN 32NPAFP1982W1ZC"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917043782171">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917043782171" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings16@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-016" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-017" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-017-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-017-t">{"Contact – Backwater Holidays"}</h2>
                      <p className="modal__desc">{"Travel agent · Backwater Holidays"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Backwater Holidays"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Travel agent"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Backwater Holidays"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9044750444"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings17@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Joseph Mohan · Reservations · GSTIN 32RPNCB7136N1ZZ"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919044750444">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919044750444" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings17@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-017" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-018" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-018-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-018-t">{"Contact – Kerala Trails Travel Co"}</h2>
                      <p className="modal__desc">{"Travel agent · Kerala Trails Travel Co"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Kerala Trails Travel Co"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Travel agent"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Kerala Trails Travel Co"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 8067524975"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings18@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Anand Mohan · Reservations · GSTIN 32BJTCK7024M1ZJ"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+918067524975">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/918067524975" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings18@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-018" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-019" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-019-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-019-t">{"Contact – Spice Coast Journeys"}</h2>
                      <p className="modal__desc">{"Travel agent · Spice Coast Journeys"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Spice Coast Journeys"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Travel agent"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Spice Coast Journeys"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9096928202"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings19@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Anand Ranjan · Reservations · GSTIN 32GPRCS4502L1Z5"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919096928202">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919096928202" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings19@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-019" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-020" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-020-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-020-t">{"Contact – Heritage Routes Travel"}</h2>
                      <p className="modal__desc">{"Travel agent · Heritage Routes Travel"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Heritage Routes Travel"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Travel agent"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Heritage Routes Travel"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 6087508486"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings20@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Anand Vijay · Reservations · GSTIN 29SCTFH8736W1Z4"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+916087508486">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/916087508486" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings20@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-020" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-021" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-021-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-021-t">{"Contact – Bluewave Travel Mart"}</h2>
                      <p className="modal__desc">{"Travel agent · Bluewave Travel Mart"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Bluewave Travel Mart"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Travel agent"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Bluewave Travel Mart"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7066850448"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings21@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Kabir Thomas · Reservations · GSTIN 33TKKCB8679F1Z7"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917066850448">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917066850448" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings21@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-021" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-022" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-022-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-022-t">{"Contact – Munnar Mist Holidays"}</h2>
                      <p className="modal__desc">{"Travel agent · Munnar Mist Holidays"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Munnar Mist Holidays"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Travel agent"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Munnar Mist Holidays"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7014416907"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings22@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Kabir Thomas · Reservations · GSTIN 32EMKFM9160R1ZS"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917014416907">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917014416907" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings22@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-022" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-023" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-023-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-023-t">{"Contact – Gateway Kochi Travels"}</h2>
                      <p className="modal__desc">{"Travel agent · Gateway Kochi Travels"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Gateway Kochi Travels"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Travel agent"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Gateway Kochi Travels"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 6078889321"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings23@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Ravi Thomas · Reservations · GSTIN 32JKACG7920M1ZR"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+916078889321">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/916078889321" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings23@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-023" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-024" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-024-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-024-t">{"Contact – Sunrise Tours India"}</h2>
                      <p className="modal__desc">{"Travel agent · Sunrise Tours India"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Sunrise Tours India"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Travel agent"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Sunrise Tours India"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7028434077"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings24@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Anand Nathan · Reservations · GSTIN 07LNNCS4728J1ZT"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917028434077">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917028434077" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings24@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-024" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-025" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-025-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-025-t">{"Contact – Fort Kochi Experiences"}</h2>
                      <p className="modal__desc">{"Travel agent · Fort Kochi Experiences"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Fort Kochi Experiences"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Travel agent"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Fort Kochi Experiences"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9013445968"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings25@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Preethi Vijay · Reservations · GSTIN 32JCLCF5562W1ZC"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919013445968">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919013445968" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings25@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-025" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-026" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-026-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-026-t">{"Contact – Global Pathways DMC"}</h2>
                      <p className="modal__desc">{"Travel agent · Global Pathways DMC"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Global Pathways DMC"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Travel agent"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Global Pathways DMC"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 8024197985"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings26@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Anand Thomas · Reservations · GSTIN 27TRWFG7648R1ZJ"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+918024197985">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/918024197985" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings26@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-026" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-027" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-027-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-027-t">{"Contact – Southern Skies Travel"}</h2>
                      <p className="modal__desc">{"Travel agent · Southern Skies Travel"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Southern Skies Travel"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Travel agent"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Southern Skies Travel"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 8028815203"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings27@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Kabir Vijay · Reservations · GSTIN 36TGNCS8610L1ZY"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+918028815203">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/918028815203" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings27@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-027" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-028" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-028-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-028-t">{"Contact – Kerala State Delegation Office"}</h2>
                      <p className="modal__desc">{"Company · Kerala State Delegation Office"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Kerala State Delegation Office"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Kerala State Delegation Office"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7069457937"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings28@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Joseph Nathan · Travel desk · GSTIN 32CREGK7260N1Z1"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917069457937">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917069457937" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings28@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-028" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-029" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-029-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-029-t">{"Contact – Skyline Airways Crew Desk"}</h2>
                      <p className="modal__desc">{"Company · Skyline Airways Crew Desk"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Skyline Airways Crew Desk"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Company"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Skyline Airways Crew Desk"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 6018191253"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings29@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Ravi Mohan · Travel desk · GSTIN 32VMCFS2817E1ZE"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+916018191253">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/916018191253" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings29@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-029" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-AC-030" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-AC-030-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-AC-030-t">{"Contact – Monsoon Escapes Travel"}</h2>
                      <p className="modal__desc">{"Travel agent · Monsoon Escapes Travel"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Monsoon Escapes Travel"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Travel agent"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Monsoon Escapes Travel"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 7044329924"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings30@example.com"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Leena Vijay · Reservations · GSTIN 32NTUCM2174L1ZL"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+917044329924">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/917044329924" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings30@example.com">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                      <a className="btn" href="/reservation/rs-19-company-travel-agent-account/#AC-030" data-leads-to="RS-19">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#building" />
                        </svg>
                        {"Open profile (RS-19)"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-V-001" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-V-001-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-V-001-t">{"Contact – Kochi Cabs"}</h2>
                      <p className="modal__desc">{"Vendor · Kochi Cabs"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Kochi Cabs"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Vendor"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Kochi Cabs"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 98470 31200"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"dispatch@kochicabs.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Taxi and airport transfers"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919847031200">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919847031200" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:dispatch@kochicabs.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-V-002" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-V-002-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-V-002-t">{"Contact – Backwater Travels"}</h2>
                      <p className="modal__desc">{"Vendor · Backwater Travels"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Backwater Travels"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Vendor"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Backwater Travels"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 94470 55120"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"bookings@backwatertravels.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Tours, tempo traveller and bus"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919447055120">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919447055120" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:bookings@backwatertravels.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-V-003" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-V-003-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-V-003-t">{"Contact – Blue Dart, Willingdon Island"}</h2>
                      <p className="modal__desc">{"Vendor · Blue Dart, Willingdon Island"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Blue Dart, Willingdon Island"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Vendor"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Blue Dart, Willingdon Island"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 484 266 0412"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"kochi.wi@bluedart.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Courier"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+914842660412">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/914842660412" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:kochi.wi@bluedart.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-V-004" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-V-004-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-V-004-t">{"Contact – Lakeshore Pharmacy"}</h2>
                      <p className="modal__desc">{"Vendor · Lakeshore Pharmacy"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Lakeshore Pharmacy"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Vendor"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Lakeshore Pharmacy"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 484 235 1177"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"orders@lakeshorepharmacy.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Medicines delivery"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+914842351177">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/914842351177" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:orders@lakeshorepharmacy.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-V-005" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-V-005-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-V-005-t">{"Contact – Marine Drive Flowers"}</h2>
                      <p className="modal__desc">{"Vendor · Marine Drive Flowers"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Marine Drive Flowers"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Vendor"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Marine Drive Flowers"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 484 238 8120"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"hello@marinedriveflowers.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Flowers and gifts"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+914842388120">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/914842388120" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:hello@marinedriveflowers.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-V-006" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-V-006-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-V-006-t">{"Contact – Grand Bay Hotel, Marine Drive"}</h2>
                      <p className="modal__desc">{"Vendor · Grand Bay Hotel, Marine Drive"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Grand Bay Hotel, Marine Drive"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Vendor"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Grand Bay Hotel, Marine Drive"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 484 236 5001"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"reservations@grandbay.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Partner hotel for walk guests"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+914842365001">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/914842365001" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:reservations@grandbay.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-V-007" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-V-007-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-V-007-t">{"Contact – Kerala Ayurveda Supplies"}</h2>
                      <p className="modal__desc">{"Vendor · Kerala Ayurveda Supplies"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Kerala Ayurveda Supplies"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Vendor"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"Kerala Ayurveda Supplies"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 484 270 4410"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"sales@keralaayurveda.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"–"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Spa products"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+914842704410">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/914842704410" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:sales@keralaayurveda.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-u-gm" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-u-gm-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-u-gm-t">{"Contact – Vikram Nathan"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Vikram Nathan"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9847011001"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"vikram.nathan@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"211"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"General Manager"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919847011001">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919847011001" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:vikram.nathan@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-u-fom" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-u-fom-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-u-fom-t">{"Contact – Meera Prem"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Meera Prem"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9847011002"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"meera.prem@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"212"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Front Office Manager"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919847011002">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919847011002" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:meera.prem@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-u-anita" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-u-anita-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-u-anita-t">{"Contact – Anita Mohan"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Anita Mohan"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9847011003"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"anita.mohan@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"213"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Reservation Manager"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919847011003">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919847011003" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:anita.mohan@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-u-rahul" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-u-rahul-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-u-rahul-t">{"Contact – Rahul Vijay"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Rahul Vijay"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9847011004"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"rahul.vijay@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"214"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Reservation Agent"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919847011004">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919847011004" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:rahul.vijay@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-u-sneha" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-u-sneha-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-u-sneha-t">{"Contact – Sneha Joseph"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Sneha Joseph"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9847011005"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"sneha.joseph@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"215"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Reservation Agent"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919847011005">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919847011005" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:sneha.joseph@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-u-thomas" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-u-thomas-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-u-thomas-t">{"Contact – Thomas Kurian"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Thomas Kurian"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9847011006"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"thomas.kurian@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"216"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Reservation Agent"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919847011006">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919847011006" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:thomas.kurian@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-u-arjun" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-u-arjun-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-u-arjun-t">{"Contact – Arjun Dev"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Arjun Dev"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9847011007"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"arjun.dev@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"217"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Revenue Manager"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919847011007">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919847011007" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:arjun.dev@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-u-farah" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-u-farah-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-u-farah-t">{"Contact – Farah Khan"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Farah Khan"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9847011008"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"farah.khan@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"218"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Sales Manager"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919847011008">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919847011008" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:farah.khan@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-u-george" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-u-george-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-u-george-t">{"Contact – George Mathew"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"George Mathew"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9847011009"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"george.mathew@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"219"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Accounts"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919847011009">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919847011009" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:george.mathew@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-u-admin" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-u-admin-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-u-admin-t">{"Contact – System Admin"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"System Admin"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 9847011010"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"system.admin@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"220"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Admin"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+919847011010">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/919847011010" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:system.admin@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-X-100" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-X-100-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-X-100-t">{"Contact – Front desk"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Front desk"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 484 266 8888"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"front.desk@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"100"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Department extension"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+914842668888">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/914842668888" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:front.desk@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-X-120" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-X-120-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-X-120-t">{"Contact – Housekeeping"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Housekeeping"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 484 266 8888"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"housekeeping@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"120"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Department extension"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+914842668888">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/914842668888" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:housekeeping@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-X-140" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-X-140-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-X-140-t">{"Contact – Engineering"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Engineering"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 484 266 8888"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"engineering@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"140"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Department extension"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+914842668888">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/914842668888" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:engineering@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-X-150" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-X-150-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-X-150-t">{"Contact – Travancore Restaurant"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Travancore Restaurant"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 484 266 8888"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"travancore@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"150"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Department extension"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+914842668888">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/914842668888" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:travancore@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-X-199" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-X-199-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-X-199-t">{"Contact – Security"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Security"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 484 266 8888"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"security@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"199"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Department extension"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+914842668888">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/914842668888" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:security@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <div className="modal modal--lg" id="CM-P10-X-130" data-code="CM-P10" role="dialog" aria-modal="true" aria-labelledby="CM-P10-X-130-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <div className="modal__box">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CM-P10-X-130-t">{"Contact – Concierge"}</h2>
                      <p className="modal__desc">{"Staff · The Aviv Kochi"}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <dl className="s-kv">
                      <dt>{"Name"}</dt>
                      <dd>
                        <strong>{"Concierge"}</strong>
                      </dd>
                      <dt>{"Type"}</dt>
                      <dd>{"Staff"}</dd>
                      <dt>{"Company"}</dt>
                      <dd>{"The Aviv Kochi"}</dd>
                      <dt>{"Phone"}</dt>
                      <dd>{"+91 484 266 8888"}</dd>
                      <dt>{"Email"}</dt>
                      <dd>{"concierge@avivkochi.example"}</dd>
                      <dt>{"Extension"}</dt>
                      <dd>{"130"}</dd>
                      <dt>{"Notes"}</dt>
                      <dd>{"Department extension"}</dd>
                    </dl>
                    <div className="fd-qa">
                      <a className="btn btn--primary" href="tel:+914842668888">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#phone" />
                        </svg>
                        {"Call"}
                      </a>
                      <a className="btn" href="https://wa.me/914842668888" target="_blank" rel="noopener">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-circle" />
                        </svg>
                        {"WhatsApp"}
                      </a>
                      <a className="btn" href="mailto:concierge@avivkochi.example">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#mail" />
                        </svg>
                        {"Email"}
                      </a>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Close"}</a>
                  </div>
                </div>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"CM-03"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Search guests, companies, agents, vendors and staff extensions; click to call / WhatsApp"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>{"Top bar › Tools"}</dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <a href="/common/cm-03-address-book/#CM-P10">{"CM-P10"}</a>
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
