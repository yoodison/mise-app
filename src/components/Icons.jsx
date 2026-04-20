export function IcCompass({ style = {} }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%', ...style }}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M15.5 8.5L13 13l-4.5 2.5L11 11z" fill="currentColor" stroke="none"/>
    </svg>
  );
}

export function IcTicket({ style = {} }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%', ...style }}>
      <path d="M3 8a2 2 0 012-2h14a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 100-4V8z"/>
      <path d="M12 6v2M12 11v2M12 16v2"/>
    </svg>
  );
}

export function IcComm({ style = {} }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%', ...style }}>
      <path d="M21 12a8 8 0 01-11.5 7.2L4 20l1-4.5A8 8 0 1121 12z"/>
    </svg>
  );
}

export function IcPerson({ style = {} }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%', ...style }}>
      <circle cx="12" cy="8" r="4"/>
      <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>
    </svg>
  );
}
