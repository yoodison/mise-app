import { useNavigate, useLocation } from 'react-router-dom';
import { MISE } from '../tokens.js';
import { IcCompass, IcTicket, IcComm, IcPerson } from './Icons.jsx';

export default function MiseTabBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { key: '발견', path: '/',          icon: <IcCompass /> },
    { key: '팟',   path: '/pot',       icon: <IcTicket /> },
    { key: '커뮤니티', path: '/community', icon: <IcComm /> },
    { key: '프로필',   path: '/profile',   icon: <IcPerson /> },
  ];

  const active = (() => {
    if (location.pathname.startsWith('/pot')) return '팟';
    if (location.pathname.startsWith('/community')) return '커뮤니티';
    if (location.pathname.startsWith('/profile') || location.pathname.startsWith('/settings')) return '프로필';
    return '발견';
  })();

  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 40,
      padding: '10px 14px 28px',
      background: 'linear-gradient(180deg, rgba(250,250,248,0) 0%, rgba(250,250,248,0.96) 30%, #FAFAF8 100%)',
      borderTop: '0.5px solid rgba(10,10,9,0.06)',
      display: 'flex', justifyContent: 'space-around',
    }}>
      {tabs.map(t => (
        <div key={t.key} onClick={() => navigate(t.path)} style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
          color: active === t.key ? MISE.gold : MISE.ink35,
          fontSize: 10, fontWeight: active === t.key ? 600 : 500,
          letterSpacing: '0.02em', cursor: 'pointer',
        }}>
          <div style={{ width: 22, height: 22 }}>{t.icon}</div>
          {t.key}
        </div>
      ))}
    </div>
  );
}
