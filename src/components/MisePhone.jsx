import { MISE } from '../tokens.js';

export default function MisePhone({ children, width = 390, height = 844, bg = MISE.warm }) {
  return (
    <div style={{
      width, height, borderRadius: 46, padding: 10, background: '#0A0A09',
      boxShadow: '0 30px 60px rgba(0,0,0,0.22), 0 0 0 1px rgba(10,10,9,0.18)',
      flexShrink: 0,
    }}>
      <div style={{
        width: '100%', height: '100%', borderRadius: 36, overflow: 'hidden',
        position: 'relative', background: bg, fontFamily: MISE.fontSans,
      }}>
        <div style={{
          position: 'absolute', top: 9, left: '50%', transform: 'translateX(-50%)',
          width: 108, height: 32, borderRadius: 20, background: '#000', zIndex: 50,
        }}/>
        {children}
      </div>
    </div>
  );
}
