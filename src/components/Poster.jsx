import { MISE } from '../tokens.js';

export default function Poster({ tone = '#1E1B17', accent = '#2A2520', title, year, director, w, h, radius = 4, style = {} }) {
  return (
    <div style={{
      width: w, height: h, borderRadius: radius,
      background: `linear-gradient(155deg, ${accent} 0%, ${tone} 55%, #000 105%)`,
      position: 'relative', overflow: 'hidden', flexShrink: 0,
      fontFamily: MISE.fontSans, color: '#FAFAF8',
      ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.07) 0%, transparent 55%)',
      }}/>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.35,
        backgroundImage: 'repeating-linear-gradient(42deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 3px)',
      }}/>
      {title && (
        <div style={{
          position: 'absolute', left: '8%', right: '8%', bottom: '10%',
          fontFamily: MISE.fontSerif,
          fontSize: Math.max(7, Math.min(typeof w === 'number' ? w : 80, typeof h === 'number' ? h : 120) * 0.11),
          lineHeight: 1.1, fontWeight: 500, letterSpacing: '0.01em',
          color: 'rgba(250,250,248,0.95)',
        }}>
          {title}
          {year && (
            <div style={{
              fontFamily: MISE.fontSans, fontWeight: 400,
              fontSize: Math.max(5, Math.min(typeof w === 'number' ? w : 80, typeof h === 'number' ? h : 120) * 0.055),
              letterSpacing: '0.12em', color: 'rgba(250,250,248,0.55)',
              marginTop: 2, textTransform: 'uppercase',
            }}>
              {director}{director && year ? ' · ' : ''}{year}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
