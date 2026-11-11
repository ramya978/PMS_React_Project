// GENERATED from public/front-desk/fd-o02-guest-bill/index.html by scripts/convert_legacy.py.
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
    "href": "/front-desk/fd-o02-guest-bill/fd-o02-guest-bill.css",
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

export default function FrontDeskFdO02GuestBill() {
  return (
    <ScreenShell title="Guest bill (folio) – interim / final" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FD-O02" data-code="FD-O02" data-static="1" data-print="1" className="legacy-body">
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
            <main className="app__content" id="main" data-code="FD-O02" tabIndex="-1">
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
                        <span aria-current="page">{"Guest bill (folio) – interim / final"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">
                      {"Guest bill (folio)"}
                      <span className="pt-more">
                        <span className="pt-sep">{" – "}</span>
                        {"interim / final"}
                      </span>
                    </h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FD-O02"}</span>
                  <div className="page-header__actions" />
                </div>
              </header>
              <div className="variants">
                <span className="va" id="bill-FK-10008" />
                <span className="va" id="bill-FK-10082" />
                <span className="va" id="bill-FK-10058" />
                <span className="va" id="bill-FK-10056" />
                <span className="va" id="bill-FK-10002" />
                <span className="va" id="bill-FK-10074" />
                <span className="va" id="bill-FK-10035" />
                <span className="va" id="bill-FK-10165" />
                <span className="va" id="bill-FK-10050" />
                <span className="va" id="bill-FK-10118" />
                <span className="va" id="bill-FK-10011" />
                <span className="va" id="bill-FK-10101" />
                <span className="va" id="bill-FK-10084" />
                <span className="va" id="bill-FK-10108" />
                <span className="va" id="final-FK-10108" />
                <span className="va" id="bill-FK-10104" />
                <span className="va" id="final-FK-10104" />
                <span className="va" id="bill-FK-10033" />
                <span className="va" id="bill-FK-10170" />
                <span className="va" id="bill-FK-10162" />
                <span className="va" id="bill-FK-10140" />
                <span className="va" id="bill-FK-10193" />
                <span className="va" id="final-FK-10193" />
                <span className="va" id="bill-FK-10205" />
                <span className="va" id="bill-FK-10069" />
                <span className="va" id="bill-FK-10031" />
                <span className="va" id="bill-FK-10143" />
                <span className="va" id="bill-FK-10105" />
                <span className="va" id="bill-FK-10061" />
                <span className="va" id="bill-FK-10103" />
                <span className="va" id="bill-FK-10106" />
                <span className="va" id="bill-FK-10102" />
                <span className="va" id="final-FK-10102" />
                <span className="va" id="bill-FK-10197" />
                <span className="va" id="bill-FK-10048" />
                <span className="va" id="bill-FK-10180" />
                <span className="va" id="bill-FK-10187" />
                <span className="va" id="final-FK-10187" />
                <span className="va" id="bill-FK-10120" />
                <span className="va" id="bill-FK-10161" />
                <span className="va" id="bill-FK-10200" />
                <span className="va" id="bill-FK-10172" />
                <span className="va" id="final-FK-10172" />
                <span className="va" id="bill-FK-10123" />
                <span className="va" id="final-FK-10123" />
                <span className="va" id="bill-FK-10203" />
                <span className="va" id="bill-FK-10178" />
                <span className="va" id="bill-FK-10027" />
                <span className="va" id="bill-FK-10159" />
                <span className="va" id="bill-FK-10010" />
                <span className="va" id="bill-FK-10097" />
                <span className="va" id="bill-FK-10145" />
                <span className="va" id="bill-FK-10109" />
                <span className="va" id="bill-FK-10232" />
                <span className="va" id="bill-FK-10029" />
                <span className="va" id="bill-FK-10042" />
                <span className="va" id="bill-FK-10142" />
                <span className="va" id="final-FK-10142" />
                <span className="va" id="bill-FK-10250" />
                <div className="variant v-bill-FK-10008 is-default">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10008" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10008"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Ajay Jatin"}
                        <br />
                        {"+91 8048156307 · ajay.jatin8@example.com"}
                        <br />
                        {"Reservation FK-10008"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 219, 112, 103 · 3 × GDLX"}
                        <br />
                        {"18 Oct 2026 → 24 Oct 2026 · 6 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 219 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,080.95"}</td>
                          <td className="num" data-label="CGST">{"₹152.02"}</td>
                          <td className="num" data-label="SGST">{"₹152.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,385.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 112 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,270.00"}</td>
                          <td className="num" data-label="CGST">{"₹156.75"}</td>
                          <td className="num" data-label="SGST">{"₹156.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,583.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 103 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,080.95"}</td>
                          <td className="num" data-label="CGST">{"₹152.02"}</td>
                          <td className="num" data-label="SGST">{"₹152.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,385.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"TRN · Airport transfer (one way)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,940.00"}</td>
                          <td className="num" data-label="CGST">{"₹174.60"}</td>
                          <td className="num" data-label="SGST">{"₹174.60"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,289.20"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 219 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,080.95"}</td>
                          <td className="num" data-label="CGST">{"₹152.02"}</td>
                          <td className="num" data-label="SGST">{"₹152.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,385.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 112 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,270.00"}</td>
                          <td className="num" data-label="CGST">{"₹156.75"}</td>
                          <td className="num" data-label="SGST">{"₹156.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,583.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 103 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,080.95"}</td>
                          <td className="num" data-label="CGST">{"₹152.02"}</td>
                          <td className="num" data-label="SGST">{"₹152.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,385.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"TRV · Travancore Restaurant – lunch"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,350.00"}</td>
                          <td className="num" data-label="CGST">{"₹58.75"}</td>
                          <td className="num" data-label="SGST">{"₹58.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,467.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 219 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,080.95"}</td>
                          <td className="num" data-label="CGST">{"₹152.02"}</td>
                          <td className="num" data-label="SGST">{"₹152.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,385.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 112 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,270.00"}</td>
                          <td className="num" data-label="CGST">{"₹156.75"}</td>
                          <td className="num" data-label="SGST">{"₹156.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,583.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 103 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,080.95"}</td>
                          <td className="num" data-label="CGST">{"₹152.02"}</td>
                          <td className="num" data-label="SGST">{"₹152.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,385.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"PO · Paid-out – Taxi fare (Kochi Cabs, receipt KC-88312)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,500.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 219 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,080.95"}</td>
                          <td className="num" data-label="CGST">{"₹152.02"}</td>
                          <td className="num" data-label="SGST">{"₹152.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,385.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 112 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,270.00"}</td>
                          <td className="num" data-label="CGST">{"₹156.75"}</td>
                          <td className="num" data-label="SGST">{"₹156.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,583.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 103 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,080.95"}</td>
                          <td className="num" data-label="CGST">{"₹152.02"}</td>
                          <td className="num" data-label="SGST">{"₹152.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,385.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"TRV · Travancore Restaurant – lunch"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,100.00"}</td>
                          <td className="num" data-label="CGST">{"₹52.50"}</td>
                          <td className="num" data-label="SGST">{"₹52.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,205.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"ALW · Allowance – Service recovery (late room service)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"−₹1,000.00"}</td>
                          <td className="num" data-label="CGST">{"−₹90.00"}</td>
                          <td className="num" data-label="SGST">{"−₹90.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"−₹1,180.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,060.00"}</td>
                          <td className="num" data-label="CGST">{"₹26.50"}</td>
                          <td className="num" data-label="SGST">{"₹26.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,113.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-t="">{"No GST"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹1,500.00"}</td>
                              <td className="num" data-label="CGST">{"₹0.00"}</td>
                              <td className="num" data-label="SGST">{"₹0.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹79,237.60"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹1,980.95"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹1,980.95"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹940.00"}</td>
                              <td className="num" data-label="CGST">{"₹84.60"}</td>
                              <td className="num" data-label="SGST">{"₹84.60"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹85,808.70"}</td>
                            </tr>
                            <tr>
                              <td>{"Bank transfer (NEFT / RTGS) · receipt RC-26-27-00003 · 18 Oct 2026"}</td>
                              <td className="num">{"₹6,385.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹79,423.70"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Seventy-nine thousand four hundred and twenty-three and seventy paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10082">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10082" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10082"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Rohit Neil"}
                        <br />
                        {"+91 9097563483 · rohit.neil72@example.com"}
                        <br />
                        {"Reservation FK-10082"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 101 · 1 × GDLX"}
                        <br />
                        {"21 Oct 2026 → 26 Oct 2026 · 5 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 101 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹9,701.00"}</td>
                          <td className="num" data-label="CGST">{"₹873.09"}</td>
                          <td className="num" data-label="SGST">{"₹873.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹11,447.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"MB · Minibar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹740.00"}</td>
                          <td className="num" data-label="CGST">{"₹66.60"}</td>
                          <td className="num" data-label="SGST">{"₹66.60"}</td>
                          <td className="num" data-label="Amount">{"₹873.20"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹990.00"}</td>
                          <td className="num" data-label="CGST">{"₹24.75"}</td>
                          <td className="num" data-label="SGST">{"₹24.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,039.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"PO · Paid-out – Medicine (Lakeshore Pharmacy, receipt LP-77120)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹420.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount">{"₹420.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-t="">{"No GST"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹420.00"}</td>
                              <td className="num" data-label="CGST">{"₹0.00"}</td>
                              <td className="num" data-label="SGST">{"₹0.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹990.00"}</td>
                              <td className="num" data-label="CGST">{"₹24.75"}</td>
                              <td className="num" data-label="SGST">{"₹24.75"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹10,441.00"}</td>
                              <td className="num" data-label="CGST">{"₹939.69"}</td>
                              <td className="num" data-label="SGST">{"₹939.69"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹13,779.88"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹13,779.88"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Thirteen thousand seven hundred and seventy-nine and eighty-eight paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10058">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10058" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10058"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Shibu Krish"}
                        <br />
                        {"+91 8013760939 · shibu.krish358@example.com"}
                        <br />
                        {"Reservation FK-10058"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 104 · 1 × GDLX"}
                        <br />
                        {"19 Oct 2026 → 25 Oct 2026 · 6 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 104 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"BAR · Cochin Trade Bar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,420.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹3,420.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 104 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"SFG · Seafood Grill – dinner"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,610.00"}</td>
                          <td className="num" data-label="CGST">{"₹65.25"}</td>
                          <td className="num" data-label="SGST">{"₹65.25"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,740.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 104 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"SFG · Seafood Grill – dinner"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,020.00"}</td>
                          <td className="num" data-label="CGST">{"₹75.50"}</td>
                          <td className="num" data-label="SGST">{"₹75.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹3,171.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description" data-w="">{"PO · Paid-out – Courier (Blue Dart, Willingdon Island, receipt BD-4412087)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹600.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount">{"₹600.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,020.00"}</td>
                          <td className="num" data-label="CGST">{"₹25.50"}</td>
                          <td className="num" data-label="SGST">{"₹25.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,071.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-t="">{"No GST"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹4,020.00"}</td>
                              <td className="num" data-label="CGST">{"₹0.00"}</td>
                              <td className="num" data-label="SGST">{"₹0.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹25,853.00"}</td>
                              <td className="num" data-label="CGST">{"₹646.32"}</td>
                              <td className="num" data-label="SGST">{"₹646.33"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹31,165.65"}</td>
                            </tr>
                            <tr>
                              <td>{"OTA prepaid / virtual card · receipt RC-26-27-00021 · 19 Oct 2026"}</td>
                              <td className="num">{"₹46,584.70"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹15,419.05"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Fifteen thousand four hundred and nineteen and five paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10056">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10056" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10056"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Noura Al Saud"}
                        <br />
                        {"+966 765835597 · noura.alsaud234@example.com"}
                        <br />
                        {"Reservation FK-10056"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 105 · 1 × GDLX"}
                        <br />
                        {"19 Oct 2026 → 24 Oct 2026 · 5 nights"}
                        <br />
                        {"Plan CP · billed to Heritage Routes Travel"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 105 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,559.00"}</td>
                          <td className="num" data-label="CGST">{"₹163.97"}</td>
                          <td className="num" data-label="SGST">{"₹163.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,886.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 105 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,559.00"}</td>
                          <td className="num" data-label="CGST">{"₹163.97"}</td>
                          <td className="num" data-label="SGST">{"₹163.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,886.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 105 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,559.00"}</td>
                          <td className="num" data-label="CGST">{"₹163.97"}</td>
                          <td className="num" data-label="SGST">{"₹163.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,886.95"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹19,677.00"}</td>
                              <td className="num" data-label="CGST">{"₹491.92"}</td>
                              <td className="num" data-label="SGST">{"₹491.93"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹20,660.85"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹20,660.85"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty thousand six hundred and sixty and eighty-five paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10002">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10002" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10002"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Jyoti Jatin"}
                        <br />
                        {"+91 6099291524 · jyoti.jatin92@example.com"}
                        <br />
                        {"Reservation FK-10002"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 107 · 1 × GDLX"}
                        <br />
                        {"20 Oct 2026 → 23 Oct 2026 · 3 nights"}
                        <br />
                        {"Plan AP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 107 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹13,195.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,187.55"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,187.55"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹15,570.10"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"TRV · Travancore Restaurant – lunch"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,420.00"}</td>
                          <td className="num" data-label="CGST">{"₹60.50"}</td>
                          <td className="num" data-label="SGST">{"₹60.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,541.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 107 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹13,195.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,187.55"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,187.55"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹15,570.10"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"LND · Laundry"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,320.00"}</td>
                          <td className="num" data-label="CGST">{"₹118.80"}</td>
                          <td className="num" data-label="SGST">{"₹118.80"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,557.60"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹2,420.00"}</td>
                              <td className="num" data-label="CGST">{"₹60.50"}</td>
                              <td className="num" data-label="SGST">{"₹60.50"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹27,710.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹2,493.90"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹2,493.90"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹35,238.80"}</td>
                            </tr>
                            <tr>
                              <td>{"Cash · receipt RC-26-27-9801 · 22 Oct 2026"}</td>
                              <td className="num">{"₹20,000.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹15,238.80"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Fifteen thousand two hundred and thirty-eight and eighty paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10074">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10074" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10074"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Shruti Shaan"}
                        <br />
                        {"+91 9076092446 · shruti.shaan183@example.com"}
                        <br />
                        {"Reservation FK-10074"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 108 · 1 × GDLX"}
                        <br />
                        {"22 Oct 2026 → 25 Oct 2026 · 3 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody />
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody />
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹0.00"}</td>
                            </tr>
                            <tr>
                              <td>{"Credit / debit card · receipt RC-26-27-9808 · 22 Oct 2026"}</td>
                              <td className="num">{"₹7,558.95"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹7,558.95"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Seven thousand five hundred and fifty-eight and ninety-five paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10035">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10035" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10035"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Priya Kabir"}
                        <br />
                        {"+91 8078585932 · priya.kabir22@example.com"}
                        <br />
                        {"Reservation FK-10035"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 110, 119, 109 · 3 × GDLX"}
                        <br />
                        {"19 Oct 2026 → 25 Oct 2026 · 6 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 110 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,299.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,016.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,016.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,332.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 119 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 109 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,299.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,016.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,016.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,332.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 110 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,299.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,016.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,016.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,332.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 119 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 109 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,299.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,016.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,016.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,332.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 110 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,299.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,016.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,016.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,332.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 119 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 109 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,299.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,016.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,016.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,332.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge moved from room 110 to room 119 (transfer)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹0.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount">{"₹0.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"BAR · Cochin Trade Bar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,000.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹3,000.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description" data-w="">{"PO · Paid-out – Tips (Porter and driver (guest request), receipt No receipt)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹500.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount">{"₹500.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-t="">{"No GST"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹3,500.00"}</td>
                              <td className="num" data-label="CGST">{"₹0.00"}</td>
                              <td className="num" data-label="SGST">{"₹0.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹91,791.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹8,261.19"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹8,261.19"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹1,11,813.38"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹1,11,813.38"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees One lakh eleven thousand eight hundred and thirteen and thirty-eight paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10165">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10165" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10165"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Isha Vihaan"}
                        <br />
                        {"+91 8024152338 · isha.vihaan397@example.com"}
                        <br />
                        {"Reservation FK-10165"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 113 · 1 × GDLX"}
                        <br />
                        {"20 Oct 2026 → 24 Oct 2026 · 4 nights"}
                        <br />
                        {"Plan CP · billed to Coir Craft Industries"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 113 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,511.00"}</td>
                          <td className="num" data-label="CGST">{"₹162.77"}</td>
                          <td className="num" data-label="SGST">{"₹162.78"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,836.55"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"TRV · Travancore Restaurant – lunch"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,670.00"}</td>
                          <td className="num" data-label="CGST">{"₹41.75"}</td>
                          <td className="num" data-label="SGST">{"₹41.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,753.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 113 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,511.00"}</td>
                          <td className="num" data-label="CGST">{"₹162.77"}</td>
                          <td className="num" data-label="SGST">{"₹162.78"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,836.55"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹14,692.00"}</td>
                              <td className="num" data-label="CGST">{"₹367.30"}</td>
                              <td className="num" data-label="SGST">{"₹367.30"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹15,426.60"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹15,426.60"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Fifteen thousand four hundred and twenty-six and sixty paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10050">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10050" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10050"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Fatima Al Mansoori"}
                        <br />
                        {"+971 705478355 · fatima.almansoori132@example.com"}
                        <br />
                        {"Reservation FK-10050"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 114 · 1 × GDLX"}
                        <br />
                        {"20 Oct 2026 → 25 Oct 2026 · 5 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 114 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 114 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"BAR · Cochin Trade Bar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,340.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,340.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-t="">{"No GST"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹2,340.00"}</td>
                              <td className="num" data-label="CGST">{"₹0.00"}</td>
                              <td className="num" data-label="SGST">{"₹0.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹19,498.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹1,754.82"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹1,754.82"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹25,347.64"}</td>
                            </tr>
                            <tr>
                              <td>{"Payment link · receipt RC-26-27-00017 · 20 Oct 2026"}</td>
                              <td className="num">{"₹9,439.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹15,908.64"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Fifteen thousand nine hundred and eight and sixty-four paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10118">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10118" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10118"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Isha Dhruv"}
                        <br />
                        {"+91 6095350983 · isha.dhruv204@example.com"}
                        <br />
                        {"Reservation FK-10118"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 115 · 1 × GDLX"}
                        <br />
                        {"17 Oct 2026 → 23 Oct 2026 · 6 nights"}
                        <br />
                        {"Plan MAP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 115 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹14,897.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,340.73"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,340.73"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹17,578.46"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"TRV · Travancore Restaurant – lunch"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,410.00"}</td>
                          <td className="num" data-label="CGST">{"₹35.25"}</td>
                          <td className="num" data-label="SGST">{"₹35.25"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,480.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 115 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹14,097.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,268.73"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,268.73"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹16,634.46"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 115 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹14,097.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,268.73"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,268.73"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹16,634.46"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"MB · Minibar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹780.00"}</td>
                          <td className="num" data-label="CGST">{"₹70.20"}</td>
                          <td className="num" data-label="SGST">{"₹70.20"}</td>
                          <td className="num" data-label="Amount">{"₹920.40"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 115 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹14,097.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,268.73"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,268.73"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹16,634.46"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 115 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹14,097.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,268.73"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,268.73"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹16,634.46"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"MB · Minibar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹840.00"}</td>
                          <td className="num" data-label="CGST">{"₹75.60"}</td>
                          <td className="num" data-label="SGST">{"₹75.60"}</td>
                          <td className="num" data-label="Amount">{"₹991.20"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹1,410.00"}</td>
                              <td className="num" data-label="CGST">{"₹35.25"}</td>
                              <td className="num" data-label="SGST">{"₹35.25"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹76,405.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹6,876.45"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹6,876.45"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹91,638.40"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹91,638.40"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Ninety-one thousand six hundred and thirty-eight and forty paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10011">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10011" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10011"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Amit Bijoy"}
                        <br />
                        {"+91 8079085485 · amit.bijoy293@example.com"}
                        <br />
                        {"Reservation FK-10011"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 116 · 1 × GDLX"}
                        <br />
                        {"19 Oct 2026 → 26 Oct 2026 · 7 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 116 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"LND · Laundry"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,440.00"}</td>
                          <td className="num" data-label="CGST">{"₹129.60"}</td>
                          <td className="num" data-label="SGST">{"₹129.60"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,699.20"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 116 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 116 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹25,437.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹2,289.33"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹2,289.33"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹30,015.66"}</td>
                            </tr>
                            <tr>
                              <td>{"Credit / debit card · receipt RC-26-27-9803 · 22 Oct 2026"}</td>
                              <td className="num">{"₹30,000.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹15.66"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Fifteen and sixty-six paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10101">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10101" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10101"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Kavita Siddharth"}
                        <br />
                        {"+91 8055709254 · kavita.siddharth291@example.com"}
                        <br />
                        {"Reservation FK-10101"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 201 · 1 × GDLX"}
                        <br />
                        {"18 Oct 2026 → 24 Oct 2026 · 6 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 201 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 201 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"LND · Laundry"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,240.00"}</td>
                          <td className="num" data-label="CGST">{"₹111.60"}</td>
                          <td className="num" data-label="SGST">{"₹111.60"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,463.20"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 201 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"IRD · In-room dining"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,390.00"}</td>
                          <td className="num" data-label="CGST">{"₹59.75"}</td>
                          <td className="num" data-label="SGST">{"₹59.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,509.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 201 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"IRD · In-room dining"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,810.00"}</td>
                          <td className="num" data-label="CGST">{"₹45.25"}</td>
                          <td className="num" data-label="SGST">{"₹45.25"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,900.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹29,804.00"}</td>
                              <td className="num" data-label="CGST">{"₹745.10"}</td>
                              <td className="num" data-label="SGST">{"₹745.10"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹1,240.00"}</td>
                              <td className="num" data-label="CGST">{"₹111.60"}</td>
                              <td className="num" data-label="SGST">{"₹111.60"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹32,757.40"}</td>
                            </tr>
                            <tr>
                              <td>{"OTA prepaid / virtual card · receipt RC-26-27-00064 · 18 Oct 2026"}</td>
                              <td className="num">{"₹46,200.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹13,442.60"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Thirteen thousand four hundred and forty-two and sixty paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10084">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10084" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10084"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Dr Aswathy Vijay"}
                        <br />
                        {"+91 6064731802 · aswathy.vijay42@example.com"}
                        <br />
                        {"Reservation FK-10084"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 202 · 1 × GDLX"}
                        <br />
                        {"17 Oct 2026 → 25 Oct 2026 · 8 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 202 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹180.02"}</td>
                          <td className="num" data-label="SGST">{"₹180.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,561.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 202 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 202 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 202 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 202 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,080.00"}</td>
                          <td className="num" data-label="CGST">{"₹27.00"}</td>
                          <td className="num" data-label="SGST">{"₹27.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,134.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹33,885.00"}</td>
                              <td className="num" data-label="CGST">{"₹847.12"}</td>
                              <td className="num" data-label="SGST">{"₹847.13"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹7,000.00"}</td>
                              <td className="num" data-label="CGST">{"₹630.00"}</td>
                              <td className="num" data-label="SGST">{"₹630.00"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹43,839.25"}</td>
                            </tr>
                            <tr>
                              <td>{"Cash · receipt RC-26-27-9804 · 22 Oct 2026"}</td>
                              <td className="num">{"₹15,000.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹28,839.25"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty-eight thousand eight hundred and thirty-nine and twenty-five paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10108">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10108" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#final-FK-10108">{"Show the final bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10108"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Anna Schneider"}
                        <br />
                        {"+49 779087659 · anna.schneider254@example.com"}
                        <br />
                        {"Reservation FK-10108"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 205 · 1 × GDLX"}
                        <br />
                        {"19 Oct 2026 → 22 Oct 2026 · 3 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 205 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 205 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"MB · Minibar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹870.00"}</td>
                          <td className="num" data-label="CGST">{"₹78.30"}</td>
                          <td className="num" data-label="SGST">{"₹78.30"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,026.60"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 205 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"TRN · Airport transfer (one way)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,940.00"}</td>
                          <td className="num" data-label="CGST">{"₹174.60"}</td>
                          <td className="num" data-label="SGST">{"₹174.60"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,289.20"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,090.00"}</td>
                          <td className="num" data-label="CGST">{"₹27.25"}</td>
                          <td className="num" data-label="SGST">{"₹27.25"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,144.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹20,293.00"}</td>
                              <td className="num" data-label="CGST">{"₹507.32"}</td>
                              <td className="num" data-label="SGST">{"₹507.33"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹2,810.00"}</td>
                              <td className="num" data-label="CGST">{"₹252.90"}</td>
                              <td className="num" data-label="SGST">{"₹252.90"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹24,623.45"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹24,623.45"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty-four thousand six hundred and twenty-three and forty-five paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-final-FK-10108">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10108" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#bill-FK-10108">{"Show the interim bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – FINAL (for check-out)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"FB-26-27-10108"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Anna Schneider"}
                        <br />
                        {"+49 779087659 · anna.schneider254@example.com"}
                        <br />
                        {"Reservation FK-10108"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 205 · 1 × GDLX"}
                        <br />
                        {"19 Oct 2026 → 22 Oct 2026 · 3 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 205 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 205 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"MB · Minibar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹870.00"}</td>
                          <td className="num" data-label="CGST">{"₹78.30"}</td>
                          <td className="num" data-label="SGST">{"₹78.30"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,026.60"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 205 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"TRN · Airport transfer (one way)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,940.00"}</td>
                          <td className="num" data-label="CGST">{"₹174.60"}</td>
                          <td className="num" data-label="SGST">{"₹174.60"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,289.20"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,090.00"}</td>
                          <td className="num" data-label="CGST">{"₹27.25"}</td>
                          <td className="num" data-label="SGST">{"₹27.25"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,144.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹20,293.00"}</td>
                              <td className="num" data-label="CGST">{"₹507.32"}</td>
                              <td className="num" data-label="SGST">{"₹507.33"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹2,810.00"}</td>
                              <td className="num" data-label="CGST">{"₹252.90"}</td>
                              <td className="num" data-label="SGST">{"₹252.90"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹24,623.45"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹24,623.45"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty-four thousand six hundred and twenty-three and forty-five paise only"}
                    </p>
                    <p className="paper__small">{"This bill is a draft for check-out. The GST tax invoice is issued after settlement. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10104">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10104" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#final-FK-10104">{"Show the final bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10104"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Amit Chirag"}
                        <br />
                        {"+91 6050175895 · amit.chirag262@example.com"}
                        <br />
                        {"Reservation FK-10104"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 207 · 1 × GDLX"}
                        <br />
                        {"19 Oct 2026 → 22 Oct 2026 · 3 nights"}
                        <br />
                        {"Plan CP · billed to Kerala Trails Travel Co"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 207 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,559.00"}</td>
                          <td className="num" data-label="CGST">{"₹163.97"}</td>
                          <td className="num" data-label="SGST">{"₹163.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,886.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 207 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,559.00"}</td>
                          <td className="num" data-label="CGST">{"₹163.97"}</td>
                          <td className="num" data-label="SGST">{"₹163.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,886.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 207 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,559.00"}</td>
                          <td className="num" data-label="CGST">{"₹163.97"}</td>
                          <td className="num" data-label="SGST">{"₹163.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,886.95"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹19,677.00"}</td>
                              <td className="num" data-label="CGST">{"₹491.92"}</td>
                              <td className="num" data-label="SGST">{"₹491.93"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹20,660.85"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹20,660.85"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty thousand six hundred and sixty and eighty-five paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-final-FK-10104">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10104" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#bill-FK-10104">{"Show the interim bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – FINAL (for check-out)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"FB-26-27-10104"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Amit Chirag"}
                        <br />
                        {"+91 6050175895 · amit.chirag262@example.com"}
                        <br />
                        {"Reservation FK-10104"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 207 · 1 × GDLX"}
                        <br />
                        {"19 Oct 2026 → 22 Oct 2026 · 3 nights"}
                        <br />
                        {"Plan CP · billed to Kerala Trails Travel Co"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 207 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,559.00"}</td>
                          <td className="num" data-label="CGST">{"₹163.97"}</td>
                          <td className="num" data-label="SGST">{"₹163.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,886.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 207 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,559.00"}</td>
                          <td className="num" data-label="CGST">{"₹163.97"}</td>
                          <td className="num" data-label="SGST">{"₹163.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,886.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 207 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,559.00"}</td>
                          <td className="num" data-label="CGST">{"₹163.97"}</td>
                          <td className="num" data-label="SGST">{"₹163.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,886.95"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹19,677.00"}</td>
                              <td className="num" data-label="CGST">{"₹491.92"}</td>
                              <td className="num" data-label="SGST">{"₹491.93"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹20,660.85"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹20,660.85"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty thousand six hundred and sixty and eighty-five paise only"}
                    </p>
                    <p className="paper__small">{"This bill is a draft for check-out. The GST tax invoice is issued after settlement. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10033">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10033" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10033"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Elsa Lindberg"}
                        <br />
                        {"+46 799808098 · elsa.lindberg227@example.com"}
                        <br />
                        {"Reservation FK-10033"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 208 · 1 × GDLX"}
                        <br />
                        {"19 Oct 2026 → 26 Oct 2026 · 7 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 208 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 208 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"MB · Minibar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹720.00"}</td>
                          <td className="num" data-label="CGST">{"₹64.80"}</td>
                          <td className="num" data-label="SGST">{"₹64.80"}</td>
                          <td className="num" data-label="Amount">{"₹849.60"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 208 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹19,203.00"}</td>
                              <td className="num" data-label="CGST">{"₹480.07"}</td>
                              <td className="num" data-label="SGST">{"₹480.08"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹720.00"}</td>
                              <td className="num" data-label="CGST">{"₹64.80"}</td>
                              <td className="num" data-label="SGST">{"₹64.80"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹21,012.75"}</td>
                            </tr>
                            <tr>
                              <td>{"OTA prepaid / virtual card · receipt RC-26-27-00011 · 19 Oct 2026"}</td>
                              <td className="num">{"₹53,761.05"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹32,748.30"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Thirty-two thousand seven hundred and forty-eight and thirty paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10170">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10170" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10170"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Marco Rossi"}
                        <br />
                        {"+39 717183350 · marco.rossi235@example.com"}
                        <br />
                        {"Reservation FK-10170"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 211 · 1 × GDLX"}
                        <br />
                        {"18 Oct 2026 → 23 Oct 2026 · 5 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 211 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 211 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 211 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"SFG · Seafood Grill – dinner"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,340.00"}</td>
                          <td className="num" data-label="CGST">{"₹83.50"}</td>
                          <td className="num" data-label="SGST">{"₹83.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹3,507.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 211 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹3,340.00"}</td>
                              <td className="num" data-label="CGST">{"₹83.50"}</td>
                              <td className="num" data-label="SGST">{"₹83.50"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹35,496.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹3,194.64"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹3,194.64"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹45,392.28"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹45,392.28"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Forty-five thousand three hundred and ninety-two and twenty-eight paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10162">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10162" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10162"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Ethan Anderson"}
                        <br />
                        {"+1 784882037 · ethan.anderson384@example.com"}
                        <br />
                        {"Reservation FK-10162"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 212 · 1 × GDLX"}
                        <br />
                        {"17 Oct 2026 → 23 Oct 2026 · 6 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 212 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹180.02"}</td>
                          <td className="num" data-label="SGST">{"₹180.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,561.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 212 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 212 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 212 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 212 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"TRV · Travancore Restaurant – lunch"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,570.00"}</td>
                          <td className="num" data-label="CGST">{"₹39.25"}</td>
                          <td className="num" data-label="SGST">{"₹39.25"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,648.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹34,375.00"}</td>
                              <td className="num" data-label="CGST">{"₹859.37"}</td>
                              <td className="num" data-label="SGST">{"₹859.38"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹36,093.75"}</td>
                            </tr>
                            <tr>
                              <td>{"OTA prepaid / virtual card · receipt RC-26-27-00087 · 17 Oct 2026"}</td>
                              <td className="num">{"₹46,200.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹10,106.25"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Ten thousand one hundred and six and twenty-five paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10140">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10140" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10140"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Omar Al Farsi"}
                        <br />
                        {"+971 760705120 · omar.alfarsi86@example.com"}
                        <br />
                        {"Reservation FK-10140"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 213 · 1 × GDLX"}
                        <br />
                        {"19 Oct 2026 → 26 Oct 2026 · 7 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 213 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,600.00"}</td>
                          <td className="num" data-label="CGST">{"₹165.00"}</td>
                          <td className="num" data-label="SGST">{"₹165.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,930.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"TRV · Travancore Restaurant – lunch"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,420.00"}</td>
                          <td className="num" data-label="CGST">{"₹35.50"}</td>
                          <td className="num" data-label="SGST">{"₹35.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,491.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 213 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,600.00"}</td>
                          <td className="num" data-label="CGST">{"₹165.00"}</td>
                          <td className="num" data-label="SGST">{"₹165.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,930.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 213 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,600.00"}</td>
                          <td className="num" data-label="CGST">{"₹165.00"}</td>
                          <td className="num" data-label="SGST">{"₹165.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,930.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"IRD · In-room dining"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,570.00"}</td>
                          <td className="num" data-label="CGST">{"₹39.25"}</td>
                          <td className="num" data-label="SGST">{"₹39.25"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,648.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹900.00"}</td>
                          <td className="num" data-label="CGST">{"₹22.50"}</td>
                          <td className="num" data-label="SGST">{"₹22.50"}</td>
                          <td className="num" data-label="Amount">{"₹945.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹23,690.00"}</td>
                              <td className="num" data-label="CGST">{"₹592.25"}</td>
                              <td className="num" data-label="SGST">{"₹592.25"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹24,874.50"}</td>
                            </tr>
                            <tr>
                              <td>{"OTA prepaid / virtual card · receipt RC-26-27-00082 · 19 Oct 2026"}</td>
                              <td className="num">{"₹49,980.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹25,105.50"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty-five thousand one hundred and five and fifty paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10193">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10193" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#final-FK-10193">{"Show the final bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10193"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Sindhu Wilson"}
                        <br />
                        {"+91 7025913425 · sindhu.wilson253@example.com"}
                        <br />
                        {"Reservation FK-10193"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 216, 305 · 2 × GDLX"}
                        <br />
                        {"21 Oct 2026 → 22 Oct 2026 · 1 night"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 216 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 305 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹12,802.00"}</td>
                              <td className="num" data-label="CGST">{"₹320.05"}</td>
                              <td className="num" data-label="SGST">{"₹320.05"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹13,442.10"}</td>
                            </tr>
                            <tr>
                              <td>{"UPI · receipt RC-26-27-90193 · 21 Oct 2026"}</td>
                              <td className="num">{"₹13,442.10"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹0.00"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Zero only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-final-FK-10193">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10193" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#bill-FK-10193">{"Show the interim bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – FINAL (for check-out)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"FB-26-27-10193"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Sindhu Wilson"}
                        <br />
                        {"+91 7025913425 · sindhu.wilson253@example.com"}
                        <br />
                        {"Reservation FK-10193"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 216, 305 · 2 × GDLX"}
                        <br />
                        {"21 Oct 2026 → 22 Oct 2026 · 1 night"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 216 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 305 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,401.00"}</td>
                          <td className="num" data-label="CGST">{"₹160.02"}</td>
                          <td className="num" data-label="SGST">{"₹160.03"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,721.05"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹12,802.00"}</td>
                              <td className="num" data-label="CGST">{"₹320.05"}</td>
                              <td className="num" data-label="SGST">{"₹320.05"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹13,442.10"}</td>
                            </tr>
                            <tr>
                              <td>{"UPI · receipt RC-26-27-90193 · 21 Oct 2026"}</td>
                              <td className="num">{"₹13,442.10"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹0.00"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Zero only"}
                    </p>
                    <p className="paper__small">{"This bill is a draft for check-out. The GST tax invoice is issued after settlement. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10205">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10205" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10205"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Dr Anjali Rahman"}
                        <br />
                        {"+91 7079210322 · anjali.rahman335@example.com"}
                        <br />
                        {"Reservation FK-10205"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 218 · 1 × GDLX"}
                        <br />
                        {"20 Oct 2026 → 25 Oct 2026 · 5 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 218 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 218 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹900.00"}</td>
                          <td className="num" data-label="CGST">{"₹22.50"}</td>
                          <td className="num" data-label="SGST">{"₹22.50"}</td>
                          <td className="num" data-label="Amount">{"₹945.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹900.00"}</td>
                              <td className="num" data-label="CGST">{"₹22.50"}</td>
                              <td className="num" data-label="SGST">{"₹22.50"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹15,998.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹1,439.82"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹1,439.82"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹19,822.64"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹19,822.64"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Nineteen thousand eight hundred and twenty-two and sixty-four paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10069">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10069" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10069"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Biju George"}
                        <br />
                        {"+91 9026672375 · biju.george222@example.com"}
                        <br />
                        {"Reservation FK-10069"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 301 · 1 × GDLX"}
                        <br />
                        {"21 Oct 2026 → 23 Oct 2026 · 2 nights"}
                        <br />
                        {"Plan CP · billed to Periyar Tours & Travels"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 301 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,559.00"}</td>
                          <td className="num" data-label="CGST">{"₹163.97"}</td>
                          <td className="num" data-label="SGST">{"₹163.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,886.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"IRD · In-room dining"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,670.00"}</td>
                          <td className="num" data-label="CGST">{"₹41.75"}</td>
                          <td className="num" data-label="SGST">{"₹41.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,753.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹8,229.00"}</td>
                              <td className="num" data-label="CGST">{"₹205.72"}</td>
                              <td className="num" data-label="SGST">{"₹205.73"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹8,640.45"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹8,640.45"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Eight thousand six hundred and forty and forty-five paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10031">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10031" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10031"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Charlotte Fraser"}
                        <br />
                        {"+44 791012497 · charlotte.fraser15@example.com"}
                        <br />
                        {"Reservation FK-10031"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 303 · 1 × GDLX"}
                        <br />
                        {"17 Oct 2026 → 23 Oct 2026 · 6 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 303 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,479.00"}</td>
                          <td className="num" data-label="CGST">{"₹186.97"}</td>
                          <td className="num" data-label="SGST">{"₹186.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,852.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"SFG · Seafood Grill – dinner"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,550.00"}</td>
                          <td className="num" data-label="CGST">{"₹63.75"}</td>
                          <td className="num" data-label="SGST">{"₹63.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,677.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 303 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,799.00"}</td>
                          <td className="num" data-label="CGST">{"₹169.97"}</td>
                          <td className="num" data-label="SGST">{"₹169.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,138.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"IRD · In-room dining"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,230.00"}</td>
                          <td className="num" data-label="CGST">{"₹55.75"}</td>
                          <td className="num" data-label="SGST">{"₹55.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,341.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 303 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,799.00"}</td>
                          <td className="num" data-label="CGST">{"₹169.97"}</td>
                          <td className="num" data-label="SGST">{"₹169.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,138.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 303 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,799.00"}</td>
                          <td className="num" data-label="CGST">{"₹169.97"}</td>
                          <td className="num" data-label="SGST">{"₹169.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,138.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"LND · Laundry"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,140.00"}</td>
                          <td className="num" data-label="CGST">{"₹102.60"}</td>
                          <td className="num" data-label="SGST">{"₹102.60"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,345.20"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 303 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,799.00"}</td>
                          <td className="num" data-label="CGST">{"₹169.97"}</td>
                          <td className="num" data-label="SGST">{"₹169.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,138.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"MB · Minibar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹410.00"}</td>
                          <td className="num" data-label="CGST">{"₹36.90"}</td>
                          <td className="num" data-label="SGST">{"₹36.90"}</td>
                          <td className="num" data-label="Amount">{"₹483.80"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w="">{"FXC · Foreign exchange – GBP 200.00 at ₹112.0000 (certificate FX/26-27/0001)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"−₹22,400.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"−₹22,400.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-t="">{"No GST"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"−₹22,400.00"}</td>
                              <td className="num" data-label="CGST">{"₹0.00"}</td>
                              <td className="num" data-label="SGST">{"₹0.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹39,455.00"}</td>
                              <td className="num" data-label="CGST">{"₹986.37"}</td>
                              <td className="num" data-label="SGST">{"₹986.38"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹1,550.00"}</td>
                              <td className="num" data-label="CGST">{"₹139.50"}</td>
                              <td className="num" data-label="SGST">{"₹139.50"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹20,856.75"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹20,856.75"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty thousand eight hundred and fifty-six and seventy-five paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10143">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10143" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10143"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Oliver Hughes"}
                        <br />
                        {"+44 704239286 · oliver.hughes263@example.com"}
                        <br />
                        {"Reservation FK-10143"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 304 · 1 × GDLX"}
                        <br />
                        {"20 Oct 2026 → 25 Oct 2026 · 5 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 304 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"TRN · Airport transfer (one way)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,940.00"}</td>
                          <td className="num" data-label="CGST">{"₹174.60"}</td>
                          <td className="num" data-label="SGST">{"₹174.60"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,289.20"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 304 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹17,938.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹1,614.42"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹1,614.42"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹21,166.84"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹21,166.84"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty-one thousand one hundred and sixty-six and eighty-four paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10105">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10105" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10105"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Jyoti Kabir"}
                        <br />
                        {"+91 7013647341 · jyoti.kabir311@example.com"}
                        <br />
                        {"Reservation FK-10105"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 306 · 1 × GDLX"}
                        <br />
                        {"17 Oct 2026 → 23 Oct 2026 · 6 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 306 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,799.00"}</td>
                          <td className="num" data-label="CGST">{"₹791.91"}</td>
                          <td className="num" data-label="SGST">{"₹791.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,382.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"LND · Laundry"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹840.00"}</td>
                          <td className="num" data-label="CGST">{"₹75.60"}</td>
                          <td className="num" data-label="SGST">{"₹75.60"}</td>
                          <td className="num" data-label="Amount">{"₹991.20"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 306 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 306 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"SFG · Seafood Grill – dinner"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,990.00"}</td>
                          <td className="num" data-label="CGST">{"₹99.75"}</td>
                          <td className="num" data-label="SGST">{"₹99.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,189.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 306 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 306 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"IRD · In-room dining"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,730.00"}</td>
                          <td className="num" data-label="CGST">{"₹43.25"}</td>
                          <td className="num" data-label="SGST">{"₹43.25"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,816.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹5,720.00"}</td>
                              <td className="num" data-label="CGST">{"₹143.00"}</td>
                              <td className="num" data-label="SGST">{"₹143.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹41,635.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹3,747.15"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹3,747.15"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹55,135.30"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹55,135.30"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Fifty-five thousand one hundred and thirty-five and thirty paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10061">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10061" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10061"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Nandini Rishi"}
                        <br />
                        {"+91 9074297248 · nandini.rishi168@example.com"}
                        <br />
                        {"Reservation FK-10061"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 309 · 1 × GDLX"}
                        <br />
                        {"18 Oct 2026 → 23 Oct 2026 · 5 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 309 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,289.00"}</td>
                          <td className="num" data-label="CGST">{"₹157.22"}</td>
                          <td className="num" data-label="SGST">{"₹157.23"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,603.45"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 309 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,289.00"}</td>
                          <td className="num" data-label="CGST">{"₹157.22"}</td>
                          <td className="num" data-label="SGST">{"₹157.23"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,603.45"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"MB · Minibar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹370.00"}</td>
                          <td className="num" data-label="CGST">{"₹33.30"}</td>
                          <td className="num" data-label="SGST">{"₹33.30"}</td>
                          <td className="num" data-label="Amount">{"₹436.60"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 309 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,289.00"}</td>
                          <td className="num" data-label="CGST">{"₹157.22"}</td>
                          <td className="num" data-label="SGST">{"₹157.23"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,603.45"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"TRN · Airport transfer (one way)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,940.00"}</td>
                          <td className="num" data-label="CGST">{"₹174.60"}</td>
                          <td className="num" data-label="SGST">{"₹174.60"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,289.20"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 309 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,289.00"}</td>
                          <td className="num" data-label="CGST">{"₹157.22"}</td>
                          <td className="num" data-label="SGST">{"₹157.23"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,603.45"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹25,156.00"}</td>
                              <td className="num" data-label="CGST">{"₹628.90"}</td>
                              <td className="num" data-label="SGST">{"₹628.90"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹2,310.00"}</td>
                              <td className="num" data-label="CGST">{"₹207.90"}</td>
                              <td className="num" data-label="SGST">{"₹207.90"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹29,139.60"}</td>
                            </tr>
                            <tr>
                              <td>{"Credit / debit card · receipt RC-26-27-00025 · 18 Oct 2026"}</td>
                              <td className="num">{"₹35,306.45"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹6,166.85"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Six thousand one hundred and sixty-six and eighty-five paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10103">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10103" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10103"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Prasad Pavan"}
                        <br />
                        {"+91 7053317435 · prasad.pavan164@example.com"}
                        <br />
                        {"Reservation FK-10103"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 310 · 1 × GDLX"}
                        <br />
                        {"17 Oct 2026 → 25 Oct 2026 · 8 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 310 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,799.00"}</td>
                          <td className="num" data-label="CGST">{"₹791.91"}</td>
                          <td className="num" data-label="SGST">{"₹791.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,382.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"TRV · Travancore Restaurant – lunch"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,630.00"}</td>
                          <td className="num" data-label="CGST">{"₹40.75"}</td>
                          <td className="num" data-label="SGST">{"₹40.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,711.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 310 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"MB · Minibar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹270.00"}</td>
                          <td className="num" data-label="CGST">{"₹24.30"}</td>
                          <td className="num" data-label="SGST">{"₹24.30"}</td>
                          <td className="num" data-label="Amount">{"₹318.60"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 310 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 310 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 310 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"TRN · Airport transfer (one way)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,940.00"}</td>
                          <td className="num" data-label="CGST">{"₹174.60"}</td>
                          <td className="num" data-label="SGST">{"₹174.60"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,289.20"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹1,630.00"}</td>
                              <td className="num" data-label="CGST">{"₹40.75"}</td>
                              <td className="num" data-label="SGST">{"₹40.75"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹43,005.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹3,870.45"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹3,870.45"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹52,457.40"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹52,457.40"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Fifty-two thousand four hundred and fifty-seven and forty paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10106">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10106" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10106"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Nandini Jatin"}
                        <br />
                        {"+91 8075690925 · nandini.jatin63@example.com"}
                        <br />
                        {"Reservation FK-10106"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 313 · 1 × PDLX"}
                        <br />
                        {"21 Oct 2026 → 25 Oct 2026 · 4 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 313 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,799.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,922.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"SFG · Seafood Grill – dinner"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,830.00"}</td>
                          <td className="num" data-label="CGST">{"₹95.75"}</td>
                          <td className="num" data-label="SGST">{"₹95.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,021.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹3,830.00"}</td>
                              <td className="num" data-label="CGST">{"₹95.75"}</td>
                              <td className="num" data-label="SGST">{"₹95.75"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹11,799.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹1,061.91"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹1,061.91"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹17,944.32"}</td>
                            </tr>
                            <tr>
                              <td>{"Credit / debit card · receipt RC-26-27-9805 · 22 Oct 2026"}</td>
                              <td className="num">{"₹40,000.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹22,055.68"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty-two thousand fifty-five and sixty-eight paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10102">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10102" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#final-FK-10102">{"Show the final bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10102"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Remya Kurian"}
                        <br />
                        {"+91 7081610269 · remya.kurian329@example.com"}
                        <br />
                        {"Reservation FK-10102"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 319 · 1 × PDLX"}
                        <br />
                        {"18 Oct 2026 → 22 Oct 2026 · 4 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 319 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 319 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 319 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 319 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹27,604.00"}</td>
                              <td className="num" data-label="CGST">{"₹690.10"}</td>
                              <td className="num" data-label="SGST">{"₹690.10"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹28,984.20"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹28,984.20"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty-eight thousand nine hundred and eighty-four and twenty paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-final-FK-10102">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10102" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#bill-FK-10102">{"Show the interim bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – FINAL (for check-out)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"FB-26-27-10102"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Remya Kurian"}
                        <br />
                        {"+91 7081610269 · remya.kurian329@example.com"}
                        <br />
                        {"Reservation FK-10102"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 319 · 1 × PDLX"}
                        <br />
                        {"18 Oct 2026 → 22 Oct 2026 · 4 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 319 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 319 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 319 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 319 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹27,604.00"}</td>
                              <td className="num" data-label="CGST">{"₹690.10"}</td>
                              <td className="num" data-label="SGST">{"₹690.10"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹28,984.20"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹28,984.20"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty-eight thousand nine hundred and eighty-four and twenty paise only"}
                    </p>
                    <p className="paper__small">{"This bill is a draft for check-out. The GST tax invoice is issued after settlement. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10197">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10197" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10197"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Rahul Philip"}
                        <br />
                        {"+91 9030807261 · rahul.philip280@example.com"}
                        <br />
                        {"Reservation FK-10197"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 401 · 1 × PDLX"}
                        <br />
                        {"22 Oct 2026 → 26 Oct 2026 · 4 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody />
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody />
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹0.00"}</td>
                            </tr>
                            <tr>
                              <td>{"UPI · receipt RC-26-27-9807 · 22 Oct 2026"}</td>
                              <td className="num">{"₹9,202.82"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹9,202.82"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Nine thousand two hundred and two and eighty-two paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10048">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10048" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10048"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Kavita Siddharth"}
                        <br />
                        {"+91 7016441324 · kavita.siddharth115@example.com"}
                        <br />
                        {"Reservation FK-10048"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 402 · 1 × PDLX"}
                        <br />
                        {"17 Oct 2026 → 25 Oct 2026 · 8 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 402 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹9,299.00"}</td>
                          <td className="num" data-label="CGST">{"₹836.91"}</td>
                          <td className="num" data-label="SGST">{"₹836.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,972.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 402 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"LND · Laundry"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,430.00"}</td>
                          <td className="num" data-label="CGST">{"₹128.70"}</td>
                          <td className="num" data-label="SGST">{"₹128.70"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,687.40"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 402 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 402 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"TRN · Airport transfer (one way)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,940.00"}</td>
                          <td className="num" data-label="CGST">{"₹174.60"}</td>
                          <td className="num" data-label="SGST">{"₹174.60"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,289.20"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 402 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"SFG · Seafood Grill – dinner"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,670.00"}</td>
                          <td className="num" data-label="CGST">{"₹91.75"}</td>
                          <td className="num" data-label="SGST">{"₹91.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹3,853.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,010.00"}</td>
                          <td className="num" data-label="CGST">{"₹25.25"}</td>
                          <td className="num" data-label="SGST">{"₹25.25"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,060.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹4,680.00"}</td>
                              <td className="num" data-label="CGST">{"₹117.00"}</td>
                              <td className="num" data-label="SGST">{"₹117.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹46,665.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹4,199.85"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹4,199.85"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹59,978.70"}</td>
                            </tr>
                            <tr>
                              <td>{"OTA prepaid / virtual card · receipt RC-26-27-00016 · 17 Oct 2026"}</td>
                              <td className="num">{"₹83,062.56"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹23,083.86"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty-three thousand eighty-three and eighty-six paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10180">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10180" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10180"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Luc Moreau"}
                        <br />
                        {"+33 715467367 · luc.moreau260@example.com"}
                        <br />
                        {"Reservation FK-10180"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 403, 509 · 2 × PDLX"}
                        <br />
                        {"18 Oct 2026 → 25 Oct 2026 · 7 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 403 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 509 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 403 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 509 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 403 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 509 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 403 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 509 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"SFG · Seafood Grill – dinner"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹4,820.00"}</td>
                          <td className="num" data-label="CGST">{"₹120.50"}</td>
                          <td className="num" data-label="SGST">{"₹120.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹5,061.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹60,028.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹1,500.70"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹1,500.70"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹63,029.40"}</td>
                            </tr>
                            <tr>
                              <td>{"OTA prepaid / virtual card · receipt RC-26-27-00093 · 18 Oct 2026"}</td>
                              <td className="num">{"₹1,21,647.62"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹58,618.22"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Fifty-eight thousand six hundred and eighteen and twenty-two paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10187">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10187" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#final-FK-10187">{"Show the final bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10187"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Kavita Ranjan"}
                        <br />
                        {"+91 6082492516 · kavita.ranjan257@example.com"}
                        <br />
                        {"Reservation FK-10187"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 406, 503, 404 · 3 × PDLX"}
                        <br />
                        {"20 Oct 2026 → 22 Oct 2026 · 2 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 406 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 503 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,000.00"}</td>
                          <td className="num" data-label="CGST">{"₹175.00"}</td>
                          <td className="num" data-label="SGST">{"₹175.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,350.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 404 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 406 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 503 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,000.00"}</td>
                          <td className="num" data-label="CGST">{"₹175.00"}</td>
                          <td className="num" data-label="SGST">{"₹175.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,350.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 404 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹790.00"}</td>
                          <td className="num" data-label="CGST">{"₹19.75"}</td>
                          <td className="num" data-label="SGST">{"₹19.75"}</td>
                          <td className="num" data-label="Amount">{"₹829.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹14,790.00"}</td>
                              <td className="num" data-label="CGST">{"₹369.75"}</td>
                              <td className="num" data-label="SGST">{"₹369.75"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹44,304.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹3,987.36"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹3,987.36"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹67,808.22"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹67,808.22"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Sixty-seven thousand eight hundred and eight and twenty-two paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-final-FK-10187">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10187" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#bill-FK-10187">{"Show the interim bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – FINAL (for check-out)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"FB-26-27-10187"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Kavita Ranjan"}
                        <br />
                        {"+91 6082492516 · kavita.ranjan257@example.com"}
                        <br />
                        {"Reservation FK-10187"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 406, 503, 404 · 3 × PDLX"}
                        <br />
                        {"20 Oct 2026 → 22 Oct 2026 · 2 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 406 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 503 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,000.00"}</td>
                          <td className="num" data-label="CGST">{"₹175.00"}</td>
                          <td className="num" data-label="SGST">{"₹175.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,350.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 404 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 406 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 503 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,000.00"}</td>
                          <td className="num" data-label="CGST">{"₹175.00"}</td>
                          <td className="num" data-label="SGST">{"₹175.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,350.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 404 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹790.00"}</td>
                          <td className="num" data-label="CGST">{"₹19.75"}</td>
                          <td className="num" data-label="SGST">{"₹19.75"}</td>
                          <td className="num" data-label="Amount">{"₹829.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹14,790.00"}</td>
                              <td className="num" data-label="CGST">{"₹369.75"}</td>
                              <td className="num" data-label="SGST">{"₹369.75"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹44,304.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹3,987.36"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹3,987.36"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹67,808.22"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹67,808.22"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Sixty-seven thousand eight hundred and eight and twenty-two paise only"}
                    </p>
                    <p className="paper__small">{"This bill is a draft for check-out. The GST tax invoice is issued after settlement. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10120">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10120" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10120"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Ayesha Sahil"}
                        <br />
                        {"+91 8088534394 · ayesha.sahil57@example.com"}
                        <br />
                        {"Reservation FK-10120"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 407 · 1 × PDLX"}
                        <br />
                        {"19 Oct 2026 → 26 Oct 2026 · 7 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 407 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,649.00"}</td>
                          <td className="num" data-label="CGST">{"₹688.41"}</td>
                          <td className="num" data-label="SGST">{"₹688.41"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,025.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 407 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,649.00"}</td>
                          <td className="num" data-label="CGST">{"₹688.41"}</td>
                          <td className="num" data-label="SGST">{"₹688.41"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,025.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 407 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,649.00"}</td>
                          <td className="num" data-label="CGST">{"₹688.41"}</td>
                          <td className="num" data-label="SGST">{"₹688.41"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,025.82"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹26,447.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹2,380.23"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹2,380.23"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹31,207.46"}</td>
                            </tr>
                            <tr>
                              <td>{"Payment link · receipt RC-26-27-00073 · 19 Oct 2026"}</td>
                              <td className="num">{"₹9,026.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹22,181.46"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty-two thousand one hundred and eighty-one and forty-six paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10161">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10161" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10161"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Lakshmi Mathew"}
                        <br />
                        {"+91 7075512688 · lakshmi.mathew52@example.com"}
                        <br />
                        {"Reservation FK-10161"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 408 · 1 × PDLX"}
                        <br />
                        {"17 Oct 2026 → 25 Oct 2026 · 8 nights"}
                        <br />
                        {"Plan CP · billed to Coir Craft Industries"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 408 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,183.00"}</td>
                          <td className="num" data-label="CGST">{"₹736.47"}</td>
                          <td className="num" data-label="SGST">{"₹736.47"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,655.94"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 408 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,479.00"}</td>
                          <td className="num" data-label="CGST">{"₹186.97"}</td>
                          <td className="num" data-label="SGST">{"₹186.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,852.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 408 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,479.00"}</td>
                          <td className="num" data-label="CGST">{"₹186.97"}</td>
                          <td className="num" data-label="SGST">{"₹186.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,852.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 408 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,479.00"}</td>
                          <td className="num" data-label="CGST">{"₹186.97"}</td>
                          <td className="num" data-label="SGST">{"₹186.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,852.95"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"MB · Minibar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹780.00"}</td>
                          <td className="num" data-label="CGST">{"₹70.20"}</td>
                          <td className="num" data-label="SGST">{"₹70.20"}</td>
                          <td className="num" data-label="Amount">{"₹920.40"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 408 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,479.00"}</td>
                          <td className="num" data-label="CGST">{"₹186.97"}</td>
                          <td className="num" data-label="SGST">{"₹186.98"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,852.95"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹29,916.00"}</td>
                              <td className="num" data-label="CGST">{"₹747.90"}</td>
                              <td className="num" data-label="SGST">{"₹747.90"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹8,963.00"}</td>
                              <td className="num" data-label="CGST">{"₹806.67"}</td>
                              <td className="num" data-label="SGST">{"₹806.67"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹41,988.14"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹41,988.14"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Forty-one thousand nine hundred and eighty-eight and fourteen paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10200">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10200" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10200"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Oliver Hughes"}
                        <br />
                        {"+44 787827462 · oliver.hughes294@example.com"}
                        <br />
                        {"Reservation FK-10200"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 409 · 1 × PDLX"}
                        <br />
                        {"20 Oct 2026 → 24 Oct 2026 · 4 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 409 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,799.00"}</td>
                          <td className="num" data-label="CGST">{"₹701.91"}</td>
                          <td className="num" data-label="SGST">{"₹701.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,202.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 409 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,799.00"}</td>
                          <td className="num" data-label="CGST">{"₹701.91"}</td>
                          <td className="num" data-label="SGST">{"₹701.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,202.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"TRN · Airport transfer (one way)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,940.00"}</td>
                          <td className="num" data-label="CGST">{"₹174.60"}</td>
                          <td className="num" data-label="SGST">{"₹174.60"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,289.20"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹17,538.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹1,578.42"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹1,578.42"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹20,694.84"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹20,694.84"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty thousand six hundred and ninety-four and eighty-four paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10172">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10172" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#final-FK-10172">{"Show the final bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10172"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Shruti Siddharth"}
                        <br />
                        {"+91 9074846416 · shruti.siddharth78@example.com"}
                        <br />
                        {"Reservation FK-10172"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 415, 316 · 2 × PDLX"}
                        <br />
                        {"18 Oct 2026 → 22 Oct 2026 · 4 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 415 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 316 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"SFG · Seafood Grill – dinner"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,100.00"}</td>
                          <td className="num" data-label="CGST">{"₹52.50"}</td>
                          <td className="num" data-label="SGST">{"₹52.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,205.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 415 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 316 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 415 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 316 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 415 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 316 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"BAR · Cochin Trade Bar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,010.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹3,010.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"LCO · Late check-out fee – until 15:00 (approved)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,250.00"}</td>
                          <td className="num" data-label="CGST">{"₹112.50"}</td>
                          <td className="num" data-label="SGST">{"₹112.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,475.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"PO · Paid-out – Taxi fare (Kochi Cabs, receipt KC-90471)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,100.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,100.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-t="">{"No GST"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹4,110.00"}</td>
                              <td className="num" data-label="CGST">{"₹0.00"}</td>
                              <td className="num" data-label="SGST">{"₹0.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹29,704.00"}</td>
                              <td className="num" data-label="CGST">{"₹742.60"}</td>
                              <td className="num" data-label="SGST">{"₹742.60"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹45,554.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹4,099.86"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹4,099.86"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹89,052.92"}</td>
                            </tr>
                            <tr>
                              <td>{"UPI · receipt RC-26-27-00092 · 18 Oct 2026"}</td>
                              <td className="num">{"₹12,037.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹77,015.92"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Seventy-seven thousand fifteen and ninety-two paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-final-FK-10172">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10172" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#bill-FK-10172">{"Show the interim bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – FINAL (for check-out)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"FB-26-27-10172"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Shruti Siddharth"}
                        <br />
                        {"+91 9074846416 · shruti.siddharth78@example.com"}
                        <br />
                        {"Reservation FK-10172"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 415, 316 · 2 × PDLX"}
                        <br />
                        {"18 Oct 2026 → 22 Oct 2026 · 4 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 415 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 316 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"SFG · Seafood Grill – dinner"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,100.00"}</td>
                          <td className="num" data-label="CGST">{"₹52.50"}</td>
                          <td className="num" data-label="SGST">{"₹52.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,205.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 415 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 316 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 415 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 316 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 415 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 316 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"BAR · Cochin Trade Bar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,010.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹3,010.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"LCO · Late check-out fee – until 15:00 (approved)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,250.00"}</td>
                          <td className="num" data-label="CGST">{"₹112.50"}</td>
                          <td className="num" data-label="SGST">{"₹112.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,475.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"PO · Paid-out – Taxi fare (Kochi Cabs, receipt KC-90471)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,100.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,100.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-t="">{"No GST"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹4,110.00"}</td>
                              <td className="num" data-label="CGST">{"₹0.00"}</td>
                              <td className="num" data-label="SGST">{"₹0.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹29,704.00"}</td>
                              <td className="num" data-label="CGST">{"₹742.60"}</td>
                              <td className="num" data-label="SGST">{"₹742.60"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹45,554.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹4,099.86"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹4,099.86"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹89,052.92"}</td>
                            </tr>
                            <tr>
                              <td>{"UPI · receipt RC-26-27-00092 · 18 Oct 2026"}</td>
                              <td className="num">{"₹12,037.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹77,015.92"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Seventy-seven thousand fifteen and ninety-two paise only"}
                    </p>
                    <p className="paper__small">{"This bill is a draft for check-out. The GST tax invoice is issued after settlement. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10123">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10123" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#final-FK-10123">{"Show the final bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10123"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Isha Neil"}
                        <br />
                        {"+91 7078985939 · isha.neil369@example.com"}
                        <br />
                        {"Reservation FK-10123"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 416, 505 · 2 × PDLX"}
                        <br />
                        {"20 Oct 2026 → 22 Oct 2026 · 2 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 416 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,884.10"}</td>
                          <td className="num" data-label="CGST">{"₹172.10"}</td>
                          <td className="num" data-label="SGST">{"₹172.11"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,228.31"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 505 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,317.10"}</td>
                          <td className="num" data-label="CGST">{"₹157.93"}</td>
                          <td className="num" data-label="SGST">{"₹157.93"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,632.96"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"TRV · Travancore Restaurant – lunch"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,180.00"}</td>
                          <td className="num" data-label="CGST">{"₹54.50"}</td>
                          <td className="num" data-label="SGST">{"₹54.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,289.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 416 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,884.10"}</td>
                          <td className="num" data-label="CGST">{"₹172.10"}</td>
                          <td className="num" data-label="SGST">{"₹172.11"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,228.31"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 505 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,317.10"}</td>
                          <td className="num" data-label="CGST">{"₹157.93"}</td>
                          <td className="num" data-label="SGST">{"₹157.93"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,632.96"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹28,582.40"}</td>
                              <td className="num" data-label="CGST">{"₹714.57"}</td>
                              <td className="num" data-label="SGST">{"₹714.57"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹30,011.54"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹30,011.54"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Thirty thousand eleven and fifty-four paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-final-FK-10123">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10123" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#bill-FK-10123">{"Show the interim bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – FINAL (for check-out)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"FB-26-27-10123"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Isha Neil"}
                        <br />
                        {"+91 7078985939 · isha.neil369@example.com"}
                        <br />
                        {"Reservation FK-10123"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 416, 505 · 2 × PDLX"}
                        <br />
                        {"20 Oct 2026 → 22 Oct 2026 · 2 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 416 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,884.10"}</td>
                          <td className="num" data-label="CGST">{"₹172.10"}</td>
                          <td className="num" data-label="SGST">{"₹172.11"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,228.31"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 505 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,317.10"}</td>
                          <td className="num" data-label="CGST">{"₹157.93"}</td>
                          <td className="num" data-label="SGST">{"₹157.93"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,632.96"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"TRV · Travancore Restaurant – lunch"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,180.00"}</td>
                          <td className="num" data-label="CGST">{"₹54.50"}</td>
                          <td className="num" data-label="SGST">{"₹54.50"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,289.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 416 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,884.10"}</td>
                          <td className="num" data-label="CGST">{"₹172.10"}</td>
                          <td className="num" data-label="SGST">{"₹172.11"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,228.31"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 505 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,317.10"}</td>
                          <td className="num" data-label="CGST">{"₹157.93"}</td>
                          <td className="num" data-label="SGST">{"₹157.93"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,632.96"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹28,582.40"}</td>
                              <td className="num" data-label="CGST">{"₹714.57"}</td>
                              <td className="num" data-label="SGST">{"₹714.57"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹30,011.54"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹30,011.54"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Thirty thousand eleven and fifty-four paise only"}
                    </p>
                    <p className="paper__small">{"This bill is a draft for check-out. The GST tax invoice is issued after settlement. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10203">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10203" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10203"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Kavita Siddharth"}
                        <br />
                        {"+91 7016441324 · kavita.siddharth115@example.com"}
                        <br />
                        {"Reservation FK-10203"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 417 · 1 × PDLX"}
                        <br />
                        {"19 Oct 2026 → 23 Oct 2026 · 4 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 417 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"TRV · Travancore Restaurant – lunch"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,910.00"}</td>
                          <td className="num" data-label="CGST">{"₹47.75"}</td>
                          <td className="num" data-label="SGST">{"₹47.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,005.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 417 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 417 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,901.00"}</td>
                          <td className="num" data-label="CGST">{"₹172.52"}</td>
                          <td className="num" data-label="SGST">{"₹172.53"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹7,246.05"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹22,613.00"}</td>
                              <td className="num" data-label="CGST">{"₹565.32"}</td>
                              <td className="num" data-label="SGST">{"₹565.33"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹23,743.65"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹23,743.65"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twenty-three thousand seven hundred and forty-three and sixty-five paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10178">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10178" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10178"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Prasad Manav"}
                        <br />
                        {"+91 6098131867 · prasad.manav60@example.com"}
                        <br />
                        {"Reservation FK-10178"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 501 · 1 × PDLX"}
                        <br />
                        {"19 Oct 2026 → 26 Oct 2026 · 7 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 501 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,799.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,922.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"SFG · Seafood Grill – dinner"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹4,410.00"}</td>
                          <td className="num" data-label="CGST">{"₹110.25"}</td>
                          <td className="num" data-label="SGST">{"₹110.25"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,630.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 501 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,799.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,922.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 501 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,799.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,922.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹710.00"}</td>
                          <td className="num" data-label="CGST">{"₹17.75"}</td>
                          <td className="num" data-label="SGST">{"₹17.75"}</td>
                          <td className="num" data-label="Amount">{"₹745.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹5,120.00"}</td>
                              <td className="num" data-label="CGST">{"₹128.00"}</td>
                              <td className="num" data-label="SGST">{"₹128.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹38,897.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹3,500.73"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹3,500.73"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹51,274.46"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹51,274.46"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Fifty-one thousand two hundred and seventy-four and forty-six paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10027">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10027" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10027"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Dr Claire Dubois"}
                        <br />
                        {"+33 779619175 · claire.dubois348@example.com"}
                        <br />
                        {"Reservation FK-10027"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 504 · 1 × PDLX"}
                        <br />
                        {"17 Oct 2026 → 26 Oct 2026 · 9 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 504 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹9,299.00"}</td>
                          <td className="num" data-label="CGST">{"₹836.91"}</td>
                          <td className="num" data-label="SGST">{"₹836.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,972.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 504 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"TRV · Travancore Restaurant – lunch"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,150.00"}</td>
                          <td className="num" data-label="CGST">{"₹53.75"}</td>
                          <td className="num" data-label="SGST">{"₹53.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,257.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 504 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"SFG · Seafood Grill – dinner"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,030.00"}</td>
                          <td className="num" data-label="CGST">{"₹50.75"}</td>
                          <td className="num" data-label="SGST">{"₹50.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,131.50"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 504 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 504 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹940.00"}</td>
                          <td className="num" data-label="CGST">{"₹23.50"}</td>
                          <td className="num" data-label="SGST">{"₹23.50"}</td>
                          <td className="num" data-label="Amount">{"₹987.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹5,120.00"}</td>
                              <td className="num" data-label="CGST">{"₹128.00"}</td>
                              <td className="num" data-label="SGST">{"₹128.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹46,795.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹4,211.55"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹4,211.55"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹60,594.10"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹60,594.10"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Sixty thousand five hundred and ninety-four and ten paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10159">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10159" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10159"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Dr Ayesha Chirag"}
                        <br />
                        {"+91 7042582560 · ayesha.chirag321@example.com"}
                        <br />
                        {"Reservation FK-10159"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 506, 318 · 2 × PDLX"}
                        <br />
                        {"17 Oct 2026 → 24 Oct 2026 · 7 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 506 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹12,599.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,133.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,133.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹14,866.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"17 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 318 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹9,299.00"}</td>
                          <td className="num" data-label="CGST">{"₹836.91"}</td>
                          <td className="num" data-label="SGST">{"₹836.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,972.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 506 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,799.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,922.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 318 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 506 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,799.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,922.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 318 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"IRD · In-room dining"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹880.00"}</td>
                          <td className="num" data-label="CGST">{"₹22.00"}</td>
                          <td className="num" data-label="SGST">{"₹22.00"}</td>
                          <td className="num" data-label="Amount">{"₹924.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 506 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,799.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,922.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 318 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 506 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,799.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,061.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,922.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 318 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"BAR · Cochin Trade Bar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,410.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,410.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"PO · Paid-out – Florist (Marine Drive Flowers, receipt MF-3318)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,500.00"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-t="">{"No GST"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹3,910.00"}</td>
                              <td className="num" data-label="CGST">{"₹0.00"}</td>
                              <td className="num" data-label="SGST">{"₹0.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹880.00"}</td>
                              <td className="num" data-label="CGST">{"₹22.00"}</td>
                              <td className="num" data-label="SGST">{"₹22.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹1,06,590.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹9,593.10"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹9,593.10"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹1,30,610.20"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹1,30,610.20"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees One lakh thirty thousand six hundred and ten and twenty paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10010">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10010" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10010"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Pooja Kunal"}
                        <br />
                        {"+91 7043104410 · pooja.kunal288@example.com"}
                        <br />
                        {"Reservation FK-10010"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 507 · 1 × PDLX"}
                        <br />
                        {"21 Oct 2026 → 23 Oct 2026 · 2 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 507 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹10,201.00"}</td>
                          <td className="num" data-label="CGST">{"₹918.09"}</td>
                          <td className="num" data-label="SGST">{"₹918.09"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹12,037.18"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹910.00"}</td>
                          <td className="num" data-label="CGST">{"₹22.75"}</td>
                          <td className="num" data-label="SGST">{"₹22.75"}</td>
                          <td className="num" data-label="Amount">{"₹955.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹910.00"}</td>
                              <td className="num" data-label="CGST">{"₹22.75"}</td>
                              <td className="num" data-label="SGST">{"₹22.75"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹10,201.00"}</td>
                              <td className="num" data-label="CGST">{"₹918.09"}</td>
                              <td className="num" data-label="SGST">{"₹918.09"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹12,992.68"}</td>
                            </tr>
                            <tr>
                              <td>{"UPI · receipt RC-26-27-9802 · 22 Oct 2026"}</td>
                              <td className="num">{"₹24,074.36"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹11,081.68"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Eleven thousand eighty-one and sixty-eight paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10097">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10097" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10097"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Sindhu Rahman"}
                        <br />
                        {"+91 8027791279 · sindhu.rahman98@example.com"}
                        <br />
                        {"Reservation FK-10097"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 508, 217 · 1 × PDLX + 1 × GDLX"}
                        <br />
                        {"18 Oct 2026 → 24 Oct 2026 · 6 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 508 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 217 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"TRN · Airport transfer (one way)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,940.00"}</td>
                          <td className="num" data-label="CGST">{"₹174.60"}</td>
                          <td className="num" data-label="SGST">{"₹174.60"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,289.20"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 508 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 217 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"LND · Laundry"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,060.00"}</td>
                          <td className="num" data-label="CGST">{"₹95.40"}</td>
                          <td className="num" data-label="SGST">{"₹95.40"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,250.80"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 508 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 217 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"BAR · Cochin Trade Bar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹2,690.00"}</td>
                          <td className="num" data-label="CGST">{"₹0.00"}</td>
                          <td className="num" data-label="SGST">{"₹0.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,690.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 508 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹8,499.00"}</td>
                          <td className="num" data-label="CGST">{"₹764.91"}</td>
                          <td className="num" data-label="SGST">{"₹764.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹10,028.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – GDLX 217 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,999.00"}</td>
                          <td className="num" data-label="CGST">{"₹719.91"}</td>
                          <td className="num" data-label="SGST">{"₹719.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,438.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"MB · Minibar"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹390.00"}</td>
                          <td className="num" data-label="CGST">{"₹35.10"}</td>
                          <td className="num" data-label="SGST">{"₹35.10"}</td>
                          <td className="num" data-label="Amount">{"₹460.20"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-t="">{"No GST"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹2,690.00"}</td>
                              <td className="num" data-label="CGST">{"₹0.00"}</td>
                              <td className="num" data-label="SGST">{"₹0.00"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹69,382.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹6,244.38"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹6,244.38"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹84,560.76"}</td>
                            </tr>
                            <tr>
                              <td>{"Credit / debit card · receipt RC-26-27-00059 · 18 Oct 2026"}</td>
                              <td className="num">{"₹10,029.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹74,531.76"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Seventy-four thousand five hundred and thirty-one and seventy-six paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10145">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10145" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10145"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Sheela Nathan"}
                        <br />
                        {"+91 8016065073 · sheela.nathan382@example.com"}
                        <br />
                        {"Reservation FK-10145"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 510 · 1 × PDLX"}
                        <br />
                        {"19 Oct 2026 → 26 Oct 2026 · 7 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 510 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,649.10"}</td>
                          <td className="num" data-label="CGST">{"₹688.42"}</td>
                          <td className="num" data-label="SGST">{"₹688.42"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,025.94"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 510 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,649.10"}</td>
                          <td className="num" data-label="CGST">{"₹688.42"}</td>
                          <td className="num" data-label="SGST">{"₹688.42"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,025.94"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 510 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹7,649.10"}</td>
                          <td className="num" data-label="CGST">{"₹688.42"}</td>
                          <td className="num" data-label="SGST">{"₹688.42"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹9,025.94"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹22,947.30"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹2,065.26"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹2,065.26"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹27,077.82"}</td>
                            </tr>
                            <tr>
                              <td>{"UPI · receipt RC-26-27-9806 · 22 Oct 2026"}</td>
                              <td className="num">{"₹25,000.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹2,077.82"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Two thousand seventy-seven and eighty-two paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10109">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10109" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10109"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Naveen Chirag"}
                        <br />
                        {"+91 6045983550 · naveen.chirag361@example.com"}
                        <br />
                        {"Reservation FK-10109"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 511, 410 · 2 × PDLX"}
                        <br />
                        {"21 Oct 2026 → 26 Oct 2026 · 5 nights"}
                        <br />
                        {"Plan EP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 511 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,555.95"}</td>
                          <td className="num" data-label="CGST">{"₹163.90"}</td>
                          <td className="num" data-label="SGST">{"₹163.90"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,883.75"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PDLX 410 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹6,650.00"}</td>
                          <td className="num" data-label="CGST">{"₹166.25"}</td>
                          <td className="num" data-label="SGST">{"₹166.25"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹6,982.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹13,205.95"}</td>
                              <td className="num" data-label="CGST">{"₹330.15"}</td>
                              <td className="num" data-label="SGST">{"₹330.15"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹13,866.25"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹13,866.25"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Thirteen thousand eight hundred and sixty-six and twenty-five paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10232">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10232" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10232"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mr Jithin Mathew"}
                        <br />
                        {"+91 8033431744 · jithin.mathew255@example.com"}
                        <br />
                        {"Reservation FK-10232"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 514 · 1 × DLXS"}
                        <br />
                        {"21 Oct 2026 → 23 Oct 2026 · 2 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – DLXS 514 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹14,500.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,305.00"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,305.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹17,110.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"SFG · Seafood Grill – dinner"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,990.00"}</td>
                          <td className="num" data-label="CGST">{"₹99.75"}</td>
                          <td className="num" data-label="SGST">{"₹99.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,189.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹3,990.00"}</td>
                              <td className="num" data-label="CGST">{"₹99.75"}</td>
                              <td className="num" data-label="SGST">{"₹99.75"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹14,500.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹1,305.00"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹1,305.00"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹21,299.50"}</td>
                            </tr>
                            <tr>
                              <td>{"OTA prepaid / virtual card · receipt RC-26-27-00115 · 21 Oct 2026"}</td>
                              <td className="num">{"₹34,220.00"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹12,920.50"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Twelve thousand nine hundred and twenty and fifty paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10029">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10029" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10029"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Rekha Krish"}
                        <br />
                        {"+91 7080613480 · rekha.krish26@example.com"}
                        <br />
                        {"Reservation FK-10029"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 515 · 1 × DLXS"}
                        <br />
                        {"18 Oct 2026 → 25 Oct 2026 · 7 nights"}
                        <br />
                        {"Plan CP · billed to Willingdon Logistics LLP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – DLXS 515 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹12,760.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,148.40"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,148.40"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹15,056.80"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"18 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – DLXS 515 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹12,760.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,148.40"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,148.40"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹15,056.80"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – DLXS 515 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹12,760.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,148.40"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,148.40"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹15,056.80"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – DLXS 515 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹12,760.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,148.40"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,148.40"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹15,056.80"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"TRN · Airport transfer (one way)"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,940.00"}</td>
                          <td className="num" data-label="CGST">{"₹174.60"}</td>
                          <td className="num" data-label="SGST">{"₹174.60"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹2,289.20"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹56,480.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹5,083.20"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹5,083.20"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹66,646.40"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹66,646.40"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Sixty-six thousand six hundred and forty-six and forty paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10042">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10042" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10042"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Nandini Jatin"}
                        <br />
                        {"+91 8075690925 · nandini.jatin63@example.com"}
                        <br />
                        {"Reservation FK-10042"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 516 · 1 × DLXS"}
                        <br />
                        {"20 Oct 2026 → 25 Oct 2026 · 5 nights"}
                        <br />
                        {"Plan CP · billed to TechPark Kochi Systems"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – DLXS 516 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,703.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,053.27"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,053.27"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,809.54"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description" data-w2="">{"SPA-02 · Ayurveda massage"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹3,500.00"}</td>
                          <td className="num" data-label="CGST">{"₹315.00"}</td>
                          <td className="num" data-label="SGST">{"₹315.00"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹4,130.00"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – DLXS 516 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"3"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹11,703.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,053.27"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,053.27"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹13,809.54"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"22 Oct 2026"}</td>
                          <td data-label="Description">{"IRD · In-room dining – breakfast"}</td>
                          <td className="num" data-label="Win.">{"2"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹1,070.00"}</td>
                          <td className="num" data-label="CGST">{"₹26.75"}</td>
                          <td className="num" data-label="SGST">{"₹26.75"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹1,123.50"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w="" data-t="">{"5% (CGST 2.5% + SGST 2.5%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹1,070.00"}</td>
                              <td className="num" data-label="CGST">{"₹26.75"}</td>
                              <td className="num" data-label="SGST">{"₹26.75"}</td>
                            </tr>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹26,906.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹2,421.54"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹2,421.54"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹32,872.58"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹32,872.58"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Thirty-two thousand eight hundred and seventy-two and fifty-eight paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10142">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10142" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#final-FK-10142">{"Show the final bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10142"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Maya Mohan"}
                        <br />
                        {"+91 8084504466 · maya.mohan310@example.com"}
                        <br />
                        {"Reservation FK-10142"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 517 · 1 × PRMS"}
                        <br />
                        {"19 Oct 2026 → 22 Oct 2026 · 3 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PRMS 517 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹22,099.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,988.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,988.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹26,076.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PRMS 517 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹22,099.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,988.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,988.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹26,076.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PRMS 517 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹22,099.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,988.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,988.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹26,076.82"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹66,297.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹5,966.73"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹5,966.73"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹78,230.46"}</td>
                            </tr>
                            <tr>
                              <td>{"Credit / debit card · receipt RC-26-27-90142 · 20 Oct 2026"}</td>
                              <td className="num">{"₹78,230.46"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹0.00"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Zero only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-final-FK-10142">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10142" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <a className="btn" href="#bill-FK-10142">{"Show the interim bill"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – FINAL (for check-out)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"FB-26-27-10142"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Mrs Maya Mohan"}
                        <br />
                        {"+91 8084504466 · maya.mohan310@example.com"}
                        <br />
                        {"Reservation FK-10142"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 517 · 1 × PRMS"}
                        <br />
                        {"19 Oct 2026 → 22 Oct 2026 · 3 nights"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"19 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PRMS 517 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹22,099.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,988.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,988.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹26,076.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"20 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PRMS 517 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹22,099.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,988.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,988.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹26,076.82"}</td>
                        </tr>
                        <tr>
                          <td className="nw" data-label="Date" data-w2="" data-t="">{"21 Oct 2026"}</td>
                          <td data-label="Description">{"RM · Room charge – PRMS 517 (incl. breakfast)"}</td>
                          <td className="num" data-label="Win.">{"1"}</td>
                          <td className="num" data-label="Taxable value" data-w2="">{"₹22,099.00"}</td>
                          <td className="num" data-label="CGST" data-w2="">{"₹1,988.91"}</td>
                          <td className="num" data-label="SGST" data-w2="">{"₹1,988.91"}</td>
                          <td className="num" data-label="Amount" data-w2="">{"₹26,076.82"}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td data-label="Rate" data-w2="" data-t="">{"18% (CGST 9% + SGST 9%)"}</td>
                              <td className="num" data-label="Taxable" data-w2="">{"₹66,297.00"}</td>
                              <td className="num" data-label="CGST" data-w2="">{"₹5,966.73"}</td>
                              <td className="num" data-label="SGST" data-w2="">{"₹5,966.73"}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹78,230.46"}</td>
                            </tr>
                            <tr>
                              <td>{"Credit / debit card · receipt RC-26-27-90142 · 20 Oct 2026"}</td>
                              <td className="num">{"₹78,230.46"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Balance due"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹0.00"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Zero only"}
                    </p>
                    <p className="paper__small">{"This bill is a draft for check-out. The GST tax invoice is issued after settlement. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
                <div className="variant v-bill-FK-10250">
                  <div className="paper-bar no-print">
                    <a className="btn pb-back" href="/front-desk/fd-08-guest-folio/#FK-10250" data-leads-to="FD-08">{"← Back to folio"}</a>
                    <span className="fd-muted">{"Print with Ctrl+P · A4"}</span>
                  </div>
                  <article className="paper" data-code="FD-O02">
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
                        <strong>{"GUEST BILL – INTERIM (PRO-FORMA)"}</strong>
                        <br />
                        {"No. "}
                        <strong>{"PF-26-27-10250"}</strong>
                        <br />
                        {"Date 22 Oct 2026"}
                        <br />
                        {"Time 09:42"}
                      </div>
                    </header>
                    <div className="inv-cols">
                      <div>
                        <strong>{"Guest"}</strong>
                        <br />
                        {"Ms Anjali Mohan"}
                        <br />
                        {"+91 9847066421 · anjali.mohan.k@example.com"}
                        <br />
                        {"Reservation FK-10250"}
                      </div>
                      <div>
                        <strong>{"Stay"}</strong>
                        <br />
                        {"Room 204 · 1 × GDLX"}
                        <br />
                        {"22 Oct 2026 → 23 Oct 2026 · 1 night"}
                        <br />
                        {"Plan CP"}
                      </div>
                    </div>
                    <table data-mc="">
                      <thead>
                        <tr>
                          <th>{"Date"}</th>
                          <th>{"Description"}</th>
                          <th className="num" data-flow="fdo02" title="Bill window (FDS-10)">{"Window"}</th>
                          <th className="num">{"Taxable value"}</th>
                          <th className="num">{"CGST"}</th>
                          <th className="num">{"SGST"}</th>
                          <th className="num">{"Amount"}</th>
                        </tr>
                      </thead>
                      <tbody />
                    </table>
                    <div className="inv-cols">
                      <div>
                        <h2>{"Tax summary"}</h2>
                        <table data-mc="">
                          <thead>
                            <tr>
                              <th>{"Rate"}</th>
                              <th className="num">{"Taxable"}</th>
                              <th className="num">{"CGST"}</th>
                              <th className="num">{"SGST"}</th>
                            </tr>
                          </thead>
                          <tbody />
                        </table>
                      </div>
                      <div>
                        <h2>{"Account"}</h2>
                        <table>
                          <tbody>
                            <tr>
                              <td>{"Total posted"}</td>
                              <td className="num">{"₹0.00"}</td>
                            </tr>
                            <tr>
                              <td>{"UPI · receipt RC-26-27-00478 · 22 Oct 2026"}</td>
                              <td className="num">{"₹7,768.95"}</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>{"Credit"}</strong>
                              </td>
                              <td className="num">
                                <strong>{"₹7,768.95"}</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <p>
                      <strong>{"Amount in words:"}</strong>
                      {" Rupees Seven thousand seven hundred and sixty-eight and ninety-five paise only"}
                    </p>
                    <p className="paper__small">{"This interim statement is not a tax invoice. The GST tax invoice is issued at check-out. Room and tax are posted by the night audit; items after the printing time are not included."}</p>
                    <div className="paper__sign">
                      <div>{"Guest signature"}</div>
                      <div>{"For The Aviv Kochi – Front desk"}</div>
                    </div>
                    <footer className="paper__foot">{"Bristow Road, Willingdon Island, Kochi 682 003 · GSTIN 32AACCE1226H1Z9"}</footer>
                  </article>
                </div>
              </div>
              <details className="helpbox">
                <summary>
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#help" />
                  </svg>
                  {" Help for this screen "}
                  <span className="code-chip">{"FD-O02"}</span>
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
