import { MISE } from '../tokens.js';

export default function MiseStatus({ dark = false }) {
  const c = dark ? 'rgba(250,250,248,0.95)' : MISE.ink;
  return (
    <div style={{
      height: 44, padding: '0 22px', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', fontFamily: MISE.fontSans,
      fontSize: 14, fontWeight: 600, color: c, flexShrink: 0,
    }}>
      <span>9:41</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="17" height="11" viewBox="0 0 17 11">
          <rect x="0" y="7" width="3" height="4" rx="0.6" fill={c}/>
          <rect x="4.5" y="5" width="3" height="6" rx="0.6" fill={c}/>
          <rect x="9" y="2.5" width="3" height="8.5" rx="0.6" fill={c}/>
          <rect x="13.5" y="0" width="3" height="11" rx="0.6" fill={c}/>
        </svg>
        <svg width="24" height="12" viewBox="0 0 24 12">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke={c} strokeOpacity="0.4" fill="none"/>
          <rect x="2" y="2" width="18" height="8" rx="1.6" fill={c}/>
          <path d="M22.5 4v4c.8-.3 1.2-1 1.2-2s-.4-1.7-1.2-2z" fill={c} fillOpacity="0.5"/>
        </svg>
      </span>
    </div>
  );
}
