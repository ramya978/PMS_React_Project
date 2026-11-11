// GENERATED from public/front-desk/fd-11-requests-complaints/index.html by scripts/convert_legacy.py.
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
    "href": "/front-desk/fd-11-requests-complaints/fd-11-requests-complaints.css",
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

export default function FrontDeskFd11RequestsComplaints() {
  return (
    <ScreenShell title="Requests & Complaints" sheets={SHEETS} inlineCss={INLINE_CSS}>
      <div data-screen="FD-11" data-code="FD-11" data-static="1" className="legacy-body">
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
                  <Link className="nav__item is-active" data-nav="FD-11" aria-current="page" title="Requests & Complaints" to={"/front-desk/fd-11-requests-complaints"}>
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
            <main className="app__content" id="main" data-code="FD-11" tabIndex="-1">
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
                        <span aria-current="page">{"Requests & Complaints"}</span>
                      </li>
                    </ol>
                  </nav>
                </div>
                <div className="page-header__row">
                  <div className="page-header__text">
                    <h1 className="page-header__title">{"Requests & Complaints"}</h1>
                  </div>
                  <span className="code-chip" title="Screen code">{"FD-11"}</span>
                  <div className="page-header__filters">
                    <div className="hctl">
                      <div className="hsearch">
                        <input className="hsearch__input" id="hs1" type="search" name="q" placeholder="Number, room, guest or text" aria-label="Search requests" autoComplete="off" />
                        <label className="hsearch__ic" htmlFor="hs1" title="Search">
                          <svg className="icon" width="17" height="17" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#search" />
                          </svg>
                          <span className="sr-only">{"Search"}</span>
                        </label>
                      </div>
                      <label className="hfilter__btn" htmlFor="hf2" title="Show or hide the filters">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#filter" />
                        </svg>
                        <span>{"Filter"}</span>
                        <i className="hfilter__dot" aria-hidden="true" />
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#chevron-down" />
                        </svg>
                      </label>
                      <input className="hfilter__tg" type="checkbox" id="hf2" aria-label="Show filters" />
                      <form className="hfilter" method="get" role="search" aria-label="Filter requests and complaints">
                        <span className="hfilter__hic" title="Filter requests and complaints">
                          <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#sliders" />
                          </svg>
                        </span>
                        <div className="hfilter__grid">
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#building" />
                              </svg>
                              {"Department"}
                            </span>
                            <select className="hf-f__c" name="dept">
                              <option>{"All departments"}</option>
                              <option>{"Housekeeping"}</option>
                              <option>{"Engineering"}</option>
                              <option>{"F&B"}</option>
                              <option>{"Front office"}</option>
                              <option>{"Security"}</option>
                              <option>{"Concierge"}</option>
                              <option>{"IT"}</option>
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
                              {"Status"}
                            </span>
                            <select className="hf-f__c" name="status">
                              <option>{"All statuses"}</option>
                              <option>{"Open"}</option>
                              <option>{"Assigned"}</option>
                              <option>{"In progress"}</option>
                              <option>{"Done"}</option>
                              <option>{"Closed"}</option>
                              <option>{"Cancelled"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f ">
                            <span className="hf-f__l">
                              <svg className="icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#flag" />
                              </svg>
                              {"Priority"}
                            </span>
                            <select className="hf-f__c" name="priority">
                              <option>{"All priorities"}</option>
                              <option>{"Low"}</option>
                              <option>{"Normal"}</option>
                              <option>{"High"}</option>
                              <option>{"Urgent"}</option>
                            </select>
                            <svg className="icon hf-f__chev" viewBox="0 0 24 24" aria-hidden="true">
                              <use href="/assets/icons/sprite.svg#chevron-down" />
                            </svg>
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"From"}</span>
                            <input className="hf-f__c" type="date" name="from" defaultValue={"2026-10-01"} />
                          </label>
                          <label className="hf-f">
                            <span className="hf-f__l">{"To"}</span>
                            <input className="hf-f__c" type="date" name="to" defaultValue={"2026-10-22"} />
                          </label>
                        </div>
                        <div className="hfilter__acts">
                          <button className="hfilter__clear" type="reset" title="Clear all filters">
                            <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                              <use href="/assets/icons/sprite.svg#refresh" />
                            </svg>
                            <span>{"Clear"}</span>
                          </button>
                          <label className="hfilter__done" htmlFor="hf2">
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
                    <a className="btn" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R27" data-leads-to="FD-R27">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Report"}
                    </a>
                    <a className="btn" href="/laundry/la-03-guest-laundry-order/#new" data-leads-to="LA-03" title="Guest asks for laundry (e.g. express) – opens a new laundry order">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#package" />
                      </svg>
                      {"Laundry order"}
                    </a>
                    <a className="btn btn--primary" href="#FD-P20-new">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#plus" />
                      </svg>
                      {"New request / complaint"}
                    </a>
                  </div>
                </div>
              </header>
              <div className="rq" data-code="FD-11-list">
                <span className="va" id="f-all" />
                <span className="va" id="f-req" />
                <span className="va" id="f-cmp" />
                <span className="va" id="f-open" />
                <span className="va" id="f-over" />
                <section className="arr-deck" data-code="FD-11-deck" aria-label="Requests and complaints views and filters">
                  <nav className="ltabs rq-tabs" aria-label="Show">
                    <div className="ltabs__list">
                      <a href="#f-all">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#layers" />
                        </svg>
                        {"All"}
                        <span className="ltabs__n">{"11"}</span>
                      </a>
                      <a href="#f-req">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#clipboard-list" />
                        </svg>
                        {"Requests"}
                        <span className="ltabs__n">{"9"}</span>
                      </a>
                      <a href="#f-cmp">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#message-square" />
                        </svg>
                        {"Complaints"}
                        <span className="ltabs__n">{"2"}</span>
                      </a>
                      <a href="#f-open">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#clock" />
                        </svg>
                        {"Open"}
                        <span className="ltabs__n">{"6"}</span>
                      </a>
                      <a href="#f-over">
                        <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#alert" />
                        </svg>
                        {"Overdue / escalated"}
                        <span className="ltabs__n">{"2"}</span>
                      </a>
                    </div>
                    <div className="ltabs__end">
                      <a className="arr-online arr-online--warn" href="#f-over">
                        <svg className="icon" width="15" height="15" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#alert" />
                        </svg>
                        {"2 need attention"}
                      </a>
                    </div>
                  </nav>
                </section>
                <div className="pgw">
                  <div className="s-scroll">
                    <table className="srt dt__table dt--hug" data-code="FD-11-list" style={{"--srt-cols": "auto auto auto auto auto auto auto auto max-content"}} data-mc="">
                      <caption className="sr-only">{"Requests and complaints of today"}</caption>
                      <thead>
                        <tr>
                          <th scope="col">
                            <input className="srt-i srt-a0" type="radio" name="stfd110" id="stfd110-0a" aria-label="Sort by No. · time, lowest or A first" />
                            <input className="srt-i srt-d0" type="radio" name="stfd110" id="stfd110-0d" aria-label="Sort by No. · time, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stfd110-0a">{"No. · time"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stfd110-0d" aria-hidden="true">{"No. · time"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a1" type="radio" name="stfd110" id="stfd110-1a" aria-label="Sort by Room · guest, lowest or A first" />
                            <input className="srt-i srt-d1" type="radio" name="stfd110" id="stfd110-1d" aria-label="Sort by Room · guest, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stfd110-1a">{"Room · guest"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stfd110-1d" aria-hidden="true">{"Room · guest"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a2" type="radio" name="stfd110" id="stfd110-2a" aria-label="Sort by Type · kind, lowest or A first" />
                            <input className="srt-i srt-d2" type="radio" name="stfd110" id="stfd110-2d" aria-label="Sort by Type · kind, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stfd110-2a">{"Type · kind"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stfd110-2d" aria-hidden="true">{"Type · kind"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a3" type="radio" name="stfd110" id="stfd110-3a" aria-label="Sort by Department, lowest or A first" />
                            <input className="srt-i srt-d3" type="radio" name="stfd110" id="stfd110-3d" aria-label="Sort by Department, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stfd110-3a">{"Department"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stfd110-3d" aria-hidden="true">{"Department"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a4" type="radio" name="stfd110" id="stfd110-4a" aria-label="Sort by Priority, lowest or A first" />
                            <input className="srt-i srt-d4" type="radio" name="stfd110" id="stfd110-4d" aria-label="Sort by Priority, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stfd110-4a">{"Priority"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stfd110-4d" aria-hidden="true">{"Priority"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a5" type="radio" name="stfd110" id="stfd110-5a" aria-label="Sort by SLA, lowest or A first" />
                            <input className="srt-i srt-d5" type="radio" name="stfd110" id="stfd110-5d" aria-label="Sort by SLA, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stfd110-5a">{"SLA"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stfd110-5d" aria-hidden="true">{"SLA"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a6" type="radio" name="stfd110" id="stfd110-6a" aria-label="Sort by Status, lowest or A first" />
                            <input className="srt-i srt-d6" type="radio" name="stfd110" id="stfd110-6d" aria-label="Sort by Status, highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stfd110-6a">{"Status"}</label>
                            <label className="srt-l srt-l--d" htmlFor="stfd110-6d" aria-hidden="true">{"Status"}</label>
                          </th>
                          <th scope="col">
                            <input className="srt-i srt-a7" type="radio" name="stfd110" id="stfd110-7a" aria-label="Sort by Esc., lowest or A first" />
                            <input className="srt-i srt-d7" type="radio" name="stfd110" id="stfd110-7d" aria-label="Sort by Esc., highest or Z first" />
                            <label className="srt-l srt-l--a" htmlFor="stfd110-7a">{"Esc."}</label>
                            <label className="srt-l srt-l--d" htmlFor="stfd110-7d" aria-hidden="true">{"Esc."}</label>
                          </th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="rq-r k-req is-open is-over" style={{"--k0": "3", "--k1": "4", "--k2": "8", "--k3": "4", "--k4": "4", "--k5": "7", "--k6": "5", "--k7": "2"}}>
                          <td className="dt__td nw" data-label="No. · time" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <a className="fd-link" href="#FD-11-1">
                              <strong>{"RQ-0422-01"}</strong>
                            </a>
                            <span className="fd-sub">{"08:50"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Room · guest" data-w2="">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"211"}</span>
                            <span className="fd-sub">{"Mr Marco Rossi"}</span>
                          </td>
                          <td className="dt__td" data-label="Type · kind" data-w2="">
                            {"Extra pillow"}
                            <span className="fd-sub">{"Request"}</span>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Housekeeping"}</td>
                          <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                          <td className="dt__td nw" data-label="SLA" data-w2="">
                            <span className="fd-chip fd-chip--bad">{"Overdue 37 min"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Open"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--center num" data-label="Esc." data-m="">{"1"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#FD-11-1">{"Open"}</a>
                          </td>
                        </tr>
                        <tr className="rq-r k-req is-open" style={{"--k0": "4", "--k1": "7", "--k2": "9", "--k3": "4", "--k4": "4", "--k5": "2", "--k6": "4", "--k7": "1"}}>
                          <td className="dt__td nw" data-label="No. · time" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <a className="fd-link" href="#RQ-0422-02">
                              <strong>{"RQ-0422-02"}</strong>
                            </a>
                            <span className="fd-sub">{"09:30"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Room · guest" data-w2="">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"303"}</span>
                            <span className="fd-sub">{"Ms Charlotte Fraser"}</span>
                          </td>
                          <td className="dt__td" data-label="Type · kind" data-w2="">
                            {"Extra towels"}
                            <span className="fd-sub">{"Request"}</span>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Housekeeping"}</td>
                          <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                          <td className="dt__td nw" data-label="SLA" data-w2="">
                            <span className="fd-chip fd-chip--warn">{"3 min left"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"In progress"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--center num" data-label="Esc." data-m="">{"0"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#RQ-0422-02">{"Open"}</a>
                          </td>
                        </tr>
                        <tr className="rq-r k-req" style={{"--k0": "5", "--k1": "8", "--k2": "1", "--k3": "2", "--k4": "1", "--k5": "5", "--k6": "2", "--k7": "1"}}>
                          <td className="dt__td nw" data-label="No. · time" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <a className="fd-link" href="#RQ-0422-03">
                              <strong>{"RQ-0422-03"}</strong>
                            </a>
                            <span className="fd-sub">{"08:20"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Room · guest" data-w2="">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"304"}</span>
                            <span className="fd-sub">{"Mr Oliver Hughes"}</span>
                          </td>
                          <td className="dt__td" data-label="Type · kind" data-w2="">
                            {"AC not cooling"}
                            <span className="fd-sub">{"Request"}</span>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Engineering"}</td>
                          <td className="dt__td nw" data-label="Priority" data-w2="">{"High"}</td>
                          <td className="dt__td nw" data-label="SLA">
                            <span className="fd-chip fd-chip--ok">{"Met"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Done"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--center num" data-label="Esc." data-m="">{"0"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#RQ-0422-03">{"Open"}</a>
                          </td>
                        </tr>
                        <tr className="rq-r k-req is-open" style={{"--k0": "6", "--k1": "3", "--k2": "11", "--k3": "5", "--k4": "4", "--k5": "4", "--k6": "4", "--k7": "1"}}>
                          <td className="dt__td nw" data-label="No. · time" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <a className="fd-link" href="#RQ-0422-04">
                              <strong>{"RQ-0422-04"}</strong>
                            </a>
                            <span className="fd-sub">{"09:35"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Room · guest" data-w2="">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"116"}</span>
                            <span className="fd-sub">{"Mr Amit Bijoy"}</span>
                          </td>
                          <td className="dt__td" data-label="Type · kind" data-w2="">
                            {"Wi-Fi help"}
                            <span className="fd-sub">{"Request"}</span>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">{"IT"}</td>
                          <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                          <td className="dt__td nw" data-label="SLA" data-w2="">
                            <span className="fd-chip fd-chip--warn">{"8 min left"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill pill--occupied">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#play" />
                              </svg>
                              {"In progress"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--center num" data-label="Esc." data-m="">{"0"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#RQ-0422-04">{"Open"}</a>
                          </td>
                        </tr>
                        <tr className="rq-r k-req" style={{"--k0": "7", "--k1": "6", "--k2": "6", "--k3": "1", "--k4": "4", "--k5": "5", "--k6": "2", "--k7": "1"}}>
                          <td className="dt__td nw" data-label="No. · time" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <a className="fd-link" href="#RQ-0422-05">
                              <strong>{"RQ-0422-05"}</strong>
                            </a>
                            <span className="fd-sub">{"09:15"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Room · guest" data-w2="">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"213"}</span>
                            <span className="fd-sub">{"Mr Omar Al Farsi"}</span>
                          </td>
                          <td className="dt__td" data-label="Type · kind" data-w2="">
                            {"Cab / taxi"}
                            <span className="fd-sub">{"Request"}</span>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Concierge"}</td>
                          <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                          <td className="dt__td nw" data-label="SLA">
                            <span className="fd-chip fd-chip--ok">{"Met"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Done"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--center num" data-label="Esc." data-m="">{"0"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#RQ-0422-05">{"Open"}</a>
                          </td>
                        </tr>
                        <tr className="rq-r k-req" style={{"--k0": "8", "--k1": "11", "--k2": "4", "--k3": "4", "--k4": "4", "--k5": "5", "--k6": "2", "--k7": "1"}}>
                          <td className="dt__td nw" data-label="No. · time" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <a className="fd-link" href="#RQ-0422-06">
                              <strong>{"RQ-0422-06"}</strong>
                            </a>
                            <span className="fd-sub">{"08:30"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Room · guest" data-w2="">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"507"}</span>
                            <span className="fd-sub">{"Mrs Pooja Kunal"}</span>
                          </td>
                          <td className="dt__td" data-label="Type · kind" data-w2="">
                            {"Baby cot"}
                            <span className="fd-sub">{"Request"}</span>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Housekeeping"}</td>
                          <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                          <td className="dt__td nw" data-label="SLA">
                            <span className="fd-chip fd-chip--ok">{"Met"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Done"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--center num" data-label="Esc." data-m="">{"0"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#RQ-0422-06">{"Open"}</a>
                          </td>
                        </tr>
                        <tr className="rq-r k-req" style={{"--k0": "9", "--k1": "1", "--k2": "7", "--k3": "3", "--k4": "5", "--k5": "5", "--k6": "2", "--k7": "1"}}>
                          <td className="dt__td nw" data-label="No. · time" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <a className="fd-link" href="#RQ-0422-07">
                              <strong>{"RQ-0422-07"}</strong>
                            </a>
                            <span className="fd-sub">{"07:45"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Room · guest" data-w2="">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"105"}</span>
                            <span className="fd-sub">{"Ms Noura Al Saud"}</span>
                          </td>
                          <td className="dt__td" data-label="Type · kind" data-w2="">
                            {"Doctor on call"}
                            <span className="fd-sub">{"Request"}</span>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Front office"}</td>
                          <td className="dt__td nw" data-label="Priority" data-w2="">{"Urgent"}</td>
                          <td className="dt__td nw" data-label="SLA">
                            <span className="fd-chip fd-chip--ok">{"Met"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ready">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#check-circle" />
                              </svg>
                              {"Done"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--center num" data-label="Esc." data-m="">{"0"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#RQ-0422-07">{"Open"}</a>
                          </td>
                        </tr>
                        <tr className="rq-r k-req is-open" style={{"--k0": "10", "--k1": "5", "--k2": "2", "--k3": "1", "--k4": "4", "--k5": "3", "--k6": "5", "--k7": "1"}}>
                          <td className="dt__td nw" data-label="No. · time" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <a className="fd-link" href="#RQ-0422-08">
                              <strong>{"RQ-0422-08"}</strong>
                            </a>
                            <span className="fd-sub">{"09:20"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Room · guest" data-w2="">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"212"}</span>
                            <span className="fd-sub">{"Mr Ethan Anderson"}</span>
                          </td>
                          <td className="dt__td" data-label="Type · kind" data-w2="">
                            {"Airport transfer"}
                            <span className="fd-sub">{"Request"}</span>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Concierge"}</td>
                          <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                          <td className="dt__td nw" data-label="SLA" data-w2="">
                            <span className="fd-chip fd-chip--warn">{"78 min left"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Open"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--center num" data-label="Esc." data-m="">{"0"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#RQ-0422-08">{"Open"}</a>
                          </td>
                        </tr>
                        <tr className="rq-r k-req is-open" style={{"--k0": "11", "--k1": "2", "--k2": "3", "--k3": "1", "--k4": "4", "--k5": "1", "--k6": "5", "--k7": "1"}}>
                          <td className="dt__td nw" data-label="No. · time" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <a className="fd-link" href="#RQ-0422-09">
                              <strong>{"RQ-0422-09"}</strong>
                            </a>
                            <span className="fd-sub">{"09:30"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Room · guest" data-w2="">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"113"}</span>
                            <span className="fd-sub">{"Mrs Isha Vihaan"}</span>
                          </td>
                          <td className="dt__td" data-label="Type · kind" data-w2="">
                            {"Ayurveda booking"}
                            <span className="fd-sub">{"Request"}</span>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Concierge"}</td>
                          <td className="dt__td nw" data-label="Priority" data-w2="">{"Normal"}</td>
                          <td className="dt__td nw" data-label="SLA" data-w2="">
                            <span className="fd-chip fd-chip--warn">{"18 min left"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--tentative">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#clock" />
                              </svg>
                              {"Open"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--center num" data-label="Esc." data-m="">{"0"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#RQ-0422-09">{"Open"}</a>
                          </td>
                        </tr>
                        <tr className="rq-r k-cmp" style={{"--k0": "1", "--k1": "9", "--k2": "10", "--k3": "3", "--k4": "2", "--k5": "5", "--k6": "1", "--k7": "1"}}>
                          <td className="dt__td nw" data-label="No. · time" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <a className="fd-link" href="#CP-0422-01">
                              <strong>{"CP-0422-01"}</strong>
                            </a>
                            <span className="fd-sub">{"07:10"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Room · guest" data-w2="">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"306"}</span>
                            <span className="fd-sub">{"Ms Jyoti Kabir"}</span>
                          </td>
                          <td className="dt__td" data-label="Type · kind" data-w2="">
                            {"Noise"}
                            <span className="fd-sub">{"Complaint"}</span>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Front office"}</td>
                          <td className="dt__td nw" data-label="Priority" data-w2="">{"Major"}</td>
                          <td className="dt__td nw" data-label="SLA">
                            <span className="fd-chip fd-chip--ok">{"Met"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-s="">
                            <span className="pill pill--ooo">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#lock" />
                              </svg>
                              {"Closed"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--center num" data-label="Esc." data-m="">{"0"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#CP-0422-01">{"Open"}</a>
                          </td>
                        </tr>
                        <tr className="rq-r k-cmp is-open is-over" style={{"--k0": "2", "--k1": "10", "--k2": "5", "--k3": "3", "--k4": "3", "--k5": "6", "--k6": "3", "--k7": "3"}}>
                          <td className="dt__td nw" data-label="No. · time" data-w2="" data-t="">
                            <input className="mc-more" type="checkbox" aria-label="Show all details" />
                            <a className="fd-link" href="#CP-0422-02">
                              <strong>{"CP-0422-02"}</strong>
                            </a>
                            <span className="fd-sub">{"09:05"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Room · guest" data-w2="">
                            <span className="fd-rm fd-rm--OC" title="Occupied clean">{"504"}</span>
                            <span className="fd-sub">{"Dr Claire Dubois"}</span>
                          </td>
                          <td className="dt__td" data-label="Type · kind" data-w2="">
                            {"Billing"}
                            <span className="fd-sub">{"Complaint"}</span>
                          </td>
                          <td className="dt__td" data-label="Department" data-w2="">{"Front office"}</td>
                          <td className="dt__td nw" data-label="Priority" data-w2="">{"Minor"}</td>
                          <td className="dt__td nw" data-label="SLA" data-w2="">
                            <span className="fd-chip fd-chip--bad">{"Overdue 22 min"}</span>
                          </td>
                          <td className="dt__td nw" data-label="Status" data-w2="" data-s="">
                            <span className="pill pill--cancelled">
                              <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <use href="/assets/icons/sprite.svg#alert" />
                              </svg>
                              {"Escalated"}
                            </span>
                          </td>
                          <td className="dt__td dt__td--center num" data-label="Esc." data-m="">{"2"}</td>
                          <td className="dt__td nw" data-a="">
                            <a className="btn" href="#CP-0422-02">{"Open"}</a>
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
                          {" of 11"}
                        </span>
                        <span>
                          {"Showing "}
                          <b>{"11–11"}</b>
                          {" of 11"}
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
                          <b>{"1–11"}</b>
                          {" of 11"}
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
                          <b>{"1–11"}</b>
                          {" of 11"}
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
                          <b>{"1–11"}</b>
                          {" of 11"}
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
                          <b>{"1–11"}</b>
                          {" of 11"}
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
              </div>
              <div className="s-note">
                <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#info" />
                </svg>
                <span>{"Escalation follows FDS-17: a complaint that is not closed in 15 minutes goes to the Duty Manager, in 30 minutes to the Front Office Manager, in 120 minutes to the General Manager (FD-X06). A complaint cannot be closed without a resolution and the guest feedback."}</span>
              </div>
              <div className="modal modal--lg" id="FD-P20-new" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-new-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-new-t">{"New request / complaint"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <label className="field__label" htmlFor="f4">
                          {"Room / guest "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f4" name="guest" required={true}>
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
                            <option value="Lobby (not a room)">{"Lobby (not a room)"}</option>
                            <option value="Travancore Restaurant (not a room)">{"Travancore Restaurant (not a room)"}</option>
                            <option value="Swimming pool (not a room)">{"Swimming pool (not a room)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"In-house guests, or a place that is not a room"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f5">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f5" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f6">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f6" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f7">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f7" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f8">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f8" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f9">{"Due by"}</label>
                        <input className="field__input" id="f9" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f10">
                          <input id="f10" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f11">
                          <input id="f11" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f12">{"Attachment"}</label>
                        <input className="field__input" id="f12" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10082" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10082-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10082-t">{"Request / complaint – Mr Rohit Neil"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 101 – Mr Rohit Neil (FK-10082)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f15">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f15" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f16">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f16" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f17">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f17" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f18">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f18" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f19">{"Due by"}</label>
                        <input className="field__input" id="f19" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f20">
                          <input id="f20" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f21">
                          <input id="f21" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f22">{"Attachment"}</label>
                        <input className="field__input" id="f22" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10058" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10058-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10058-t">{"Request / complaint – Mr Shibu Krish"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 104 – Mr Shibu Krish (FK-10058)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f25">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f25" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f26">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f26" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f27">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f27" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f28">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f28" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f29">{"Due by"}</label>
                        <input className="field__input" id="f29" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f30">
                          <input id="f30" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f31">
                          <input id="f31" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f32">{"Attachment"}</label>
                        <input className="field__input" id="f32" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10056" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10056-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10056-t">{"Request / complaint – Ms Noura Al Saud"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 105 – Ms Noura Al Saud (FK-10056)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f35">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f35" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f36">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f36" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f37">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f37" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f38">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f38" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f39">{"Due by"}</label>
                        <input className="field__input" id="f39" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f40">
                          <input id="f40" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f41">
                          <input id="f41" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f42">{"Attachment"}</label>
                        <input className="field__input" id="f42" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10002" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10002-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10002-t">{"Request / complaint – Mrs Jyoti Jatin"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 107 – Mrs Jyoti Jatin (FK-10002)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f45">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f45" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f46">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f46" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f47">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f47" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f48">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f48" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f49">{"Due by"}</label>
                        <input className="field__input" id="f49" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f50">
                          <input id="f50" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f51">
                          <input id="f51" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f52">{"Attachment"}</label>
                        <input className="field__input" id="f52" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10074" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10074-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10074-t">{"Request / complaint – Mrs Shruti Shaan"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 108 – Mrs Shruti Shaan (FK-10074)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f55">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f55" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f56">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f56" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f57">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f57" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f58">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f58" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f59">{"Due by"}</label>
                        <input className="field__input" id="f59" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f60">
                          <input id="f60" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f61">
                          <input id="f61" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f62">{"Attachment"}</label>
                        <input className="field__input" id="f62" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10035" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10035-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10035-t">{"Request / complaint – Mrs Priya Kabir"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 110, 119, 109 – Mrs Priya Kabir (FK-10035)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f65">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f65" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f66">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f66" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f67">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f67" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f68">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f68" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f69">{"Due by"}</label>
                        <input className="field__input" id="f69" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f70">
                          <input id="f70" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f71">
                          <input id="f71" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f72">{"Attachment"}</label>
                        <input className="field__input" id="f72" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10165" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10165-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10165-t">{"Request / complaint – Mrs Isha Vihaan"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 113 – Mrs Isha Vihaan (FK-10165)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f75">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f75" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f76">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f76" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f77">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f77" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f78">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f78" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f79">{"Due by"}</label>
                        <input className="field__input" id="f79" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f80">
                          <input id="f80" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f81">
                          <input id="f81" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f82">{"Attachment"}</label>
                        <input className="field__input" id="f82" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10050" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10050-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10050-t">{"Request / complaint – Mrs Fatima Al Mansoori"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 114 – Mrs Fatima Al Mansoori (FK-10050)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f85">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f85" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f86">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f86" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f87">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f87" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f88">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f88" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f89">{"Due by"}</label>
                        <input className="field__input" id="f89" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f90">
                          <input id="f90" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f91">
                          <input id="f91" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f92">{"Attachment"}</label>
                        <input className="field__input" id="f92" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10118" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10118-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10118-t">{"Request / complaint – Ms Isha Dhruv"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 115 – Ms Isha Dhruv (FK-10118)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f95">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f95" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f96">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f96" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f97">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f97" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f98">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f98" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f99">{"Due by"}</label>
                        <input className="field__input" id="f99" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f100">
                          <input id="f100" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f101">
                          <input id="f101" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f102">{"Attachment"}</label>
                        <input className="field__input" id="f102" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10011" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10011-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10011-t">{"Request / complaint – Mr Amit Bijoy"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 116 – Mr Amit Bijoy (FK-10011)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f105">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f105" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f106">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f106" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f107">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f107" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f108">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f108" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f109">{"Due by"}</label>
                        <input className="field__input" id="f109" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f110">
                          <input id="f110" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f111">
                          <input id="f111" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f112">{"Attachment"}</label>
                        <input className="field__input" id="f112" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10101" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10101-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10101-t">{"Request / complaint – Ms Kavita Siddharth"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 201 – Ms Kavita Siddharth (FK-10101)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f115">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f115" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f116">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f116" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f117">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f117" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f118">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f118" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f119">{"Due by"}</label>
                        <input className="field__input" id="f119" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f120">
                          <input id="f120" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f121">
                          <input id="f121" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f122">{"Attachment"}</label>
                        <input className="field__input" id="f122" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10084" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10084-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10084-t">{"Request / complaint – Dr Aswathy Vijay"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 202 – Dr Aswathy Vijay (FK-10084)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f125">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f125" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f126">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f126" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f127">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f127" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f128">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f128" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f129">{"Due by"}</label>
                        <input className="field__input" id="f129" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f130">
                          <input id="f130" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f131">
                          <input id="f131" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f132">{"Attachment"}</label>
                        <input className="field__input" id="f132" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10108" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10108-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10108-t">{"Request / complaint – Ms Anna Schneider"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 205 – Ms Anna Schneider (FK-10108)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f135">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f135" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f136">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f136" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f137">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f137" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f138">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f138" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f139">{"Due by"}</label>
                        <input className="field__input" id="f139" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f140">
                          <input id="f140" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f141">
                          <input id="f141" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f142">{"Attachment"}</label>
                        <input className="field__input" id="f142" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10104" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10104-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10104-t">{"Request / complaint – Mr Amit Chirag"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 207 – Mr Amit Chirag (FK-10104)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f145">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f145" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f146">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f146" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f147">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f147" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f148">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f148" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f149">{"Due by"}</label>
                        <input className="field__input" id="f149" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f150">
                          <input id="f150" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f151">
                          <input id="f151" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f152">{"Attachment"}</label>
                        <input className="field__input" id="f152" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10033" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10033-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10033-t">{"Request / complaint – Ms Elsa Lindberg"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 208 – Ms Elsa Lindberg (FK-10033)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f155">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f155" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f156">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f156" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f157">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f157" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f158">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f158" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f159">{"Due by"}</label>
                        <input className="field__input" id="f159" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f160">
                          <input id="f160" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f161">
                          <input id="f161" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f162">{"Attachment"}</label>
                        <input className="field__input" id="f162" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10170" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10170-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10170-t">{"Request / complaint – Mr Marco Rossi"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 211 – Mr Marco Rossi (FK-10170)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f165">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f165" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f166">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f166" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f167">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f167" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f168">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f168" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f169">{"Due by"}</label>
                        <input className="field__input" id="f169" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f170">
                          <input id="f170" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f171">
                          <input id="f171" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f172">{"Attachment"}</label>
                        <input className="field__input" id="f172" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10162" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10162-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10162-t">{"Request / complaint – Mr Ethan Anderson"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 212 – Mr Ethan Anderson (FK-10162)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f175">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f175" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f176">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f176" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f177">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f177" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f178">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f178" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f179">{"Due by"}</label>
                        <input className="field__input" id="f179" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f180">
                          <input id="f180" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f181">
                          <input id="f181" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f182">{"Attachment"}</label>
                        <input className="field__input" id="f182" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10140" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10140-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10140-t">{"Request / complaint – Mr Omar Al Farsi"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 213 – Mr Omar Al Farsi (FK-10140)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f185">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f185" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f186">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f186" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f187">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f187" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f188">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f188" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f189">{"Due by"}</label>
                        <input className="field__input" id="f189" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f190">
                          <input id="f190" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f191">
                          <input id="f191" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f192">{"Attachment"}</label>
                        <input className="field__input" id="f192" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10193" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10193-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10193-t">{"Request / complaint – Mrs Sindhu Wilson"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 216, 305 – Mrs Sindhu Wilson (FK-10193)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f195">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f195" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f196">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f196" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f197">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f197" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f198">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f198" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f199">{"Due by"}</label>
                        <input className="field__input" id="f199" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f200">
                          <input id="f200" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f201">
                          <input id="f201" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f202">{"Attachment"}</label>
                        <input className="field__input" id="f202" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10205" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10205-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10205-t">{"Request / complaint – Dr Anjali Rahman"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 218 – Dr Anjali Rahman (FK-10205)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f205">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f205" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f206">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f206" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f207">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f207" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f208">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f208" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f209">{"Due by"}</label>
                        <input className="field__input" id="f209" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f210">
                          <input id="f210" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f211">
                          <input id="f211" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f212">{"Attachment"}</label>
                        <input className="field__input" id="f212" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-t">{"Request / complaint – Mr Ajay Jatin"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 219, 112, 103 – Mr Ajay Jatin (FK-10008)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f215">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f215" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f216">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f216" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f217">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f217" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f218">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f218" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f219">{"Due by"}</label>
                        <input className="field__input" id="f219" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f220">
                          <input id="f220" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f221">
                          <input id="f221" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f222">{"Attachment"}</label>
                        <input className="field__input" id="f222" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10069" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10069-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10069-t">{"Request / complaint – Mr Biju George"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 301 – Mr Biju George (FK-10069)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f225">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f225" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f226">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f226" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f227">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f227" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f228">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f228" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f229">{"Due by"}</label>
                        <input className="field__input" id="f229" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f230">
                          <input id="f230" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f231">
                          <input id="f231" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f232">{"Attachment"}</label>
                        <input className="field__input" id="f232" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10031" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10031-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10031-t">{"Request / complaint – Ms Charlotte Fraser"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 303 – Ms Charlotte Fraser (FK-10031)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f235">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f235" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f236">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f236" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f237">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f237" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f238">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f238" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f239">{"Due by"}</label>
                        <input className="field__input" id="f239" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f240">
                          <input id="f240" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f241">
                          <input id="f241" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f242">{"Attachment"}</label>
                        <input className="field__input" id="f242" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10143" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10143-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10143-t">{"Request / complaint – Mr Oliver Hughes"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 304 – Mr Oliver Hughes (FK-10143)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f245">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f245" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f246">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f246" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f247">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f247" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f248">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f248" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f249">{"Due by"}</label>
                        <input className="field__input" id="f249" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f250">
                          <input id="f250" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f251">
                          <input id="f251" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f252">{"Attachment"}</label>
                        <input className="field__input" id="f252" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10105" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10105-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10105-t">{"Request / complaint – Ms Jyoti Kabir"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 306 – Ms Jyoti Kabir (FK-10105)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f255">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f255" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f256">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f256" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f257">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f257" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f258">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f258" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f259">{"Due by"}</label>
                        <input className="field__input" id="f259" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f260">
                          <input id="f260" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f261">
                          <input id="f261" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f262">{"Attachment"}</label>
                        <input className="field__input" id="f262" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10061" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10061-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10061-t">{"Request / complaint – Ms Nandini Rishi"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 309 – Ms Nandini Rishi (FK-10061)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f265">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f265" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f266">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f266" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f267">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f267" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f268">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f268" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f269">{"Due by"}</label>
                        <input className="field__input" id="f269" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f270">
                          <input id="f270" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f271">
                          <input id="f271" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f272">{"Attachment"}</label>
                        <input className="field__input" id="f272" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10103" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10103-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10103-t">{"Request / complaint – Mr Prasad Pavan"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 310 – Mr Prasad Pavan (FK-10103)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f275">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f275" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f276">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f276" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f277">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f277" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f278">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f278" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f279">{"Due by"}</label>
                        <input className="field__input" id="f279" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f280">
                          <input id="f280" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f281">
                          <input id="f281" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f282">{"Attachment"}</label>
                        <input className="field__input" id="f282" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10106" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10106-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10106-t">{"Request / complaint – Ms Nandini Jatin"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 313 – Ms Nandini Jatin (FK-10106)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f285">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f285" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f286">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f286" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f287">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f287" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f288">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f288" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f289">{"Due by"}</label>
                        <input className="field__input" id="f289" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f290">
                          <input id="f290" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f291">
                          <input id="f291" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f292">{"Attachment"}</label>
                        <input className="field__input" id="f292" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10102" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10102-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10102-t">{"Request / complaint – Ms Remya Kurian"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 319 – Ms Remya Kurian (FK-10102)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f295">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f295" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f296">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f296" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f297">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f297" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f298">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f298" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f299">{"Due by"}</label>
                        <input className="field__input" id="f299" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f300">
                          <input id="f300" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f301">
                          <input id="f301" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f302">{"Attachment"}</label>
                        <input className="field__input" id="f302" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10197" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10197-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10197-t">{"Request / complaint – Mr Rahul Philip"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 401 – Mr Rahul Philip (FK-10197)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f305">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f305" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f306">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f306" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f307">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f307" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f308">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f308" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f309">{"Due by"}</label>
                        <input className="field__input" id="f309" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f310">
                          <input id="f310" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f311">
                          <input id="f311" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f312">{"Attachment"}</label>
                        <input className="field__input" id="f312" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10048" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10048-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10048-t">{"Request / complaint – Mrs Kavita Siddharth"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 402 – Mrs Kavita Siddharth (FK-10048)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f315">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f315" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f316">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f316" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f317">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f317" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f318">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f318" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f319">{"Due by"}</label>
                        <input className="field__input" id="f319" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f320">
                          <input id="f320" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f321">
                          <input id="f321" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f322">{"Attachment"}</label>
                        <input className="field__input" id="f322" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10180" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10180-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10180-t">{"Request / complaint – Mr Luc Moreau"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 403, 509 – Mr Luc Moreau (FK-10180)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f325">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f325" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f326">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f326" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f327">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f327" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f328">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f328" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f329">{"Due by"}</label>
                        <input className="field__input" id="f329" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f330">
                          <input id="f330" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f331">
                          <input id="f331" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f332">{"Attachment"}</label>
                        <input className="field__input" id="f332" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10187" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10187-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10187-t">{"Request / complaint – Mrs Kavita Ranjan"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 406, 503, 404 – Mrs Kavita Ranjan (FK-10187)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f335">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f335" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f336">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f336" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f337">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f337" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f338">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f338" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f339">{"Due by"}</label>
                        <input className="field__input" id="f339" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f340">
                          <input id="f340" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f341">
                          <input id="f341" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f342">{"Attachment"}</label>
                        <input className="field__input" id="f342" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10120" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10120-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10120-t">{"Request / complaint – Ms Ayesha Sahil"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 407 – Ms Ayesha Sahil (FK-10120)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f345">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f345" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f346">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f346" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f347">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f347" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f348">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f348" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f349">{"Due by"}</label>
                        <input className="field__input" id="f349" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f350">
                          <input id="f350" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f351">
                          <input id="f351" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f352">{"Attachment"}</label>
                        <input className="field__input" id="f352" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10161" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10161-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10161-t">{"Request / complaint – Ms Lakshmi Mathew"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 408 – Ms Lakshmi Mathew (FK-10161)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f355">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f355" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f356">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f356" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f357">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f357" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f358">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f358" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f359">{"Due by"}</label>
                        <input className="field__input" id="f359" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f360">
                          <input id="f360" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f361">
                          <input id="f361" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f362">{"Attachment"}</label>
                        <input className="field__input" id="f362" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10200" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10200-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10200-t">{"Request / complaint – Mr Oliver Hughes"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 409 – Mr Oliver Hughes (FK-10200)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f365">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f365" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f366">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f366" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f367">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f367" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f368">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f368" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f369">{"Due by"}</label>
                        <input className="field__input" id="f369" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f370">
                          <input id="f370" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f371">
                          <input id="f371" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f372">{"Attachment"}</label>
                        <input className="field__input" id="f372" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10172" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10172-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10172-t">{"Request / complaint – Ms Shruti Siddharth"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 415, 316 – Ms Shruti Siddharth (FK-10172)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f375">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f375" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f376">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f376" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f377">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f377" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f378">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f378" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f379">{"Due by"}</label>
                        <input className="field__input" id="f379" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f380">
                          <input id="f380" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f381">
                          <input id="f381" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f382">{"Attachment"}</label>
                        <input className="field__input" id="f382" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10123" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10123-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10123-t">{"Request / complaint – Mrs Isha Neil"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 416, 505 – Mrs Isha Neil (FK-10123)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f385">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f385" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f386">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f386" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f387">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f387" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f388">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f388" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f389">{"Due by"}</label>
                        <input className="field__input" id="f389" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f390">
                          <input id="f390" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f391">
                          <input id="f391" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f392">{"Attachment"}</label>
                        <input className="field__input" id="f392" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10203" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10203-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10203-t">{"Request / complaint – Mrs Kavita Siddharth"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 417 – Mrs Kavita Siddharth (FK-10203)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f395">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f395" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f396">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f396" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f397">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f397" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f398">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f398" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f399">{"Due by"}</label>
                        <input className="field__input" id="f399" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f400">
                          <input id="f400" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f401">
                          <input id="f401" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f402">{"Attachment"}</label>
                        <input className="field__input" id="f402" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10178" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10178-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10178-t">{"Request / complaint – Mr Prasad Manav"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 501 – Mr Prasad Manav (FK-10178)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f405">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f405" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f406">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f406" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f407">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f407" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f408">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f408" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f409">{"Due by"}</label>
                        <input className="field__input" id="f409" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f410">
                          <input id="f410" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f411">
                          <input id="f411" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f412">{"Attachment"}</label>
                        <input className="field__input" id="f412" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10027" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10027-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10027-t">{"Request / complaint – Dr Claire Dubois"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 504 – Dr Claire Dubois (FK-10027)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f415">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f415" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f416">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f416" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f417">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f417" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f418">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f418" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f419">{"Due by"}</label>
                        <input className="field__input" id="f419" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f420">
                          <input id="f420" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f421">
                          <input id="f421" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f422">{"Attachment"}</label>
                        <input className="field__input" id="f422" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10159" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10159-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10159-t">{"Request / complaint – Dr Ayesha Chirag"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 506, 318 – Dr Ayesha Chirag (FK-10159)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f425">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f425" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f426">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f426" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f427">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f427" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f428">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f428" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f429">{"Due by"}</label>
                        <input className="field__input" id="f429" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f430">
                          <input id="f430" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f431">
                          <input id="f431" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f432">{"Attachment"}</label>
                        <input className="field__input" id="f432" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10010" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10010-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10010-t">{"Request / complaint – Mrs Pooja Kunal"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 507 – Mrs Pooja Kunal (FK-10010)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f435">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f435" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f436">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f436" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f437">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f437" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f438">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f438" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f439">{"Due by"}</label>
                        <input className="field__input" id="f439" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f440">
                          <input id="f440" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f441">
                          <input id="f441" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f442">{"Attachment"}</label>
                        <input className="field__input" id="f442" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10097" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10097-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10097-t">{"Request / complaint – Ms Sindhu Rahman"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 508, 217 – Ms Sindhu Rahman (FK-10097)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f445">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f445" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f446">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f446" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f447">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f447" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f448">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f448" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f449">{"Due by"}</label>
                        <input className="field__input" id="f449" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f450">
                          <input id="f450" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f451">
                          <input id="f451" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f452">{"Attachment"}</label>
                        <input className="field__input" id="f452" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10145" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10145-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10145-t">{"Request / complaint – Ms Sheela Nathan"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 510 – Ms Sheela Nathan (FK-10145)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f455">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f455" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f456">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f456" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f457">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f457" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f458">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f458" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f459">{"Due by"}</label>
                        <input className="field__input" id="f459" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f460">
                          <input id="f460" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f461">
                          <input id="f461" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f462">{"Attachment"}</label>
                        <input className="field__input" id="f462" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10109" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10109-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10109-t">{"Request / complaint – Mr Naveen Chirag"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 511, 410 – Mr Naveen Chirag (FK-10109)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f465">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f465" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f466">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f466" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f467">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f467" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f468">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f468" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f469">{"Due by"}</label>
                        <input className="field__input" id="f469" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f470">
                          <input id="f470" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f471">
                          <input id="f471" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f472">{"Attachment"}</label>
                        <input className="field__input" id="f472" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10232" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10232-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10232-t">{"Request / complaint – Mr Jithin Mathew"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 514 – Mr Jithin Mathew (FK-10232)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f475">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f475" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f476">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f476" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f477">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f477" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f478">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f478" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f479">{"Due by"}</label>
                        <input className="field__input" id="f479" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f480">
                          <input id="f480" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f481">
                          <input id="f481" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f482">{"Attachment"}</label>
                        <input className="field__input" id="f482" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10029" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10029-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10029-t">{"Request / complaint – Mrs Rekha Krish"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 515 – Mrs Rekha Krish (FK-10029)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f485">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f485" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f486">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f486" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f487">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f487" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f488">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f488" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f489">{"Due by"}</label>
                        <input className="field__input" id="f489" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f490">
                          <input id="f490" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f491">
                          <input id="f491" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f492">{"Attachment"}</label>
                        <input className="field__input" id="f492" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10042" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10042-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10042-t">{"Request / complaint – Ms Nandini Jatin"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 516 – Ms Nandini Jatin (FK-10042)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f495">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f495" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f496">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f496" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f497">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f497" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f498">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f498" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f499">{"Due by"}</label>
                        <input className="field__input" id="f499" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f500">
                          <input id="f500" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f501">
                          <input id="f501" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f502">{"Attachment"}</label>
                        <input className="field__input" id="f502" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--lg" id="FD-P20-FK-10142" data-code="FD-P20" role="dialog" aria-modal="true" aria-labelledby="FD-P20-FK-10142-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#raised" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-P20-FK-10142-t">{"Request / complaint – Mrs Maya Mohan"}</h2>
                      <p className="modal__desc">{"The department is told at once; the SLA timer starts now. Complaints escalate by FDS-17 (FD-X06)."}</p>
                    </div>
                    <a className="modal__close" href="#main" aria-label="Close">
                      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#x" />
                      </svg>
                    </a>
                  </div>
                  <div className="modal__body">
                    <div className="s-grid2">
                      <fieldset className="field fd-fieldset">
                        <legend className="field__label">
                          {"Kind "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </legend>
                        <div className="row fd-multi">
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Request" required={true} defaultChecked={true} />
                            <span className="check__box" />
                            {"Request"}
                          </label>
                          <label className="check check--radio">
                            <input className="check__input" type="radio" name="kind" value="Complaint" required={true} />
                            <span className="check__box" />
                            {"Complaint"}
                          </label>
                        </div>
                      </fieldset>
                      <div className="field">
                        <span className="field__label">{"Room / guest"}</span>
                        <div className="fd-display">{"Room 517 – Mrs Maya Mohan (FK-10142)"}</div>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f505">
                          {"Type "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f505" name="type" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Request – Extra towels (Housekeeping, 15 min)">{"Request – Extra towels (Housekeeping, 15 min)"}</option>
                            <option value="Request – Extra pillow (Housekeeping, 15 min)">{"Request – Extra pillow (Housekeeping, 15 min)"}</option>
                            <option value="Request – Iron and ironing board (Housekeeping, 20 min)">{"Request – Iron and ironing board (Housekeeping, 20 min)"}</option>
                            <option value="Request – Baby cot (Housekeeping, 30 min)">{"Request – Baby cot (Housekeeping, 30 min)"}</option>
                            <option value="Request – Hair dryer (Housekeeping, 15 min)">{"Request – Hair dryer (Housekeeping, 15 min)"}</option>
                            <option value="Request – Room cleaning (Housekeeping, 30 min)">{"Request – Room cleaning (Housekeeping, 30 min)"}</option>
                            <option value="Request – AC not cooling (Engineering, 30 min)">{"Request – AC not cooling (Engineering, 30 min)"}</option>
                            <option value="Request – Wi-Fi help (IT, 15 min)">{"Request – Wi-Fi help (IT, 15 min)"}</option>
                            <option value="Request – Cab / taxi (Concierge, 15 min)">{"Request – Cab / taxi (Concierge, 15 min)"}</option>
                            <option value="Request – Airport transfer (Concierge, 30 min)">{"Request – Airport transfer (Concierge, 30 min)"}</option>
                            <option value="Request – Doctor on call (Front office, 15 min)">{"Request – Doctor on call (Front office, 15 min)"}</option>
                            <option value="Request – Ayurveda booking (Concierge, 30 min)">{"Request – Ayurveda booking (Concierge, 30 min)"}</option>
                            <option value="Request – Repair (Engineering, 30 min)">{"Request – Repair (Engineering, 30 min)"}</option>
                            <option value="Request – Wake-up call (Front office, 5 min)">{"Request – Wake-up call (Front office, 5 min)"}</option>
                            <option value="Complaint – Room (Major, Housekeeping)">{"Complaint – Room (Major, Housekeeping)"}</option>
                            <option value="Complaint – Noise (Major, Front office)">{"Complaint – Noise (Major, Front office)"}</option>
                            <option value="Complaint – Cleanliness (Major, Housekeeping)">{"Complaint – Cleanliness (Major, Housekeeping)"}</option>
                            <option value="Complaint – Food (Major, F&B)">{"Complaint – Food (Major, F&B)"}</option>
                            <option value="Complaint – Staff behaviour (Critical, Front office)">{"Complaint – Staff behaviour (Critical, Front office)"}</option>
                            <option value="Complaint – Billing (Minor, Front office)">{"Complaint – Billing (Minor, Front office)"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"From FDS-17"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f506">
                          {"Details "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <textarea className="field__input field__input--area" id="f506" name="details" required={true} maxLength="1000" defaultValue={""} />
                        <span className="field__hint">{"1 to 1,000 characters"}</span>
                      </div>
                      <div className="field" data-fw="s">
                        <label className="field__label" htmlFor="f507">
                          {"Department "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f507" name="dept" required={true}>
                            <option value="" disabled={true}>{"Choose…"}</option>
                            <option value="Housekeeping">{"Housekeeping"}</option>
                            <option value="Engineering">{"Engineering"}</option>
                            <option value="F&B">{"F&B"}</option>
                            <option value="Front office">{"Front office"}</option>
                            <option value="Security">{"Security"}</option>
                            <option value="Concierge">{"Concierge"}</option>
                            <option value="IT">{"IT"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Set by the type – you can change it"}</span>
                      </div>
                      <div className="field" data-fw="x">
                        <label className="field__label" htmlFor="f508">
                          {"Priority / severity "}
                          <span className="field__req" title="Required">{"*"}</span>
                        </label>
                        <div className="field__wrap">
                          <select className="field__input field__input--select" id="f508" name="prio" required={true} defaultValue={"Normal"}>
                            <option value="Low">{"Low"}</option>
                            <option value="Normal">{"Normal"}</option>
                            <option value="High">{"High"}</option>
                            <option value="Urgent">{"Urgent"}</option>
                            <option value="Minor">{"Minor"}</option>
                            <option value="Major">{"Major"}</option>
                            <option value="Critical">{"Critical"}</option>
                          </select>
                          <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                            <use href="/assets/icons/sprite.svg#chevron-down" />
                          </svg>
                        </div>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f509">{"Due by"}</label>
                        <input className="field__input" id="f509" type="text" name="due" maxLength="40" defaultValue={"22 Oct 2026 · now 09:42 + the time limit of the type"} />
                      </div>
                      <div className="field field--toggle">
                        <label className="sw" htmlFor="f510">
                          <input id="f510" type="checkbox" role="switch" name="cb" />
                          <span className="sw__track" />
                          {"Guest callback"}
                        </label>
                        <span className="field__hint">{"Type default"}</span>
                      </div>
                      <div className="field field--toggle" data-fw="s">
                        <label className="sw" htmlFor="f511">
                          <input id="f511" type="checkbox" role="switch" name="chg" />
                          <span className="sw__track" />
                          {"Chargeable"}
                        </label>
                        <span className="field__hint">{"Posts a charge when done (airport transfer, local taxi, massage) – default from the type"}</span>
                      </div>
                      <div className="field">
                        <label className="field__label" htmlFor="f512">{"Attachment"}</label>
                        <input className="field__input" id="f512" type="file" name="file" />
                        <span className="field__hint">{"Photo"}</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <a className="btn" href="#main">{"Cancel"}</a>
                    <button className="btn btn--primary" type="submit">{"Raise"}</button>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="FD-11-1" data-code="FD-11-1" role="dialog" aria-modal="true" aria-labelledby="FD-11-1-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="FD-11-1-t">{"RQ-0422-01 – Extra pillow"}</h2>
                      <p className="modal__desc">{"Request · room 211 · Mr Marco Rossi"}</p>
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
                      {" "}
                      <span className="fd-flag" title="Foreign national – Form III required">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#globe" />
                        </svg>
                        {"Italian"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Kind"}</dt>
                        <dd>{"Request"}</dd>
                        <dt>{"Room · guest"}</dt>
                        <dd>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"211"}</span>
                          {" "}
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10170" data-leads-to="FD-07">{"Mr Marco Rossi"}</a>
                        </dd>
                        <dt>{"Type"}</dt>
                        <dd>{"Extra pillow"}</dd>
                        <dt>{"Department"}</dt>
                        <dd>{"Housekeeping"}</dd>
                        <dt>{"Priority"}</dt>
                        <dd>{"Normal"}</dd>
                        <dt>{"Raised · due"}</dt>
                        <dd>{"08:50 · 09:05"}</dd>
                        <dt>{"SLA"}</dt>
                        <dd>
                          <span className="fd-chip fd-chip--bad">{"Overdue 37 min"}</span>
                        </dd>
                        <dt>{"Status"}</dt>
                        <dd>{"Open"}</dd>
                        <dt>{"Escalation level"}</dt>
                        <dd>{"1"}</dd>
                      </dl>
                      <h3 className="fd-h3">{"Timeline"}</h3>
                      <ol className="fd-timeline">
                        <li>
                          <strong>{"08:50"}</strong>
                          {" Raised"}
                          <span className="fd-sub">{"Request RQ-0422-01 entered · Sneha Joseph"}</span>
                        </li>
                        <li>
                          <strong>{"08:51"}</strong>
                          {" Assigned"}
                          <span className="fd-sub">{"Sent to Housekeeping · System"}</span>
                        </li>
                      </ol>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Assign / reassign"}</h2>
                        <div className="s-grid2">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f513">
                              {"Department "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f513" name="dept" required={true} defaultValue={"Housekeeping"}>
                                <option value="Housekeeping">{"Housekeeping"}</option>
                                <option value="Engineering">{"Engineering"}</option>
                                <option value="F&B">{"F&B"}</option>
                                <option value="Front office">{"Front office"}</option>
                                <option value="Security">{"Security"}</option>
                                <option value="Concierge">{"Concierge"}</option>
                                <option value="IT">{"IT"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f514">{"Person"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f514" name="person">
                                <option value="Unassigned">{"Unassigned"}</option>
                                <option value="Duty supervisor">{"Duty supervisor"}</option>
                                <option value="On-shift staff">{"On-shift staff"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Reassign to change who works on it"}</span>
                          </div>
                        </div>
                      </section>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Resolution"}</h2>
                        <div className="fd-grid1">
                          <div className="field">
                            <label className="field__label" htmlFor="f515">{"Action taken"}</label>
                            <textarea className="field__input field__input--area" id="f515" name="action" maxLength="500" defaultValue={""} />
                            <span className="field__hint">{"Required to close a complaint"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f516">{"Root cause"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f516" name="root" defaultValue={""}>
                                <option value="" />
                                <option value="Training">{"Training"}</option>
                                <option value="Maintenance">{"Maintenance"}</option>
                                <option value="Process">{"Process"}</option>
                                <option value="Guest expectation">{"Guest expectation"}</option>
                                <option value="Vendor">{"Vendor"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Complaints only"}</span>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Guest feedback"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Satisfied" />
                                <span className="check__box" />
                                {"Satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not satisfied" />
                                <span className="check__box" />
                                {"Not satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not asked" defaultChecked={true} />
                                <span className="check__box" />
                                {"Not asked"}
                              </label>
                            </div>
                            <span className="field__hint">{"A complaint cannot be closed without feedback"}</span>
                          </fieldset>
                          <div className="field field--toggle" data-fw="s">
                            <label className="sw" htmlFor="f518">
                              <input id="f518" type="checkbox" role="switch" name="cb" />
                              <span className="sw__track" />
                              {"Callback done"}
                            </label>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#saved" formNoValidate={true}>{"Save"}</button>
                    <button className="btn btn--primary" type="submit" formAction="/front-desk/fd-11-requests-complaints/#closed" aria-label="Mark done / close">
                      {"Mark done"}
                      <span className="ph-x">{" / close"}</span>
                    </button>
                    <a className="btn" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R27" data-leads-to="FD-R27">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Report"}
                    </a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="RQ-0422-02" data-code="FD-11-1" role="dialog" aria-modal="true" aria-labelledby="RQ-0422-02-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RQ-0422-02-t">{"RQ-0422-02 – Extra towels"}</h2>
                      <p className="modal__desc">{"Request · room 303 · Ms Charlotte Fraser"}</p>
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
                      {" "}
                      <span className="fd-flag" title="Foreign national – Form III required">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#globe" />
                        </svg>
                        {"British"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Kind"}</dt>
                        <dd>{"Request"}</dd>
                        <dt>{"Room · guest"}</dt>
                        <dd>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"303"}</span>
                          {" "}
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10031" data-leads-to="FD-07">{"Ms Charlotte Fraser"}</a>
                        </dd>
                        <dt>{"Type"}</dt>
                        <dd>{"Extra towels"}</dd>
                        <dt>{"Department"}</dt>
                        <dd>{"Housekeeping"}</dd>
                        <dt>{"Priority"}</dt>
                        <dd>{"Normal"}</dd>
                        <dt>{"Raised · due"}</dt>
                        <dd>{"09:30 · 09:45"}</dd>
                        <dt>{"SLA"}</dt>
                        <dd>
                          <span className="fd-chip fd-chip--warn">{"3 min left"}</span>
                        </dd>
                        <dt>{"Status"}</dt>
                        <dd>{"In progress"}</dd>
                        <dt>{"Escalation level"}</dt>
                        <dd>{"0"}</dd>
                      </dl>
                      <h3 className="fd-h3">{"Timeline"}</h3>
                      <ol className="fd-timeline">
                        <li>
                          <strong>{"09:30"}</strong>
                          {" Raised"}
                          <span className="fd-sub">{"Request RQ-0422-02 entered · Sneha Joseph"}</span>
                        </li>
                        <li>
                          <strong>{"09:31"}</strong>
                          {" Assigned"}
                          <span className="fd-sub">{"Sent to Housekeeping · System"}</span>
                        </li>
                        <li>
                          <strong>{"09:36"}</strong>
                          {" Started"}
                          <span className="fd-sub">{"Housekeeping is working on it · Housekeeping"}</span>
                        </li>
                      </ol>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Assign / reassign"}</h2>
                        <div className="s-grid2">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f519">
                              {"Department "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f519" name="dept" required={true} defaultValue={"Housekeeping"}>
                                <option value="Housekeeping">{"Housekeeping"}</option>
                                <option value="Engineering">{"Engineering"}</option>
                                <option value="F&B">{"F&B"}</option>
                                <option value="Front office">{"Front office"}</option>
                                <option value="Security">{"Security"}</option>
                                <option value="Concierge">{"Concierge"}</option>
                                <option value="IT">{"IT"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f520">{"Person"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f520" name="person">
                                <option value="Unassigned">{"Unassigned"}</option>
                                <option value="Duty supervisor">{"Duty supervisor"}</option>
                                <option value="On-shift staff">{"On-shift staff"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Reassign to change who works on it"}</span>
                          </div>
                        </div>
                      </section>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Resolution"}</h2>
                        <div className="fd-grid1">
                          <div className="field">
                            <label className="field__label" htmlFor="f521">{"Action taken"}</label>
                            <textarea className="field__input field__input--area" id="f521" name="action" maxLength="500" defaultValue={""} />
                            <span className="field__hint">{"Required to close a complaint"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f522">{"Root cause"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f522" name="root" defaultValue={""}>
                                <option value="" />
                                <option value="Training">{"Training"}</option>
                                <option value="Maintenance">{"Maintenance"}</option>
                                <option value="Process">{"Process"}</option>
                                <option value="Guest expectation">{"Guest expectation"}</option>
                                <option value="Vendor">{"Vendor"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Complaints only"}</span>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Guest feedback"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Satisfied" />
                                <span className="check__box" />
                                {"Satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not satisfied" />
                                <span className="check__box" />
                                {"Not satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not asked" defaultChecked={true} />
                                <span className="check__box" />
                                {"Not asked"}
                              </label>
                            </div>
                            <span className="field__hint">{"A complaint cannot be closed without feedback"}</span>
                          </fieldset>
                          <div className="field field--toggle" data-fw="s">
                            <label className="sw" htmlFor="f524">
                              <input id="f524" type="checkbox" role="switch" name="cb" />
                              <span className="sw__track" />
                              {"Callback done"}
                            </label>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#saved" formNoValidate={true}>{"Save"}</button>
                    <button className="btn btn--primary" type="submit" formAction="/front-desk/fd-11-requests-complaints/#closed" aria-label="Mark done / close">
                      {"Mark done"}
                      <span className="ph-x">{" / close"}</span>
                    </button>
                    <a className="btn" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R27" data-leads-to="FD-R27">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Report"}
                    </a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="RQ-0422-03" data-code="FD-11-1" role="dialog" aria-modal="true" aria-labelledby="RQ-0422-03-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RQ-0422-03-t">{"RQ-0422-03 – AC not cooling"}</h2>
                      <p className="modal__desc">{"Request · room 304 · Mr Oliver Hughes"}</p>
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
                      <span className="fd-flag" title="Foreign national – Form III required">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#globe" />
                        </svg>
                        {"British"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Kind"}</dt>
                        <dd>{"Request"}</dd>
                        <dt>{"Room · guest"}</dt>
                        <dd>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"304"}</span>
                          {" "}
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10143" data-leads-to="FD-07">{"Mr Oliver Hughes"}</a>
                        </dd>
                        <dt>{"Type"}</dt>
                        <dd>{"AC not cooling"}</dd>
                        <dt>{"Department"}</dt>
                        <dd>{"Engineering"}</dd>
                        <dt>{"Priority"}</dt>
                        <dd>{"High"}</dd>
                        <dt>{"Raised · due"}</dt>
                        <dd>{"08:20 · 08:50"}</dd>
                        <dt>{"SLA"}</dt>
                        <dd>
                          <span className="fd-chip fd-chip--ok">{"Met"}</span>
                        </dd>
                        <dt>{"Status"}</dt>
                        <dd>{"Done"}</dd>
                        <dt>{"Escalation level"}</dt>
                        <dd>{"0"}</dd>
                      </dl>
                      <h3 className="fd-h3">{"Timeline"}</h3>
                      <ol className="fd-timeline">
                        <li>
                          <strong>{"08:20"}</strong>
                          {" Raised"}
                          <span className="fd-sub">{"Request RQ-0422-03 entered · Sneha Joseph"}</span>
                        </li>
                        <li>
                          <strong>{"08:21"}</strong>
                          {" Assigned"}
                          <span className="fd-sub">{"Sent to Engineering · System"}</span>
                        </li>
                        <li>
                          <strong>{"08:26"}</strong>
                          {" Started"}
                          <span className="fd-sub">{"Engineering is working on it · Engineering"}</span>
                        </li>
                        <li>
                          <strong>{"08:45"}</strong>
                          {" Done"}
                          <span className="fd-sub">{"Engineer replaced the thermostat 08:45 · Engineering"}</span>
                        </li>
                      </ol>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Assign / reassign"}</h2>
                        <div className="s-grid2">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f525">
                              {"Department "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f525" name="dept" required={true} defaultValue={"Engineering"}>
                                <option value="Housekeeping">{"Housekeeping"}</option>
                                <option value="Engineering">{"Engineering"}</option>
                                <option value="F&B">{"F&B"}</option>
                                <option value="Front office">{"Front office"}</option>
                                <option value="Security">{"Security"}</option>
                                <option value="Concierge">{"Concierge"}</option>
                                <option value="IT">{"IT"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f526">{"Person"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f526" name="person">
                                <option value="Unassigned">{"Unassigned"}</option>
                                <option value="Duty supervisor">{"Duty supervisor"}</option>
                                <option value="On-shift staff">{"On-shift staff"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Reassign to change who works on it"}</span>
                          </div>
                        </div>
                      </section>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Resolution"}</h2>
                        <div className="fd-grid1">
                          <div className="field">
                            <label className="field__label" htmlFor="f527">{"Action taken"}</label>
                            <textarea className="field__input field__input--area" id="f527" name="action" maxLength="500" defaultValue={""} />
                            <span className="field__hint">{"Required to close a complaint"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f528">{"Root cause"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f528" name="root" defaultValue={""}>
                                <option value="" />
                                <option value="Training">{"Training"}</option>
                                <option value="Maintenance">{"Maintenance"}</option>
                                <option value="Process">{"Process"}</option>
                                <option value="Guest expectation">{"Guest expectation"}</option>
                                <option value="Vendor">{"Vendor"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Complaints only"}</span>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Guest feedback"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Satisfied" />
                                <span className="check__box" />
                                {"Satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not satisfied" />
                                <span className="check__box" />
                                {"Not satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not asked" defaultChecked={true} />
                                <span className="check__box" />
                                {"Not asked"}
                              </label>
                            </div>
                            <span className="field__hint">{"A complaint cannot be closed without feedback"}</span>
                          </fieldset>
                          <div className="field field--toggle" data-fw="s">
                            <label className="sw" htmlFor="f530">
                              <input id="f530" type="checkbox" role="switch" name="cb" />
                              <span className="sw__track" />
                              {"Callback done"}
                            </label>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#saved" formNoValidate={true}>{"Save"}</button>
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#reopened" formNoValidate={true}>{"Reopen"}</button>
                    <a className="btn" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R27" data-leads-to="FD-R27">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Report"}
                    </a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="RQ-0422-04" data-code="FD-11-1" role="dialog" aria-modal="true" aria-labelledby="RQ-0422-04-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RQ-0422-04-t">{"RQ-0422-04 – Wi-Fi help"}</h2>
                      <p className="modal__desc">{"Request · room 116 · Mr Amit Bijoy"}</p>
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
                        {"Aviv Club Platinum"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Kind"}</dt>
                        <dd>{"Request"}</dd>
                        <dt>{"Room · guest"}</dt>
                        <dd>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"116"}</span>
                          {" "}
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10011" data-leads-to="FD-07">{"Mr Amit Bijoy"}</a>
                        </dd>
                        <dt>{"Type"}</dt>
                        <dd>{"Wi-Fi help"}</dd>
                        <dt>{"Department"}</dt>
                        <dd>{"IT"}</dd>
                        <dt>{"Priority"}</dt>
                        <dd>{"Normal"}</dd>
                        <dt>{"Raised · due"}</dt>
                        <dd>{"09:35 · 09:50"}</dd>
                        <dt>{"SLA"}</dt>
                        <dd>
                          <span className="fd-chip fd-chip--warn">{"8 min left"}</span>
                        </dd>
                        <dt>{"Status"}</dt>
                        <dd>{"In progress"}</dd>
                        <dt>{"Escalation level"}</dt>
                        <dd>{"0"}</dd>
                      </dl>
                      <h3 className="fd-h3">{"Timeline"}</h3>
                      <ol className="fd-timeline">
                        <li>
                          <strong>{"09:35"}</strong>
                          {" Raised"}
                          <span className="fd-sub">{"Request RQ-0422-04 entered · Sneha Joseph"}</span>
                        </li>
                        <li>
                          <strong>{"09:36"}</strong>
                          {" Assigned"}
                          <span className="fd-sub">{"Sent to IT · System"}</span>
                        </li>
                        <li>
                          <strong>{"09:41"}</strong>
                          {" Started"}
                          <span className="fd-sub">{"IT is working on it · IT"}</span>
                        </li>
                      </ol>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Assign / reassign"}</h2>
                        <div className="s-grid2">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f531">
                              {"Department "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f531" name="dept" required={true} defaultValue={"IT"}>
                                <option value="Housekeeping">{"Housekeeping"}</option>
                                <option value="Engineering">{"Engineering"}</option>
                                <option value="F&B">{"F&B"}</option>
                                <option value="Front office">{"Front office"}</option>
                                <option value="Security">{"Security"}</option>
                                <option value="Concierge">{"Concierge"}</option>
                                <option value="IT">{"IT"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f532">{"Person"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f532" name="person">
                                <option value="Unassigned">{"Unassigned"}</option>
                                <option value="Duty supervisor">{"Duty supervisor"}</option>
                                <option value="On-shift staff">{"On-shift staff"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Reassign to change who works on it"}</span>
                          </div>
                        </div>
                      </section>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Resolution"}</h2>
                        <div className="fd-grid1">
                          <div className="field">
                            <label className="field__label" htmlFor="f533">{"Action taken"}</label>
                            <textarea className="field__input field__input--area" id="f533" name="action" maxLength="500" defaultValue={""} />
                            <span className="field__hint">{"Required to close a complaint"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f534">{"Root cause"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f534" name="root" defaultValue={""}>
                                <option value="" />
                                <option value="Training">{"Training"}</option>
                                <option value="Maintenance">{"Maintenance"}</option>
                                <option value="Process">{"Process"}</option>
                                <option value="Guest expectation">{"Guest expectation"}</option>
                                <option value="Vendor">{"Vendor"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Complaints only"}</span>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Guest feedback"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Satisfied" />
                                <span className="check__box" />
                                {"Satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not satisfied" />
                                <span className="check__box" />
                                {"Not satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not asked" defaultChecked={true} />
                                <span className="check__box" />
                                {"Not asked"}
                              </label>
                            </div>
                            <span className="field__hint">{"A complaint cannot be closed without feedback"}</span>
                          </fieldset>
                          <div className="field field--toggle" data-fw="s">
                            <label className="sw" htmlFor="f536">
                              <input id="f536" type="checkbox" role="switch" name="cb" />
                              <span className="sw__track" />
                              {"Callback done"}
                            </label>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#saved" formNoValidate={true}>{"Save"}</button>
                    <button className="btn btn--primary" type="submit" formAction="/front-desk/fd-11-requests-complaints/#closed" aria-label="Mark done / close">
                      {"Mark done"}
                      <span className="ph-x">{" / close"}</span>
                    </button>
                    <a className="btn" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R27" data-leads-to="FD-R27">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Report"}
                    </a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="RQ-0422-05" data-code="FD-11-1" role="dialog" aria-modal="true" aria-labelledby="RQ-0422-05-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RQ-0422-05-t">{"RQ-0422-05 – Cab / taxi"}</h2>
                      <p className="modal__desc">{"Request · room 213 · Mr Omar Al Farsi"}</p>
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
                        {"Emirati"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Kind"}</dt>
                        <dd>{"Request"}</dd>
                        <dt>{"Room · guest"}</dt>
                        <dd>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"213"}</span>
                          {" "}
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10140" data-leads-to="FD-07">{"Mr Omar Al Farsi"}</a>
                        </dd>
                        <dt>{"Type"}</dt>
                        <dd>{"Cab / taxi"}</dd>
                        <dt>{"Department"}</dt>
                        <dd>{"Concierge"}</dd>
                        <dt>{"Priority"}</dt>
                        <dd>{"Normal"}</dd>
                        <dt>{"Raised · due"}</dt>
                        <dd>{"09:15 · 09:30"}</dd>
                        <dt>{"SLA"}</dt>
                        <dd>
                          <span className="fd-chip fd-chip--ok">{"Met"}</span>
                        </dd>
                        <dt>{"Status"}</dt>
                        <dd>{"Done"}</dd>
                        <dt>{"Escalation level"}</dt>
                        <dd>{"0"}</dd>
                      </dl>
                      <h3 className="fd-h3">{"Timeline"}</h3>
                      <ol className="fd-timeline">
                        <li>
                          <strong>{"09:15"}</strong>
                          {" Raised"}
                          <span className="fd-sub">{"Request RQ-0422-05 entered · Sneha Joseph"}</span>
                        </li>
                        <li>
                          <strong>{"09:16"}</strong>
                          {" Assigned"}
                          <span className="fd-sub">{"Sent to Concierge · System"}</span>
                        </li>
                        <li>
                          <strong>{"09:21"}</strong>
                          {" Started"}
                          <span className="fd-sub">{"Concierge is working on it · Concierge"}</span>
                        </li>
                        <li>
                          <strong>{"09:30"}</strong>
                          {" Done"}
                          <span className="fd-sub">{"Cab to the airport at 10:30 – booked with Kochi Cabs · Concierge"}</span>
                        </li>
                      </ol>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Assign / reassign"}</h2>
                        <div className="s-grid2">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f537">
                              {"Department "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f537" name="dept" required={true} defaultValue={"Concierge"}>
                                <option value="Housekeeping">{"Housekeeping"}</option>
                                <option value="Engineering">{"Engineering"}</option>
                                <option value="F&B">{"F&B"}</option>
                                <option value="Front office">{"Front office"}</option>
                                <option value="Security">{"Security"}</option>
                                <option value="Concierge">{"Concierge"}</option>
                                <option value="IT">{"IT"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f538">{"Person"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f538" name="person">
                                <option value="Unassigned">{"Unassigned"}</option>
                                <option value="Duty supervisor">{"Duty supervisor"}</option>
                                <option value="On-shift staff">{"On-shift staff"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Reassign to change who works on it"}</span>
                          </div>
                        </div>
                      </section>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Resolution"}</h2>
                        <div className="fd-grid1">
                          <div className="field">
                            <label className="field__label" htmlFor="f539">{"Action taken"}</label>
                            <textarea className="field__input field__input--area" id="f539" name="action" maxLength="500" defaultValue={""} />
                            <span className="field__hint">{"Required to close a complaint"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f540">{"Root cause"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f540" name="root" defaultValue={""}>
                                <option value="" />
                                <option value="Training">{"Training"}</option>
                                <option value="Maintenance">{"Maintenance"}</option>
                                <option value="Process">{"Process"}</option>
                                <option value="Guest expectation">{"Guest expectation"}</option>
                                <option value="Vendor">{"Vendor"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Complaints only"}</span>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Guest feedback"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Satisfied" />
                                <span className="check__box" />
                                {"Satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not satisfied" />
                                <span className="check__box" />
                                {"Not satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not asked" defaultChecked={true} />
                                <span className="check__box" />
                                {"Not asked"}
                              </label>
                            </div>
                            <span className="field__hint">{"A complaint cannot be closed without feedback"}</span>
                          </fieldset>
                          <div className="field field--toggle" data-fw="s">
                            <label className="sw" htmlFor="f542">
                              <input id="f542" type="checkbox" role="switch" name="cb" />
                              <span className="sw__track" />
                              {"Callback done"}
                            </label>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#saved" formNoValidate={true}>{"Save"}</button>
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#reopened" formNoValidate={true}>{"Reopen"}</button>
                    <a className="btn" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R27" data-leads-to="FD-R27">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Report"}
                    </a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="RQ-0422-06" data-code="FD-11-1" role="dialog" aria-modal="true" aria-labelledby="RQ-0422-06-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RQ-0422-06-t">{"RQ-0422-06 – Baby cot"}</h2>
                      <p className="modal__desc">{"Request · room 507 · Mrs Pooja Kunal"}</p>
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
                        <dt>{"Kind"}</dt>
                        <dd>{"Request"}</dd>
                        <dt>{"Room · guest"}</dt>
                        <dd>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"507"}</span>
                          {" "}
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10010" data-leads-to="FD-07">{"Mrs Pooja Kunal"}</a>
                        </dd>
                        <dt>{"Type"}</dt>
                        <dd>{"Baby cot"}</dd>
                        <dt>{"Department"}</dt>
                        <dd>{"Housekeeping"}</dd>
                        <dt>{"Priority"}</dt>
                        <dd>{"Normal"}</dd>
                        <dt>{"Raised · due"}</dt>
                        <dd>{"08:30 · 09:00"}</dd>
                        <dt>{"SLA"}</dt>
                        <dd>
                          <span className="fd-chip fd-chip--ok">{"Met"}</span>
                        </dd>
                        <dt>{"Status"}</dt>
                        <dd>{"Done"}</dd>
                        <dt>{"Escalation level"}</dt>
                        <dd>{"0"}</dd>
                      </dl>
                      <h3 className="fd-h3">{"Timeline"}</h3>
                      <ol className="fd-timeline">
                        <li>
                          <strong>{"08:30"}</strong>
                          {" Raised"}
                          <span className="fd-sub">{"Request RQ-0422-06 entered · Sneha Joseph"}</span>
                        </li>
                        <li>
                          <strong>{"08:31"}</strong>
                          {" Assigned"}
                          <span className="fd-sub">{"Sent to Housekeeping · System"}</span>
                        </li>
                        <li>
                          <strong>{"08:36"}</strong>
                          {" Started"}
                          <span className="fd-sub">{"Housekeeping is working on it · Housekeeping"}</span>
                        </li>
                        <li>
                          <strong>{"08:55"}</strong>
                          {" Done"}
                          <span className="fd-sub">{"Cot set up 08:55 · Housekeeping"}</span>
                        </li>
                      </ol>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Assign / reassign"}</h2>
                        <div className="s-grid2">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f543">
                              {"Department "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f543" name="dept" required={true} defaultValue={"Housekeeping"}>
                                <option value="Housekeeping">{"Housekeeping"}</option>
                                <option value="Engineering">{"Engineering"}</option>
                                <option value="F&B">{"F&B"}</option>
                                <option value="Front office">{"Front office"}</option>
                                <option value="Security">{"Security"}</option>
                                <option value="Concierge">{"Concierge"}</option>
                                <option value="IT">{"IT"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f544">{"Person"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f544" name="person">
                                <option value="Unassigned">{"Unassigned"}</option>
                                <option value="Duty supervisor">{"Duty supervisor"}</option>
                                <option value="On-shift staff">{"On-shift staff"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Reassign to change who works on it"}</span>
                          </div>
                        </div>
                      </section>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Resolution"}</h2>
                        <div className="fd-grid1">
                          <div className="field">
                            <label className="field__label" htmlFor="f545">{"Action taken"}</label>
                            <textarea className="field__input field__input--area" id="f545" name="action" maxLength="500" defaultValue={""} />
                            <span className="field__hint">{"Required to close a complaint"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f546">{"Root cause"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f546" name="root" defaultValue={""}>
                                <option value="" />
                                <option value="Training">{"Training"}</option>
                                <option value="Maintenance">{"Maintenance"}</option>
                                <option value="Process">{"Process"}</option>
                                <option value="Guest expectation">{"Guest expectation"}</option>
                                <option value="Vendor">{"Vendor"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Complaints only"}</span>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Guest feedback"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Satisfied" />
                                <span className="check__box" />
                                {"Satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not satisfied" />
                                <span className="check__box" />
                                {"Not satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not asked" defaultChecked={true} />
                                <span className="check__box" />
                                {"Not asked"}
                              </label>
                            </div>
                            <span className="field__hint">{"A complaint cannot be closed without feedback"}</span>
                          </fieldset>
                          <div className="field field--toggle" data-fw="s">
                            <label className="sw" htmlFor="f548">
                              <input id="f548" type="checkbox" role="switch" name="cb" />
                              <span className="sw__track" />
                              {"Callback done"}
                            </label>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#saved" formNoValidate={true}>{"Save"}</button>
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#reopened" formNoValidate={true}>{"Reopen"}</button>
                    <a className="btn" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R27" data-leads-to="FD-R27">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Report"}
                    </a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="RQ-0422-07" data-code="FD-11-1" role="dialog" aria-modal="true" aria-labelledby="RQ-0422-07-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RQ-0422-07-t">{"RQ-0422-07 – Doctor on call"}</h2>
                      <p className="modal__desc">{"Request · room 105 · Ms Noura Al Saud"}</p>
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
                        <dt>{"Kind"}</dt>
                        <dd>{"Request"}</dd>
                        <dt>{"Room · guest"}</dt>
                        <dd>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"105"}</span>
                          {" "}
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10056" data-leads-to="FD-07">{"Ms Noura Al Saud"}</a>
                        </dd>
                        <dt>{"Type"}</dt>
                        <dd>{"Doctor on call"}</dd>
                        <dt>{"Department"}</dt>
                        <dd>{"Front office"}</dd>
                        <dt>{"Priority"}</dt>
                        <dd>{"Urgent"}</dd>
                        <dt>{"Raised · due"}</dt>
                        <dd>{"07:45 · 08:00"}</dd>
                        <dt>{"SLA"}</dt>
                        <dd>
                          <span className="fd-chip fd-chip--ok">{"Met"}</span>
                        </dd>
                        <dt>{"Status"}</dt>
                        <dd>{"Done"}</dd>
                        <dt>{"Escalation level"}</dt>
                        <dd>{"0"}</dd>
                      </dl>
                      <h3 className="fd-h3">{"Timeline"}</h3>
                      <ol className="fd-timeline">
                        <li>
                          <strong>{"07:45"}</strong>
                          {" Raised"}
                          <span className="fd-sub">{"Request RQ-0422-07 entered · Sneha Joseph"}</span>
                        </li>
                        <li>
                          <strong>{"07:46"}</strong>
                          {" Assigned"}
                          <span className="fd-sub">{"Sent to Front office · System"}</span>
                        </li>
                        <li>
                          <strong>{"07:51"}</strong>
                          {" Started"}
                          <span className="fd-sub">{"Front office is working on it · Front office"}</span>
                        </li>
                        <li>
                          <strong>{"08:00"}</strong>
                          {" Done"}
                          <span className="fd-sub">{"Doctor visited 07:58 – no further action · Front office"}</span>
                        </li>
                      </ol>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Assign / reassign"}</h2>
                        <div className="s-grid2">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f549">
                              {"Department "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f549" name="dept" required={true} defaultValue={"Front office"}>
                                <option value="Housekeeping">{"Housekeeping"}</option>
                                <option value="Engineering">{"Engineering"}</option>
                                <option value="F&B">{"F&B"}</option>
                                <option value="Front office">{"Front office"}</option>
                                <option value="Security">{"Security"}</option>
                                <option value="Concierge">{"Concierge"}</option>
                                <option value="IT">{"IT"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f550">{"Person"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f550" name="person">
                                <option value="Unassigned">{"Unassigned"}</option>
                                <option value="Duty supervisor">{"Duty supervisor"}</option>
                                <option value="On-shift staff">{"On-shift staff"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Reassign to change who works on it"}</span>
                          </div>
                        </div>
                      </section>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Resolution"}</h2>
                        <div className="fd-grid1">
                          <div className="field">
                            <label className="field__label" htmlFor="f551">{"Action taken"}</label>
                            <textarea className="field__input field__input--area" id="f551" name="action" maxLength="500" defaultValue={""} />
                            <span className="field__hint">{"Required to close a complaint"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f552">{"Root cause"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f552" name="root" defaultValue={""}>
                                <option value="" />
                                <option value="Training">{"Training"}</option>
                                <option value="Maintenance">{"Maintenance"}</option>
                                <option value="Process">{"Process"}</option>
                                <option value="Guest expectation">{"Guest expectation"}</option>
                                <option value="Vendor">{"Vendor"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Complaints only"}</span>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Guest feedback"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Satisfied" />
                                <span className="check__box" />
                                {"Satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not satisfied" />
                                <span className="check__box" />
                                {"Not satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not asked" defaultChecked={true} />
                                <span className="check__box" />
                                {"Not asked"}
                              </label>
                            </div>
                            <span className="field__hint">{"A complaint cannot be closed without feedback"}</span>
                          </fieldset>
                          <div className="field field--toggle" data-fw="s">
                            <label className="sw" htmlFor="f554">
                              <input id="f554" type="checkbox" role="switch" name="cb" />
                              <span className="sw__track" />
                              {"Callback done"}
                            </label>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#saved" formNoValidate={true}>{"Save"}</button>
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#reopened" formNoValidate={true}>{"Reopen"}</button>
                    <a className="btn" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R27" data-leads-to="FD-R27">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Report"}
                    </a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="RQ-0422-08" data-code="FD-11-1" role="dialog" aria-modal="true" aria-labelledby="RQ-0422-08-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RQ-0422-08-t">{"RQ-0422-08 – Airport transfer"}</h2>
                      <p className="modal__desc">{"Request · room 212 · Mr Ethan Anderson"}</p>
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
                        {"Canadian"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Kind"}</dt>
                        <dd>{"Request"}</dd>
                        <dt>{"Room · guest"}</dt>
                        <dd>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"212"}</span>
                          {" "}
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10162" data-leads-to="FD-07">{"Mr Ethan Anderson"}</a>
                        </dd>
                        <dt>{"Type"}</dt>
                        <dd>{"Airport transfer"}</dd>
                        <dt>{"Department"}</dt>
                        <dd>{"Concierge"}</dd>
                        <dt>{"Priority"}</dt>
                        <dd>{"Normal"}</dd>
                        <dt>{"Raised · due"}</dt>
                        <dd>{"09:20 · 11:00"}</dd>
                        <dt>{"SLA"}</dt>
                        <dd>
                          <span className="fd-chip fd-chip--warn">{"78 min left"}</span>
                        </dd>
                        <dt>{"Status"}</dt>
                        <dd>{"Open"}</dd>
                        <dt>{"Escalation level"}</dt>
                        <dd>{"0"}</dd>
                      </dl>
                      <h3 className="fd-h3">{"Timeline"}</h3>
                      <ol className="fd-timeline">
                        <li>
                          <strong>{"09:20"}</strong>
                          {" Raised"}
                          <span className="fd-sub">{"Request RQ-0422-08 entered · Sneha Joseph"}</span>
                        </li>
                        <li>
                          <strong>{"09:21"}</strong>
                          {" Assigned"}
                          <span className="fd-sub">{"Sent to Concierge · System"}</span>
                        </li>
                      </ol>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Assign / reassign"}</h2>
                        <div className="s-grid2">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f555">
                              {"Department "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f555" name="dept" required={true} defaultValue={"Concierge"}>
                                <option value="Housekeeping">{"Housekeeping"}</option>
                                <option value="Engineering">{"Engineering"}</option>
                                <option value="F&B">{"F&B"}</option>
                                <option value="Front office">{"Front office"}</option>
                                <option value="Security">{"Security"}</option>
                                <option value="Concierge">{"Concierge"}</option>
                                <option value="IT">{"IT"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f556">{"Person"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f556" name="person">
                                <option value="Unassigned">{"Unassigned"}</option>
                                <option value="Duty supervisor">{"Duty supervisor"}</option>
                                <option value="On-shift staff">{"On-shift staff"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Reassign to change who works on it"}</span>
                          </div>
                        </div>
                      </section>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Resolution"}</h2>
                        <div className="fd-grid1">
                          <div className="field">
                            <label className="field__label" htmlFor="f557">{"Action taken"}</label>
                            <textarea className="field__input field__input--area" id="f557" name="action" maxLength="500" defaultValue={""} />
                            <span className="field__hint">{"Required to close a complaint"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f558">{"Root cause"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f558" name="root" defaultValue={""}>
                                <option value="" />
                                <option value="Training">{"Training"}</option>
                                <option value="Maintenance">{"Maintenance"}</option>
                                <option value="Process">{"Process"}</option>
                                <option value="Guest expectation">{"Guest expectation"}</option>
                                <option value="Vendor">{"Vendor"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Complaints only"}</span>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Guest feedback"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Satisfied" />
                                <span className="check__box" />
                                {"Satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not satisfied" />
                                <span className="check__box" />
                                {"Not satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not asked" defaultChecked={true} />
                                <span className="check__box" />
                                {"Not asked"}
                              </label>
                            </div>
                            <span className="field__hint">{"A complaint cannot be closed without feedback"}</span>
                          </fieldset>
                          <div className="field field--toggle" data-fw="s">
                            <label className="sw" htmlFor="f560">
                              <input id="f560" type="checkbox" role="switch" name="cb" />
                              <span className="sw__track" />
                              {"Callback done"}
                            </label>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#saved" formNoValidate={true}>{"Save"}</button>
                    <button className="btn btn--primary" type="submit" formAction="/front-desk/fd-11-requests-complaints/#closed" aria-label="Mark done / close">
                      {"Mark done"}
                      <span className="ph-x">{" / close"}</span>
                    </button>
                    <a className="btn" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R27" data-leads-to="FD-R27">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Report"}
                    </a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="RQ-0422-09" data-code="FD-11-1" role="dialog" aria-modal="true" aria-labelledby="RQ-0422-09-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="RQ-0422-09-t">{"RQ-0422-09 – Ayurveda booking"}</h2>
                      <p className="modal__desc">{"Request · room 113 · Mrs Isha Vihaan"}</p>
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
                        <dt>{"Kind"}</dt>
                        <dd>{"Request"}</dd>
                        <dt>{"Room · guest"}</dt>
                        <dd>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"113"}</span>
                          {" "}
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10165" data-leads-to="FD-07">{"Mrs Isha Vihaan"}</a>
                        </dd>
                        <dt>{"Type"}</dt>
                        <dd>{"Ayurveda booking"}</dd>
                        <dt>{"Department"}</dt>
                        <dd>{"Concierge"}</dd>
                        <dt>{"Priority"}</dt>
                        <dd>{"Normal"}</dd>
                        <dt>{"Raised · due"}</dt>
                        <dd>{"09:30 · 10:00"}</dd>
                        <dt>{"SLA"}</dt>
                        <dd>
                          <span className="fd-chip fd-chip--warn">{"18 min left"}</span>
                        </dd>
                        <dt>{"Status"}</dt>
                        <dd>{"Open"}</dd>
                        <dt>{"Escalation level"}</dt>
                        <dd>{"0"}</dd>
                      </dl>
                      <h3 className="fd-h3">{"Timeline"}</h3>
                      <ol className="fd-timeline">
                        <li>
                          <strong>{"09:30"}</strong>
                          {" Raised"}
                          <span className="fd-sub">{"Request RQ-0422-09 entered · Sneha Joseph"}</span>
                        </li>
                        <li>
                          <strong>{"09:31"}</strong>
                          {" Assigned"}
                          <span className="fd-sub">{"Sent to Concierge · System"}</span>
                        </li>
                      </ol>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Assign / reassign"}</h2>
                        <div className="s-grid2">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f561">
                              {"Department "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f561" name="dept" required={true} defaultValue={"Concierge"}>
                                <option value="Housekeeping">{"Housekeeping"}</option>
                                <option value="Engineering">{"Engineering"}</option>
                                <option value="F&B">{"F&B"}</option>
                                <option value="Front office">{"Front office"}</option>
                                <option value="Security">{"Security"}</option>
                                <option value="Concierge">{"Concierge"}</option>
                                <option value="IT">{"IT"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f562">{"Person"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f562" name="person">
                                <option value="Unassigned">{"Unassigned"}</option>
                                <option value="Duty supervisor">{"Duty supervisor"}</option>
                                <option value="On-shift staff">{"On-shift staff"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Reassign to change who works on it"}</span>
                          </div>
                        </div>
                      </section>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Resolution"}</h2>
                        <div className="fd-grid1">
                          <div className="field">
                            <label className="field__label" htmlFor="f563">{"Action taken"}</label>
                            <textarea className="field__input field__input--area" id="f563" name="action" maxLength="500" defaultValue={""} />
                            <span className="field__hint">{"Required to close a complaint"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f564">{"Root cause"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f564" name="root" defaultValue={""}>
                                <option value="" />
                                <option value="Training">{"Training"}</option>
                                <option value="Maintenance">{"Maintenance"}</option>
                                <option value="Process">{"Process"}</option>
                                <option value="Guest expectation">{"Guest expectation"}</option>
                                <option value="Vendor">{"Vendor"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Complaints only"}</span>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">{"Guest feedback"}</legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Satisfied" />
                                <span className="check__box" />
                                {"Satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not satisfied" />
                                <span className="check__box" />
                                {"Not satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not asked" defaultChecked={true} />
                                <span className="check__box" />
                                {"Not asked"}
                              </label>
                            </div>
                            <span className="field__hint">{"A complaint cannot be closed without feedback"}</span>
                          </fieldset>
                          <div className="field field--toggle" data-fw="s">
                            <label className="sw" htmlFor="f566">
                              <input id="f566" type="checkbox" role="switch" name="cb" />
                              <span className="sw__track" />
                              {"Callback done"}
                            </label>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#saved" formNoValidate={true}>{"Save"}</button>
                    <button className="btn btn--primary" type="submit" formAction="/front-desk/fd-11-requests-complaints/#closed" aria-label="Mark done / close">
                      {"Mark done"}
                      <span className="ph-x">{" / close"}</span>
                    </button>
                    <a className="btn" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R27" data-leads-to="FD-R27">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Report"}
                    </a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="CP-0422-01" data-code="FD-11-1" role="dialog" aria-modal="true" aria-labelledby="CP-0422-01-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CP-0422-01-t">{"CP-0422-01 – Noise"}</h2>
                      <p className="modal__desc">{"Complaint · room 306 · Ms Jyoti Kabir"}</p>
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
                        <dt>{"Kind"}</dt>
                        <dd>{"Complaint"}</dd>
                        <dt>{"Room · guest"}</dt>
                        <dd>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"306"}</span>
                          {" "}
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10105" data-leads-to="FD-07">{"Ms Jyoti Kabir"}</a>
                        </dd>
                        <dt>{"Type"}</dt>
                        <dd>{"Noise"}</dd>
                        <dt>{"Department"}</dt>
                        <dd>{"Front office"}</dd>
                        <dt>{"Severity"}</dt>
                        <dd>{"Major"}</dd>
                        <dt>{"Raised · due"}</dt>
                        <dd>{"07:10 · 07:25"}</dd>
                        <dt>{"SLA"}</dt>
                        <dd>
                          <span className="fd-chip fd-chip--ok">{"Met"}</span>
                        </dd>
                        <dt>{"Status"}</dt>
                        <dd>{"Closed"}</dd>
                        <dt>{"Escalation level"}</dt>
                        <dd>{"0"}</dd>
                      </dl>
                      <h3 className="fd-h3">{"Timeline"}</h3>
                      <ol className="fd-timeline">
                        <li>
                          <strong>{"07:10"}</strong>
                          {" Raised"}
                          <span className="fd-sub">{"Complaint CP-0422-01 entered · Sneha Joseph"}</span>
                        </li>
                        <li>
                          <strong>{"07:11"}</strong>
                          {" Assigned"}
                          <span className="fd-sub">{"Sent to Front office · System"}</span>
                        </li>
                        <li>
                          <strong>{"07:16"}</strong>
                          {" Started"}
                          <span className="fd-sub">{"Front office is working on it · Front office"}</span>
                        </li>
                        <li>
                          <strong>{"07:25"}</strong>
                          {" Done"}
                          <span className="fd-sub">{"Noise from the corridor at night – room spoken to; apology and fruit basket sent · Front office"}</span>
                        </li>
                        <li>
                          <strong>{"07:25"}</strong>
                          {" Closed"}
                          <span className="fd-sub">{"Guest satisfied – callback done · Sneha Joseph"}</span>
                        </li>
                      </ol>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Assign / reassign"}</h2>
                        <div className="s-grid2">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f567">
                              {"Department "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f567" name="dept" required={true} defaultValue={"Front office"}>
                                <option value="Housekeeping">{"Housekeeping"}</option>
                                <option value="Engineering">{"Engineering"}</option>
                                <option value="F&B">{"F&B"}</option>
                                <option value="Front office">{"Front office"}</option>
                                <option value="Security">{"Security"}</option>
                                <option value="Concierge">{"Concierge"}</option>
                                <option value="IT">{"IT"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f568">{"Person"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f568" name="person">
                                <option value="Unassigned">{"Unassigned"}</option>
                                <option value="Duty supervisor">{"Duty supervisor"}</option>
                                <option value="On-shift staff">{"On-shift staff"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Reassign to change who works on it"}</span>
                          </div>
                        </div>
                      </section>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Resolution"}</h2>
                        <div className="fd-grid1">
                          <div className="field">
                            <label className="field__label" htmlFor="f569">
                              {"Action taken "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <textarea className="field__input field__input--area" id="f569" name="action" required={true} maxLength="500" defaultValue={""} />
                            <span className="field__hint">{"Required to close a complaint"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f570">{"Root cause"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f570" name="root" defaultValue={""}>
                                <option value="" />
                                <option value="Training">{"Training"}</option>
                                <option value="Maintenance">{"Maintenance"}</option>
                                <option value="Process">{"Process"}</option>
                                <option value="Guest expectation">{"Guest expectation"}</option>
                                <option value="Vendor">{"Vendor"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Complaints only"}</span>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Guest feedback "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Satisfied" required={true} />
                                <span className="check__box" />
                                {"Satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not satisfied" required={true} />
                                <span className="check__box" />
                                {"Not satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not asked" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Not asked"}
                              </label>
                            </div>
                            <span className="field__hint">{"A complaint cannot be closed without feedback"}</span>
                          </fieldset>
                          <div className="field field--toggle" data-fw="s">
                            <label className="sw" htmlFor="f572">
                              <input id="f572" type="checkbox" role="switch" name="cb" />
                              <span className="sw__track" />
                              {"Callback done"}
                            </label>
                          </div>
                        </div>
                        <a className="btn" href="/front-desk/fd-08-guest-folio/#FD-P10-FK-10105" data-leads-to="FD-P10">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#tag" />
                          </svg>
                          {"Compensation (allowance)"}
                        </a>
                      </section>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#saved" formNoValidate={true}>{"Save"}</button>
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#reopened" formNoValidate={true}>{"Reopen"}</button>
                    <a className="btn" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R27" data-leads-to="FD-R27">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Report"}
                    </a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                  </div>
                </form>
              </div>
              <div className="modal modal--drawer" id="CP-0422-02" data-code="FD-11-1" role="dialog" aria-modal="true" aria-labelledby="CP-0422-02-t">
                <a className="modal__backdrop" href="#main" aria-label="Close without saving" tabIndex="-1" />
                <form className="modal__box" action="/front-desk/fd-11-requests-complaints/#saved" method="get">
                  <div className="modal__head">
                    <div>
                      <h2 className="modal__title" id="CP-0422-02-t">{"CP-0422-02 – Billing"}</h2>
                      <p className="modal__desc">{"Complaint · room 504 · Dr Claire Dubois"}</p>
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
                      {" "}
                      <span className="fd-flag" title="Foreign national – Form III required">
                        <svg className="icon" width="14" height="14" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                          <use href="/assets/icons/sprite.svg#globe" />
                        </svg>
                        {"French"}
                      </span>
                      <dl className="s-kv">
                        <dt>{"Kind"}</dt>
                        <dd>{"Complaint"}</dd>
                        <dt>{"Room · guest"}</dt>
                        <dd>
                          <span className="fd-rm fd-rm--OC" title="Occupied clean">{"504"}</span>
                          {" "}
                          <a className="fd-link" href="/front-desk/fd-07-in-house-guests/#FK-10027" data-leads-to="FD-07">{"Dr Claire Dubois"}</a>
                        </dd>
                        <dt>{"Type"}</dt>
                        <dd>{"Billing"}</dd>
                        <dt>{"Department"}</dt>
                        <dd>{"Front office"}</dd>
                        <dt>{"Severity"}</dt>
                        <dd>{"Minor"}</dd>
                        <dt>{"Raised · due"}</dt>
                        <dd>{"09:05 · 09:20"}</dd>
                        <dt>{"SLA"}</dt>
                        <dd>
                          <span className="fd-chip fd-chip--bad">{"Overdue 22 min"}</span>
                        </dd>
                        <dt>{"Status"}</dt>
                        <dd>{"Escalated"}</dd>
                        <dt>{"Escalation level"}</dt>
                        <dd>{"2"}</dd>
                      </dl>
                      <h3 className="fd-h3">{"Timeline"}</h3>
                      <ol className="fd-timeline">
                        <li>
                          <strong>{"09:05"}</strong>
                          {" Raised"}
                          <span className="fd-sub">{"Complaint CP-0422-02 entered · Sneha Joseph"}</span>
                        </li>
                        <li>
                          <strong>{"09:06"}</strong>
                          {" Assigned"}
                          <span className="fd-sub">{"Sent to Front office · System"}</span>
                        </li>
                        <li>
                          <strong>{"09:11"}</strong>
                          {" Started"}
                          <span className="fd-sub">{"Front office is working on it · Front office"}</span>
                        </li>
                        <li>
                          <strong>{"09:20"}</strong>
                          {" Escalated"}
                          <span className="fd-sub">{"Level 2 – Front Office Manager informed (FDS-17, FD-X06) · System"}</span>
                        </li>
                      </ol>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Assign / reassign"}</h2>
                        <div className="s-grid2">
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f573">
                              {"Department "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f573" name="dept" required={true} defaultValue={"Front office"}>
                                <option value="Housekeeping">{"Housekeeping"}</option>
                                <option value="Engineering">{"Engineering"}</option>
                                <option value="F&B">{"F&B"}</option>
                                <option value="Front office">{"Front office"}</option>
                                <option value="Security">{"Security"}</option>
                                <option value="Concierge">{"Concierge"}</option>
                                <option value="IT">{"IT"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f574">{"Person"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f574" name="person">
                                <option value="Unassigned">{"Unassigned"}</option>
                                <option value="Duty supervisor">{"Duty supervisor"}</option>
                                <option value="On-shift staff">{"On-shift staff"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Reassign to change who works on it"}</span>
                          </div>
                        </div>
                      </section>
                      <section className="fd-sec">
                        <h2 className="fd-sec__t">{"Resolution"}</h2>
                        <div className="fd-grid1">
                          <div className="field">
                            <label className="field__label" htmlFor="f575">
                              {"Action taken "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </label>
                            <textarea className="field__input field__input--area" id="f575" name="action" required={true} maxLength="500" defaultValue={""} />
                            <span className="field__hint">{"Required to close a complaint"}</span>
                          </div>
                          <div className="field" data-fw="s">
                            <label className="field__label" htmlFor="f576">{"Root cause"}</label>
                            <div className="field__wrap">
                              <select className="field__input field__input--select" id="f576" name="root" defaultValue={""}>
                                <option value="" />
                                <option value="Training">{"Training"}</option>
                                <option value="Maintenance">{"Maintenance"}</option>
                                <option value="Process">{"Process"}</option>
                                <option value="Guest expectation">{"Guest expectation"}</option>
                                <option value="Vendor">{"Vendor"}</option>
                              </select>
                              <svg className="icon field__chevron" viewBox="0 0 24 24" aria-hidden="true">
                                <use href="/assets/icons/sprite.svg#chevron-down" />
                              </svg>
                            </div>
                            <span className="field__hint">{"Complaints only"}</span>
                          </div>
                          <fieldset className="field fd-fieldset">
                            <legend className="field__label">
                              {"Guest feedback "}
                              <span className="field__req" title="Required">{"*"}</span>
                            </legend>
                            <div className="row fd-multi">
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Satisfied" required={true} />
                                <span className="check__box" />
                                {"Satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not satisfied" required={true} />
                                <span className="check__box" />
                                {"Not satisfied"}
                              </label>
                              <label className="check check--radio">
                                <input className="check__input" type="radio" name="fb" value="Not asked" required={true} defaultChecked={true} />
                                <span className="check__box" />
                                {"Not asked"}
                              </label>
                            </div>
                            <span className="field__hint">{"A complaint cannot be closed without feedback"}</span>
                          </fieldset>
                          <div className="field field--toggle" data-fw="s">
                            <label className="sw" htmlFor="f578">
                              <input id="f578" type="checkbox" role="switch" name="cb" />
                              <span className="sw__track" />
                              {"Callback done"}
                            </label>
                          </div>
                        </div>
                        <a className="btn" href="/front-desk/fd-08-guest-folio/#FD-P10-FK-10027" data-leads-to="FD-P10">
                          <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <use href="/assets/icons/sprite.svg#tag" />
                          </svg>
                          {"Compensation (allowance)"}
                        </a>
                      </section>
                    </div>
                  </div>
                  <div className="modal__foot">
                    <button className="btn" type="submit" formAction="/front-desk/fd-11-requests-complaints/#saved" formNoValidate={true}>{"Save"}</button>
                    <button className="btn btn--primary" type="submit" formAction="/front-desk/fd-11-requests-complaints/#closed" aria-label="Mark done / close">
                      {"Mark done"}
                      <span className="ph-x">{" / close"}</span>
                    </button>
                    <a className="btn" href="/front-desk/fd-22-front-desk-reports/report-viewer.html#FD-R27" data-leads-to="FD-R27">
                      <svg className="icon" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <use href="/assets/icons/sprite.svg#file-text" />
                      </svg>
                      {"Report"}
                    </a>
                    <a className="btn" href="#main">{"Cancel"}</a>
                  </div>
                </form>
              </div>
              <div className="fd-toast" id="raised" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Raised"}
                  <small>{"The department has been told and the SLA timer is running."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="saved" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Saved"}
                  <small>{"The timeline has a new entry."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast" id="closed" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#check-circle" />
                </svg>
                <div className="fd-toast__text">
                  {"Marked done"}
                  <small>{"The guest is told and the request moves to Done."}</small>
                </div>
                <a className="fd-toast__x" href="#main" aria-label="Dismiss">
                  <svg className="icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <use href="/assets/icons/sprite.svg#x" />
                  </svg>
                </a>
              </div>
              <div className="fd-toast fd-toast--warn" id="reopened" role="status" aria-live="polite">
                <svg className="icon" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <use href="/assets/icons/sprite.svg#alert" />
                </svg>
                <div className="fd-toast__text">
                  {"Reopened"}
                  <small>{"The SLA timer starts again."}</small>
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
                  <span className="code-chip">{"FD-11"}</span>
                </summary>
                <dl className="helpbox__body">
                  <dt>{"What it is for"}</dt>
                  <dd>{"Record, route to department, SLA timer, escalation, guest callback"}</dd>
                  <dt>{"Opened from"}</dt>
                  <dd>
                    <Link to={"/front-desk/fd-07-in-house-guests"}>{"FD-07"}</Link>
                    {", "}
                    <Link to={"/front-desk/fd-01-front-desk-home"}>{"FD-01"}</Link>
                    {", sidebar"}
                  </dd>
                  <dt>{"Leads to"}</dt>
                  <dd>
                    <a href="/front-desk/fd-11-requests-complaints/#FD-P20">{"FD-P20"}</a>
                    {", "}
                    <a href="/front-desk/fd-11-requests-complaints/#FD-11-1">{"FD-11-1"}</a>
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
