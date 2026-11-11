// Same session storage as the legacy app (sessionStorage key "avivpms.session"),
// so a session started here is also seen by any legacy page opened in the same tab.
const SESSION_KEY = 'avivpms.session';

export function getSession() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null');
  } catch {
    return null;
  }
}

export function setSession(user) {
  try {
    if (user) sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
    else sessionStorage.removeItem(SESSION_KEY);
  } catch {
    /* storage blocked: the session lives only in this page */
  }
}

// Demo sign-in, same demo values as the legacy mock auth service (js/services/mock/auth.js).
// This is NOT real security: replace with the real auth API before going live.
export const DEMO_PASSWORD = 'Aviv@2026';
export const DEMO_CODES = ['123456', '2026']; // one-time code or PIN

export function demoUser(email) {
  const name = 'Anita Mohan';
  return {
    id: 'demo-user',
    name,
    role: 'Reservation Manager',
    roleId: 'reservation-manager',
    email,
    signedInAt: new Date().toISOString(),
  };
}
